import Heading from 'common/headings'
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../../styles/Individuallisting/mediagallery.scss';

import { galleryImg1,
        galleryImg2,
        galleryImg3 } from 'assests/images';    

const MediaGallery = () => {
  return (
    <section className='gallery-section'>
        <div className='container'>
            <Heading
                heading3 = 'Media Gallery'
            />
            <div className='gallery-tabs-div'>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
                >
                <Tab eventKey="home" title="Videos">
                <div className='gallery-images'>
                    <img  className="gImg-div" alt='galleryImg' src={galleryImg2}/>
                    <img  className="gImg-div" alt='galleryImg' src={galleryImg1}/>
                    <img  className="gImg-div" alt='galleryImg' src={galleryImg3}/>
                </div>
                </Tab>
                <Tab eventKey="profile" title="Images">
                <div className='gallery-images'>
                    <img  className="gImg-div"  alt='galleryImg'src={galleryImg2}/>
                    <img  className="gImg-div" alt='galleryImg' src={galleryImg1}/>
                    <img  className="gImg-div" alt='galleryImg' src={galleryImg3}/>
                </div>
                </Tab>
                
            </Tabs>
          </div>
        </div>
    </section>
  )
}

export default MediaGallery