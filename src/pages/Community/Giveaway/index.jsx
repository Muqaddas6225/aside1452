import Heading from 'common/headings'
import React from 'react';
import '../../../styles/Community/Giveaway.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Giveaway = () => {
  return (
   <section >
    <div className='container'>
        <Heading heading3='Giveaways'/>
    </div>
    <div className='giveaway-section'>
    <div className='giveaway-section2'>
        <div className='container'>
            <Row  className='giveaway-content' >
            <Col lg ={6} className ="giveaway-desc">
                <h3>Second Silver Plaque for IRMA Records’ YouTube Channel</h3>
                <p>Suscipit at id cras sed. Turpis lorem tempus, ut felis consectetur ut sit. Mattis imperdiet feugiat id leo. Urna facilisis eget adipiscing laoreet feugiat. Massa lectus eleifend dolor commodo</p>
                <button type='submit'>Enter into Raffle</button>
            </Col>
            </Row>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Giveaway