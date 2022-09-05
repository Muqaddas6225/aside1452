import React from 'react';
import '../../styles/common/filmInfo.scss'
import Accordion from 'react-bootstrap/Accordion';
import { deleteIcon, listImg, listChart } from 'assests/images';

const FilmInfoDetails = () => {
  return (
   <>
     <div className='film-info'>
        <div className='titles' id ='filmTitlesdiv'>
                           <h4>ID</h4>
                            <h4>Title</h4>
                            <h4> Asset Class</h4>
                            <h4> Market Cap</h4>
                            <h4> Residual Life</h4>
                            <h4> Last Price</h4>
                            <h4> Chart</h4>   
        </div>
                 
        <div className='info-details'>
          <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                  <Accordion.Header> 
                    <div className='info-titles'>
                      <div className='filmdata filmdata1' ><span><img src={listImg} alt='film' /></span><h4>9</h4></div>
                      <div className='filmdata' ><h4>Zero Assoluto Catalogue</h4></div>
                      <div className='filmdata' ><h4>Clapper</h4></div>
                      <div className='filmdata' ><h4>$39000</h4></div>
                      <div className='filmdata' ><h4>70y 0m</h4></div>
                      <div className='filmdata' ><h4>$7.96</h4></div>
                      <div className='filmdata' ><span><img src={listChart} alt='film'/></span></div>
                      <div className='filmdata' ><span><img src={deleteIcon} alt='film'/></span></div>
                   </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
               
              <Accordion.Item eventKey="1">
                  <Accordion.Header> 
                    <div className='info-titles'>
                      <div className='filmdata filmdata1' ><span><img src={listImg} /></span><h4>9</h4></div>
                      <div className='filmdata' ><h4>Zero Assoluto Catalogue</h4></div>
                      <div className='filmdata' ><h4>Clapper</h4></div>
                      <div className='filmdata' ><h4>$39000</h4></div>
                      <div className='filmdata' ><h4>70y 0m</h4></div>
                      <div className='filmdata' ><h4>$7.96</h4></div>
                      <div className='filmdata' ><span><img src={listChart} alt='film'/></span></div>
                      <div className='filmdata' ><span><img src={deleteIcon} alt='film'/></span></div>  
                    </div>
                    </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </div>
    </div>
   </>
  )
}

export default FilmInfoDetails