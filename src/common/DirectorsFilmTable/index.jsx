import React from 'react'
import Table from 'react-bootstrap/Table';

const DirectorFilmsTable = (props) => {
  return (

        <tbody>
          <tr>
            <td><img src ={props.img}/></td>
            <td>{props.name}</td>
            <td>{props.film}</td>
          </tr>
        </tbody>
     

  )
}

export default DirectorFilmsTable