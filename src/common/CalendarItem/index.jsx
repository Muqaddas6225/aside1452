
import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const CalendarItem = (props) => {
  return (
        <>
             <h4>{props.title}</h4>
            <Row className='calendar-desc'>
                <Col className='icon-calendar'>
                    <div><img src={props.img}/></div>
                </Col>
                <Col className='date-calendar'>
                    <div>
                        <p>{props.day} <br/> {props.month}</p>
                    </div>
                </Col>
            </Row>
        </>
  )
}

export default CalendarItem