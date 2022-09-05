import React from 'react'
import Card from 'react-bootstrap/Card';
// import './SectionComingSoon.css';
// import CardsComingSoon from './comingSoon';
import '../../styles/common/comingSoonCards.scss';

const CardComponent = (props) =>{
    return (
        <div>
        <Card className='comingSoon-card' style={{ maxWidth : '350px' }}>
            <Card.Img className='comingSoonCard-img' variant="top" src={props.img} alt='card img' />
            <Card.Body>
                <Card.Title  className='comingSoonCard-heading'>{props.title}</Card.Title>
                <Card.Text  className='comingSoonCard-text'>
                 {props.text}
                </Card.Text>
            </Card.Body>
    
        </Card>
        </div>
    )
   
}

export default CardComponent