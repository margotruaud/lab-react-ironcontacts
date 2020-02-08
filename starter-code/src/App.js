import React, { Component } from 'react'
import contacts from './contacts.json'
import Celebrity from './Celebrity.js';

var listContacts=[];

for (let i=0; i<5; i+=1){
    listContacts.push(contacts[i]);
}




class App extends Component{
  state = {
    myContacts: listContacts
  }


  newRandomContact = () => {
    const contacts2 = [...this.state.myContacts];
    var newContact=contacts[Math.trunc(Math.random()*contacts.length)];
    contacts2.push(newContact);
    this.setState({
      myContacts: contacts2
    })
  }

  sortByName = () => {
    var contacts2 = [...this.state.myContacts];
    contacts2.sort((a, b) => a.name.localeCompare(b.name, 'fr', {ignorePunctuation: true}));
    this.setState({
      myContacts: contacts2
    })
  }

  sortByPopularity = () => {
    var contacts2 = [...this.state.myContacts];
    contacts2.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      myContacts: contacts2
    })
  }

  deleteContactHandler = (name) =>{
    const contacts2 = [...this.state.myContacts] 

    const contactIndex = contacts2.findIndex(el => el.name === name)
    contacts2.splice(contactIndex, 1)

    this.setState({
      myContacts: contacts2
    })
  }
  

  render(){
    return (
      <div>
      <button onClick={this.newRandomContact}>Add New Random Contact</button>
      <button onClick={this.sortByName}>Sort Contact by Name</button>
      <button onClick={this.sortByPopularity}>Sort Contact by Popularity</button>
      <table>
        <thead>
          <tr>
            <th colspan="2"> IronContacts </th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td> Picture </td>
              <td> Name</td>
              <td> Popularity</td>
         </tr>
         {this.state.myContacts.map(item => {
          return <Celebrity key={item.name} {...item} clickToDelete={this.deleteContactHandler} />
        })}
            
        </tbody>
      </table>
      </div>
    )
  }
}

export default App;