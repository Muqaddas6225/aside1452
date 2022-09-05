import React from 'react';
import '../../../styles/Individuallisting/Status.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { time } from 'assests/images';
const Status = () => {
  return (
    <section className='status-section'>
        <div className='container'>
            <Row className='status-row'>
                <Col lg={3}>
                    <div className='status-btn-div' >
                        <button>Status:<span>Trading</span></button>
                    </div>
                </Col>
                <Col lg ={9}>
                    <div className='progress-div' >                         
                        <div><p><span><img src={time}/></span>2 Days left</p></div>
                        {/* <label for="file">Downloading progress:</label> */}
                        <progress className='progress-div-bar' id="file" value="45" min='0' max="100"><p>45%</p></progress>
                    </div>
                </Col>
                
            </Row>
        </div>
    </section>
  )
}

export default Status