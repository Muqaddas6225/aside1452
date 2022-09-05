
import Heading from 'common/headings'
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  cmnt, date } from 'assests/images';
 import '../../../styles/Individuallisting/IndividualNews.scss'


const IndividualNews= () =>{
  return (
    <section className='IndividualNews-section'>
        <div className='container'>
            <Heading
                heading3 = "News"
            />
        </div>
        <div className='I-News-section'>

        <div className='container'>
            <Row  className='I-News-content' >
            <Col lg ={6} className ="I-News-desc">
                <h3>Second Silver Plaque for IRMA Records’ YouTube Channel</h3>
                <div className='date-cmnt'>
                    <p className='date-cmnt-p'><span><img src={date} alt='date'/></span>October 7, 2021</p>
                    <p className='date-cmnt-p'><span><img src={cmnt} alt='cmnt'/></span>20 Comments</p>
                </div>
                <p>Suscipit at id cras sed. Turpis lorem tempus, ut felis consectetur ut sit. Mattis imperdiet feugiat id leo. Urna facilisis eget adipiscing laoreet feugiat. Massa lectus eleifend dolor commodo</p>
               
            </Col>
            </Row>
        </div>
   
    </div>
    </section>
  )
}

export default IndividualNews