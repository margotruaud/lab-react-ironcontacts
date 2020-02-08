import React from 'react'

function Celebrity(props){
  return (
    <tr key={props.key}>
          <td> <img src = {props.pictureUrl}></img></td>
          <td> {props.name} </td>    
          <td> {props.popularity}</td>
          <button onClick={(event) => props.clickToDelete(props.name)}>Delete</button>
         </tr>
  )
}

export default Celebrity;