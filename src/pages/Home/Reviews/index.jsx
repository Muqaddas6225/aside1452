import React  from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import Heading from 'common/headings';
import { reviewer } from 'assests/images';

import { Pagination } from 'swiper';
import '../../../styles/home/reviews.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { musically, Rolling_Stone_magazine,ForbeslogoCopia,
         internationalAdviser,
         Investment, NASDAQ_Logo,
         investinglogo,
         Wired_logo, } from 'assests/images';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
  

  return (
   <section>
    <div className='container'>
        <div>
            <Heading 
                heading3 = 'Reviews'
            />
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
               <div className='reviewer-content'>
                    <img src={reviewer} alt='slider'/>
                    <div className='reiewer-desc'>
                                  <h3>John Paul Smith</h3>
                                  <h4>CEO & Co-founder</h4>
                                  <p>Hendrerit rhoncus enim in ultricies rhoncus varius non ut eleifend.
                                  Tempor mus lectus mauris vestibulum sit
                                  malesuada accumsan mi. Hendrerit rhoncus enim in ultricies
                                    rhoncus varius non ut eleifend. Tempor mus lec</p>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
            <div className='reviewer-content'>
                      <img src={reviewer} alt='slider'/>
                      <div className='reiewer-desc'>
                                  <h3>John Paul Smith</h3>
                                  <h4>CEO & Co-founder</h4>
                                  <p>Hendrerit rhoncus enim in ultricies rhoncus varius non ut eleifend.
                                  Tempor mus lectus mauris vestibulum sit
                                  malesuada accumsan mi. Hendrerit rhoncus enim in ultricies
                                    rhoncus varius non ut eleifend. Tempor mus lec</p>
                              </div>
                    </div>
            </SwiperSlide>
            
            <SwiperSlide>
            <div className='reviewer-content'>
                      <img src={reviewer}  alt='slider'/>
                      <div className='reiewer-desc'>
                                  <h3>John Paul Smith</h3>
                                  <h4>CEO & Co-founder</h4>
                                  <p>Hendrerit rhoncus enim in ultricies rhoncus varius non ut eleifend.
                                  Tempor mus lectus mauris vestibulum sit
                                  malesuada accumsan mi. Hendrerit rhoncus enim in ultricies
                                    rhoncus varius non ut eleifend. Tempor mus lec</p>
                              </div>
                    </div>
            </SwiperSlide>
            
      ...
            </Swiper>
        </div>
        
        <div>
            <Heading 
                heading3 = 'Partners'
            />
        </div>

    </div>

      <div className='partners-div'>
      <div className='container'>
        <div className='partner-logos'>
          <img src={Rolling_Stone_magazine} alt="partners"/>
          <img src={musically} alt="partners"/>
          <img src={ForbeslogoCopia} alt="partners"/>
          <img src={Investment} alt="partners"/>
          <img src={internationalAdviser} alt="partners"/>
         
          
        </div>
      </div>         
      </div>
      <div className='container'>
        <div>
            <Heading 
                heading3 = 'Featured On'
            />
        </div>
      </div>
      <div className='Featured-div'>
      <div className='container'>
        <div className='featured-logos'>
         
            <img src={musically} alt="partners"/>
            <img src={Investment} alt="partners"/>
            <img src={internationalAdviser} alt="partners"/>
            <img src={Wired_logo} alt="partners"/>
            <img src={Rolling_Stone_magazine} alt="partners"/>
            <img src={ForbeslogoCopia} alt="partners"/>
            <img src={NASDAQ_Logo} alt="partners"/>
            <img src={investinglogo} alt="partners"/>
             
       
          
         
         
      
        </div>
      </div>         
      </div>
    </section>

       
  );
}

export default Reviews