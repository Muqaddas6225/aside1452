import React from 'react'
import Heading from 'common/headings';
import Card from 'react-bootstrap/Card';

import '../../../styles/SecondaryMarket/relevantNews.scss'
import NewsCard from 'common/NewsCard';
import NewsCardData from 'common/NewsCard/NewsCardData';




const creatNewsCard = (NewsCardData)=>{

    return (
        <NewsCard
            key = {NewsCardData.id}
            widthStyle = '18rem'
            title = {NewsCardData.title}
            img = {NewsCardData.img}
            text = {NewsCardData.text}
            date = {NewsCardData.date}
            comment = {NewsCardData.comment}
        />
    );
    
}

const RelevantNews = () => {

  // const customButton = (value) => {
  //   return(
  //     <button>{value}</button>
  //   )
  // }
  return (
    <section>
        <div className='container'>
            <Heading
                heading3 ="Relevant News"
                // customButton={customButton}
            />
        <div className='newscard-section' >
        {NewsCardData.map(creatNewsCard)}
             {/* <NewsCard/> */}
        </div>
        <div className='ReadNewsButton'>
        {/* {customButton('asdf')} */}
          <button className='readNews'>Read More News</button>
        </div>

        </div>
    </section>
  )
}

export default RelevantNews