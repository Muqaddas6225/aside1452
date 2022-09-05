
import React from 'react'
import '../../../styles/home/SectionComingSoon.scss';
import CardsComingSoon from './comingSoon';
import Heading from 'common/headings';
import CardComponent from 'common/CardsCS';


// const CardComponent = (props) =>{
//     return (
//         <div>
//         <Card className='comingSoon-card' style={{ width: '350px' }}>
//             <Card.Img className='comingSoonCard-img' variant="top" src={props.img} alt='card img' />
//             <Card.Body>
//                 <Card.Title  className='comingSoonCard-heading'>{props.title}</Card.Title>
//                 <Card.Text  className='comingSoonCard-text'>
//                  {props.text}
//                 </Card.Text>
//             </Card.Body>
    
//         </Card>
//         </div>
//     )
   
// }


function CreatComingSoon(CardsComingSoon){
    return (

     <CardComponent
        key = {CardsComingSoon.id}
        img= {CardsComingSoon.img}
        title = {CardsComingSoon.title}
        text = {CardsComingSoon.text}
     />
       
    );
}





const ComingSoonSection = () => {
    return (
           <section className='comingSoon-section'>
            <div className='container'>
                <Heading 
                    heading3 = 'Coming Soon'
                />
                {/* <div className='comingSoon-Title'>
                <h3>Coming Soon</h3>
                <span className='hr-line'></span>
                </div> */}
                <div className='comingSoon-Cards-section'>  
                   {CardsComingSoon.map(CreatComingSoon)}

                </div>
            </div>
           </section>
          )
}

export default ComingSoonSection

