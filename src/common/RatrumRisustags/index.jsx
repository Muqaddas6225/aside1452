import React from 'react';

const RatrumTags = (props) => {
  return (
    <div className='tags'>
        <img src={props.image} alt='card'/>
        <div> <h3>{props.name}</h3>
        <p>{props.price}</p></div>
   </div>
  )
}

export default RatrumTags