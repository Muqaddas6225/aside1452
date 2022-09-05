import Heading from 'common/headings'
import React from 'react';
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import VideoCard from 'common/VideoCard';
import VideoCardData from 'common/VideoCard/VideoCardData';

import '../../../styles/MarketInvest/Activelistings.scss';


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


const ActiveListings = () => {
  return (
    <section>
     <div className='container'>
        <Heading heading3 = "Active Listings"/>
        <div className='buttons-dropdown'>
            <Button variant=''>
                <NavDropdown title="Aside Base" id="basic-nav-dropdown" >
                    <NavDropdown.Item className='item' href="#action/3.1">
                    <Link to='marketInvest' >Aside Base</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Button>
            <Button variant=''>
                <NavDropdown title="Type" id="basic-nav-dropdown" >
                    <NavDropdown.Item className='item' href="#action/3.1">
                    <Link to='marketInvest' >Aside Base</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Button>
            <Button variant=''>
                <NavDropdown title="Genre" id="basic-nav-dropdown" >
                    <NavDropdown.Item className='item' href="#action/3.1">
                    <Link to='marketInvest' >Aside Base</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Button>
            <Button variant=''>
                <NavDropdown title="Location" id="basic-nav-dropdown" >
                    <NavDropdown.Item className='item' href="#action/3.1">
                    <Link to='marketInvest' >Aside Base</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Button>
        </div>
        <div className='listing-Cards'>
            {VideoCardData.map(creatVideoCard)}
        </div>
     </div>   
    </section>
  )
}

export default ActiveListings