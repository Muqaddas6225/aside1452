import React from 'react'


const DirectorFilmsTable = (props) => {
  return (

        <tbody>
          <tr>
            <td><img src ={props.img} alt="table"/></td>
            <td>{props.name}</td>
            <td>{props.film}</td>
          </tr>
        </tbody>
     

  )
}

export default DirectorFilmsTable