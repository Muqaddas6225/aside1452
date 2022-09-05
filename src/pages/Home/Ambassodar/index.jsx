import React from 'react'
import '../../../styles/home/ambassodor.scss'
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Ambassodor = () => {
  return (
   <section className='ambassodor-section' >
    <div className='container'> 
     <div className='get-rewards'>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header><p>Become an Ambassodor & get rewards</p></Accordion.Header>
          <Accordion.Body>
            <Row className='ambassodor-body'>
                <Col lg={8} md= {12} className='ambassodar-desc'>
                  <p>
                    Invite your friends to join Anote Music and get rewarded.
                    This section enables you to invite your friends to join the ANote Music Platform.
                    When they sign up using your unique referral code,
                    we will make sure to award your account in return.
                    Click here to discover our Ambassador programs.
                  </p>
                </Col>
              <Col lg={4} md={12} className='copy-link'>
                <input type='text' placeholder='referral=a096545sd' />
                <label>Copy & share your link</label>

              
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      
      </Accordion>
     </div>
    </div>
   </section>
  )
}

export default Ambassodor