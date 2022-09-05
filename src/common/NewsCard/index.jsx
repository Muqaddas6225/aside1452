import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../styles/common/newsCard.scss';
// import { Newscard_bg } from 'assests/images';
import { cmnt, date } from 'assests/images';


const NewsCard = (props) => {
  return (
    <div className='newscard-div'>
    {/* className={(props.widthStyle== '18rem') ? "card1" : "card2"}  */}
    <Card>
    <div className='card-content'>
       <div className='img-div' ><img src={props.img} alt='card'/></div>
      
        {/* <div className='newscard-gradiant'> */}
        {/* style={{position:"absolute", top:"50%" ,left:'5%'}} */}
          <div className='news-body' >
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text2}</Card.Text>
              <Card.Text className='date-cmnt'>
                  <p className='date'><span><img src={date} alt='card'/></span>{props.date}</p>
                  <p className='comment'><span><img src={cmnt} alt='card'/></span>{props.comment}</p>
              </Card.Text>
              <Card.Text>{props.text}</Card.Text>
          </div> 
        {/* </div>  */}
    </div>
          
    </Card>
</div>
   
  )
}

export default NewsCard