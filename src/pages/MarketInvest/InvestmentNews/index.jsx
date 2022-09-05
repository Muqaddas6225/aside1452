import React from 'react';
import Heading from 'common/headings';
import '../../../styles/MarketInvest/investmentNews.scss';

import { Pagination} from 'swiper';
import '../../../styles/home/reviews.scss'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const InvestmentNews = () => {
  return (
   <section>
    <Heading
        heading3 ="Investment News"
    />
    <div className='InvestmentNewsContent' >
        <div className='container'>
        <div className='slider-div'>
        <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
                <div>
                    <h3>Second Silver Plaque for IRMA <br/>Records’ YouTube Channel</h3>
                    <p>October 7, 2021</p>
                </div>
                    
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h3>Second Silver Plaque for IRMA <br/>Records’ YouTube Channel</h3>
                    <p>October 7, 2021</p>
                </div>
                    
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <h3>Second Silver Plaque for IRMA <br/>Records’ YouTube Channel</h3>
                    <p>October 7, 2021</p>
                </div>
                    
            </SwiperSlide>
           
           
            
    
            </Swiper>
       
        </div>
       
        </div>
    </div>

   </section>
  )
}

export default InvestmentNews