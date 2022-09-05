import WatchistHeading from 'common/watchlistHeading'
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../../styles/common/VideoCard.scss'
import '../../../styles/Community/filmhub.scss'
import { loading} from 'assests/images';
import { filmhubImg } from 'assests/images';
import youtubevideoCardData from 'common/youtubeVideoCard/YoutubeVideoCardData';
import YoutubevideoCard from 'common/youtubeVideoCard';






const creatyoutubevideoCard = (youtubevideoCardData)=>{

  return (
      <YoutubevideoCard
          key = {youtubevideoCardData.id}
          // widthStyle = '18rem'
          title = {youtubevideoCardData.title}
          img = {youtubevideoCardData.img}
          text2 = {youtubevideoCardData.text2}
          date = {youtubevideoCardData.date}
          view = {youtubevideoCardData.view}
      />
  );
  
}





const FilmHub = () => {
  return (
      <section>
        <div className='container'>
            <WatchistHeading
              heading3 ="Film Hub"
              watchlistPara =" Velit eget dignissim consectetur amet, 
              donec tellus turpis. Viverra mollis commodo ultrices a adipiscing arcu laoreet mi."
            />
          <div className='section-filmhub'>
            <div>
             <Card className='filmhub-card'>
               <div className='filmhub-content' >
                  <div className='filmhubImg-div' >
                  <Card.Img className='filmhub-img' variant="top" src={filmhubImg} />
                  </div>
                  <span className='loading'>
                      <img src={loading} alt='loading' />
                  </span>
                  
               </div>
             </Card>
            </div>

            <div className='YoutubeVideo-div'>
               {youtubevideoCardData.map(creatyoutubevideoCard)}
            </div>
            
          </div>

        </div>
      </section>
  )
}

export default FilmHub