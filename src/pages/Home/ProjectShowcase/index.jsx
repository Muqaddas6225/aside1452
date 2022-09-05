import React from 'react';
import '../../../styles/home/showCaseProject.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import VideoCard from 'common/VideoCard';
import VideoCardData from 'common/VideoCard/VideoCardData';
import Heading from 'common/headings';


const creatVideoCard = (VideoCardData)=>{

    return (
        <VideoCard
            key = {VideoCardData.id}
            title = {VideoCardData.title}
            img = {VideoCardData.img}
            text = {VideoCardData.text}
            initialTarget = {VideoCardData.initialTarget}
            price = {VideoCardData.price}
            rightSold = {VideoCardData.rightSold}
            soldPer = {VideoCardData.soldPer}
            assetclass = {VideoCardData.assetclass}
            type = {VideoCardData.type}
        />
    );
    
}


const ProjectShowcase = () => {
  return (
    <section className='showcaseSection'>
      <div className='container'>
        <div className='showcase-div'>
            <Heading heading3 = 'Project showcase'/>

          <div className='tabs-div'>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
                >
                <Tab eventKey="home" title="Highlights">
                <div className='tab-cards'>
                  {VideoCardData.map(creatVideoCard)}
                </div>
                </Tab>
                <Tab eventKey="profile" title="Popular">
                     <div className='tab-cards'>  {VideoCardData.map(creatVideoCard)}</div>
                </Tab>
                <Tab eventKey="longer-tab" title="Top Funded">
                    <div className='tab-cards'>  {VideoCardData.map(creatVideoCard)}</div>
                </Tab>
                <Tab eventKey="contact" title="Ending Soon">
                    <div className='tab-cards'>  {VideoCardData.map(creatVideoCard)}</div>
                </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase