import React from 'react';
import '../../../styles/Individuallisting/retrumrisus.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import DirectorFilmsTable from 'common/DirectorsFilmTable';
import filmsName from 'common/DirectorsFilmTable/films';
import { retrumrisus, playListImg, assetClass,
  fiescal,
  maintarget,
  expected,
  recieved,
  rights,
  Investmenttag,durationBlue } from 'assests/images';
import RatrumTags from 'common/RatrumRisustags';




const creatfilmstable = (filmsName)=>{

  return (
      <DirectorFilmsTable
          key = {filmsName.id}
          img = {filmsName.image}
          name = {filmsName.name}
          film = {filmsName.film}
         />
  );
  
}

const RatrumRisus = () => {
  return (
    <section>
      <div className='container'>
        <Row className='retrum-risis-row1'>
          <Col lg= {7}>
            <div className='retrum-risis-div' >
              <div className='ratrum-rises-desc'>
                <h3>Rutrum risus, fermentum</h3>
                <p>Rutrum risus, fermentum sit lacinia purus 
                  commodo, nisi. Id elementum nisl natoque nullam
                  sit eleifend mauris nisl ullamcorper.
                  Amet dictum tincidunt ultrices sed faucibus.
                  Vel ac rhoncus, volutpat augue convallis 
                  felis, lobortis. Commodo nulla aliquet amet mollis viverra mauris.</p>
              </div>
              <div className='DirectorFilm-div'>
                <Tabs
                    defaultActiveKey="profile"
                    // id="fill-tab-example"
                    className="mb-3"
                    // fill
                    >
                    <Tab eventKey="home" title="Directors">
                      <Table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Film</th>
                          </tr>
                        </thead>
                        {filmsName.map(creatfilmstable)}
                       
                      </Table>
                    </Tab>
                    <Tab eventKey="profile" title="Main cast">
                      <Table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Name</th>
                              <th>Film</th>
                            </tr>
                          </thead>
                          {filmsName.map(creatfilmstable)}
                        
                        </Table>
                    </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='retrumrisusImg-div' >
             <div className='playlistImg-div' ><img className='playlistImg' src={retrumrisus}/></div> 
              <div className='playlist-div'>
                  <img  src={playListImg}/>
                  <div>
                    <h3>
                    Vieni Da Me
                    </h3>
                    <p>Le Vibrazioni</p>
                    <progress id="file" value="45" min='0' max="100"><p>45%</p></progress>
                  </div>
              </div>
            </div>

          </Col>
        </Row>
        <Row className='retrum-risis-row2'>
          <Col lg={7} className = 'retrumRisusTags-content'>
              <Row className='tagscontent-row' >
                <Col lg={5} md={5} >
                    <RatrumTags
                      name = 'Main Target'
                      price = '€50,000'
                      image = {maintarget}
                    />
                </Col>
                <Col lg={5} md={5}>
                <RatrumTags
                      name = 'Min Investment'
                      price = '€50,000'
                      image = {Investmenttag}
                    />
                </Col>
              </Row>
              <Row className='tagscontent-row' >
                <Col lg={5} md={5}>
                    <RatrumTags
                      name = 'Rights on Offer'
                      price = '€50,000'
                      image = {rights}
                    />
                </Col>
                <Col lg={5} md={5}>
                <RatrumTags
                      name = 'Duration'
                      price = '€50,000'
                      image = {durationBlue}
                    />
                </Col>
              </Row>
              <Row className='tagscontent-row' >
                <Col lg={5} md={5}>
                    <RatrumTags
                      name = 'Expected Yield'
                      price = '€50,000'
                      image = {expected}
                    />
                </Col>
                <Col lg={5} md={5}>
                <RatrumTags
                      name = 'Investment Received'
                      price = '€50,000'
                      image = {recieved}
                    />
                </Col>
              </Row>
              <Row className='tagscontent-row' >
                <Col lg={5} md={5}>
                    <RatrumTags
                      name = 'Fiscal Benefits'
                      price = '€50,000'
                      image = { fiescal}
                    />
                </Col>
                <Col lg={5} md={5}>
                <RatrumTags
                      name = 'Asset Class'
                      price = '€50,000'
                      image = {assetClass}
                    />
                </Col>
              </Row>
             
          </Col>
          <Col lg = {5}>
              <div className='retrumRisusTags-desc' >
                <h3>Rutrum risus, fermentum</h3>
                <p>
                Rutrum risus, fermentum sit lacinia purus commodo, nisi. Id elementum nisl natoque nullam sit eleifend mauris nisl ullamcorper. 
                Amet dictum tincidunt ultrices sed faucibus. Vel ac rhoncus, volutpat augue convallis felis, lobortis. Commodo nulla aliquet amet
                 mollis viverra mauris.Rutrum risus, fermentum sit lacinia purus commodo, nisi. Id elementum nisl natoque nullam sit eleifend mauris nisl ullamcorper. Amet
                  dictum tincidunt ultrices sed faucibus. Vel ac rhoncus, volutpat augue convallis felis, lobortis. Commodo nulla aliquet amet mollis viverra mauris.
                natoque nullam sit eleifend mauris nisl ullamcorper.
                </p>
              </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default RatrumRisus