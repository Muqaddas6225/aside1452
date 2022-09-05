import React from 'react'

const WatchistHeading = (props) => {
  return (
    <>  
        <div className='secondary-heading'>
                <h3 style={{marginBottom :'0'}} >{props.heading3}</h3>
                <p style={{marginBottom :'0', textAlign:'center'}}>{props.watchlistPara}</p>
                <span className='hr-line'></span>
           </div>
    </>
  )
}

export default WatchistHeading