import Card from 'react-bootstrap/Card';
import '../../styles/common/VideoCard.scss'
import { loading, Star, time } from 'assests/images';

const VideoCard = (props) =>{
    return (

       <div className='VideoCard-div'>
       <Card className='video-card'>
            <div className='video-img-content' >
                <div className='videoImg-div' >
                <Card.Img className='video-img' variant="top" src={props.img} />
                </div>
                <span className='loading'>
                    <img src={loading} alt='loading' />
                </span>
                <span className='star'>
                    <img src={Star} alt='star'/>
                </span>
            </div>
           <Card.Body className='video-card-desc'>
                <div className='remaining-days'>
                    <img src={time} alt="time"/>
                    <p>2 Days left</p>
                </div>
               <Card.Title  className='video-heading'>{props.title}</Card.Title>
               <Card.Text  className='video-text'>
                 {props.text}
               </Card.Text>
           </Card.Body>
           <Card.Body className='video-card-info'>
                <Card.Text className='video-pricing'>
                        <div className='initial-target'>
                            <p>{props.initialTarget}</p>
                            <span>{props.price}</span>
                        </div>
                        <div className='Right-sold'>
                            <p>{props.rightSold}</p>
                            <span>{props.soldPer}</span>
                        </div>
                        <div className='asset-class'>
                            <p>{props.assetclass}</p>
                            <span>{props.type}</span>
                        </div>
                    
                </Card.Text>
           </Card.Body>
           <Card.Body>
                <div  className='video-card-total'>
                <div className='video-card-total-price'><span>€22,400</span></div>
                </div>
                
           </Card.Body>
       </Card>
       </div>

    )
   
}

export default VideoCard