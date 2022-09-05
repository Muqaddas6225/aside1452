import React from 'react';
import '../../styles/footer/footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
  return (
   <section className='footer-section'>
    <div className='container'>
     <Row className='footer-row'>
        <Col lg={4} md={4} className="disclaimer-col">
            <div className='disclaimer-content' >
                <h3>Disclaimer</h3>
                <p>Vel ullamcorper pellentesque quisque mi sed mauris platea.
                 Nisl nunc odio ac leo ac mauris eget velit. Ut ultricies 
                 consectetur ut eu a sit dignissim neque lectus.</p>
            </div>

        </Col>
        <Col  lg={2}  md={4} className='AsideFilms-col'>
            <div className='AsideFilms-content'>
                <h3>Aside Films</h3>
                <ul>
                    <li>Work With Us</li>
                    <li>Alumni</li>
                </ul>
            </div>
        </Col>
        <Col  lg={2}  md={4} className='Support-col'>
            <div  className='Support-content'>
                <h3>Support</h3>
                <ul>
                    <li>How it Works</li>
                    <li>FAQ’s</li>
                    <li>Video Tutorials</li>
                    <li>Investor Guide</li>
                </ul>
            </div>
        </Col>
        <Col  lg={2}  md={4} className='Contact-col'>
            <div className='Contact-content'>
                <h3>Contact</h3>
                <ul>
                    <li><span></span>000-999-000</li>
                    <li><span></span>Street 4, building 3, Office#5 California USA</li>
                </ul>
            </div>
        </Col>
        <Col  lg={2}  md={4} className='Policies-col'>
            <div className='Policies-content'>
                <h3>Policies</h3>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Ethics</li>
                    <li>Fraud</li>
                </ul>
            </div>
        </Col>
     </Row>

    </div>
    <hr style={{border: "2px solid #76D3BE"}}></hr>
    <div className='container'>
        <div>
            <p>All Rights Reserved</p>
            <div></div>
        </div>
    </div>
   </section>
  )
}

export default Footer