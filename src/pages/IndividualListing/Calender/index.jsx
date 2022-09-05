import Heading from 'common/headings'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../styles/Individuallisting/calendar.scss'
import {  recieved , update, calendarImg} from 'assests/images';
import CalendarItem from 'common/CalendarItem';
const Calendar = () => {
  return (
   <section className='Calendar-section'>
    <div className='container'>
        <Heading
            heading3 = "Calendar"
        />
        <Row className='calendar-list'>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                    title = "Payout"
                    img = {recieved}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                    title = "News"
                    img = {calendarImg}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                   title = "News"
                    img = {calendarImg}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                    title = "Update"
                    img = {update}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                    title = "Payout"
                    img = {recieved}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
            <Col lg ={2} className='calendar-item'>
                <CalendarItem
                    title = "Payout"
                    img = {recieved}
                    day ="12"
                    month =" OCT"
                />      
            </Col>
       </Row> 
       <div className='btn-div'>
        <button>Invest Now</button>
     </div>
    </div>
   
   
   </section>
  )
}

export default Calendar