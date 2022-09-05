import React from 'react'

const Heading = (props) => {
  return (
    <>
          <div className='secondary-heading'>
                <h3>{props.heading3}</h3>
                <span className='hr-line'></span>
           </div>
    </>
  )
}

export default Heading