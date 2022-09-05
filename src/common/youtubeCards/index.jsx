import React from 'react';
import Card from 'react-bootstrap/Card';
// import '../../styles/common/newsCard.scss';
import {cmnt, date} from '../../assests/images'
import '../../styles/common/youtubeCard.scss';


const YoutubeCard = (props) => {
  return (
    <div className='YoutubeCard-div'>
      <Card className= {[(props.widthStyle == '39rem') ? "card1" : "card2" && (props.flex=='column') ? 'card3' : 'card4']} >
          <img src={props.img} style={{width:"100%", height:'100%'}} />
          <Card.Body>
          <div className='youtubecard-body'>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text className='youtubecard-desc'>
            {props.text2}
              </Card.Text>
              <Card.Text className='youtubecard-date-cmnt'>
                  <p className='youtubecard-date'><span><img src={date} /></span>{props.date}</p>
                  <p className='youtubecard-comment'><span><img src={cmnt} /></span>{props.comment}</p>
                  <p className='youtubecard-share'><span><img src={props.shareicon} alt =""/></span>{props.share}</p>
              </Card.Text>
            
              <Card.Text className='youtubecard-desc'>
            {props.text}
              </Card.Text>
          </div>         
          </Card.Body>
      </Card>
    </div>
   
  )
}

export default YoutubeCard