import Heading from 'common/headings'
import React from 'react'
import youtubeCardData from 'common/youtubeCards/youtubeCardData';
import YoutubeCard from 'common/youtubeCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from 'common/NewsCard';
import NewsCardData from 'common/NewsCard/NewsCardData';
import '../../../styles/Community/blogs.scss';
import {Newscard_bg2 } from 'assests/images';


const Blogs = () => {
  return (
    <section>
        <div className='container'>
            <Heading 
                heading3 ="Blogs"
            />
            <div className='blogs-div'>
            <Row className='blogs-row'>
                <Col lg ={3} md={6}> 
                  <YoutubeCard
                        key = {youtubeCardData[1].id}
                        // widthStyle = '15rem'
                        flex= 'column'
                        title = {youtubeCardData[1].title}
                        img = {youtubeCardData[1].img}
                        text2 = {youtubeCardData[1].text2}
                        date = {youtubeCardData[1].date}
                        comment = {youtubeCardData[1].comment} 
                        share = {youtubeCardData[1].share}
                        shareicon = {youtubeCardData[1].shareIcon}
                    />
                 </Col>
                <Col lg={6} md={6} className="blogNewsCard" >
                <NewsCard
                        key = '0'
                        widthStyle = '18rem'
                        title = "Second Silver Plaque for IRMA Records’ YouTube Channel"
                        img = {Newscard_bg2 }
                        text2 = 'Suscipit at id cras sed. Turpis lorem tempus, ut felis consectetur ut sit. Mattis imperdiet feugiat id leo.'
                        date = "October 7, 2021"
                        comment = "20 Comments"
                    />
                </Col>
                <Col lg={3} md={6}>
                <YoutubeCard
                        key = {youtubeCardData[1].id}
                        // widthStyle = '15rem'
                        flex= 'column'
                        title = {youtubeCardData[1].title}
                        img = {youtubeCardData[1].img}
                        text2 = {youtubeCardData[1].text2}
                        date = {youtubeCardData[1].date}
                        comment = {youtubeCardData[1].comment} 
                        share = {youtubeCardData[1].share}
                        shareicon = {youtubeCardData[1].shareIcon}
                        />
                </Col>
            

            </Row>
            </div>
        </div>
    </section>
  )
}

export default Blogs