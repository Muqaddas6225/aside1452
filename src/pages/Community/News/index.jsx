import React from 'react'
import Heading from 'common/headings'
import '../../../styles/Community/News.scss'
import youtubeCardData from 'common/youtubeCards/youtubeCardData';
import YoutubeCard from 'common/youtubeCards';




const creatyoutubeCard = (youtubeCardData) => {

  return (
      <YoutubeCard
          key = {youtubeCardData.id}
          flex= 'row'
          title = {youtubeCardData.title}
          img = {youtubeCardData.img}
          date = {youtubeCardData.date}
          comment = {youtubeCardData.comment}
      />
  );
  
}


const News = () => {
  return (
    <section>
        <div className='container'>
            <Heading heading3= 'News'/>
            <div className='youtubeCard-grid' >
              <div className='grid-1'>
                <YoutubeCard
                        key = {youtubeCardData[0].id}
                        widthStyle = '39rem'
                        // flex= 'column'
                        title = {youtubeCardData[0].title}
                        img = {youtubeCardData[0].img}
                        text = {youtubeCardData[0].text}
                        date = {youtubeCardData[0].date}
                        comment = {youtubeCardData[0].comment} 
                        share = {youtubeCardData[0].share}
                        shareicon = {youtubeCardData[0].shareIcon}
                    />
              </div>
              <div className='grid-2'>
                {youtubeCardData.map((card, i) => i > 0 && creatyoutubeCard(card))}     
              </div>
             
            </div>
        </div>
    </section>
  )
}

export default News