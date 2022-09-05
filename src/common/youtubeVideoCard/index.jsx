import React from 'react';
import Card from 'react-bootstrap/Card';
// import '../../styles/common/newsCard.scss';
// import {cmnt, date} from '../../assests/images'
import '../../styles/common/youtubevideocard.scss';


const YoutubevideoCard = (props) => {
  return (
    <div className='youtubevideocard-div'>
    {/* className= {[(props.widthStyle == '39rem') ? "card1" : "card2" && (props.flex=='column') ? 'card3' : 'card4']}  */}
    <Card >
    <div>
    <img src={props.img}  />
    </div>
       
      <Card.Body>
        <div className='youtubevideocard-body'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className='youtubevideocard-desc'>{props.text2}</Card.Text>
            <Card.Text className='youtubevideocard-date-view'>
                <p className='youtubevideocard-date'>{props.date}</p>
                <p className='youtubevideocard-views'>{props.view}</p>  
            </Card.Text>
            <Card.Text className='youtubevideocard-desc'>{props.text}</Card.Text>
        </div>         
    </Card.Body>
    </Card>
</div>
   
  )
}

export default YoutubevideoCard