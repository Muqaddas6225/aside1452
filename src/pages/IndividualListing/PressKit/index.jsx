import Heading from 'common/headings'
import React from 'react'
import '../../../styles/Individuallisting/pressKit.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { hollywood } from 'assests/images';

import DirectorFilmsTable from 'common/DirectorsFilmTable';
import filmsName from 'common/DirectorsFilmTable/films';
import { t1,t2 } from 'assests/images';





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





const PressKit = () => {
  return (
    <section>
        <div className='container'>
            <Heading
                heading3 = 'Press Kit'
            />
            <div className='PressKit-div'>
                <Tabs
                    defaultActiveKey="profile"
                    // id="fill-tab-example"
                    className="mb-3"
                    // fill
                    >
                    <Tab eventKey="home" title="Film 1">
                      <div className='pressKit-content'>
                        <Row className='presskit-tab-row1'>
                            <Col lg={4}>
                              <Card>
                                <Card.Img variant="top" src={hollywood} alt='hollywood' />
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Title</Card.Title>
                                      <Card.Text>
                                      Name of the Film
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Tagline</Card.Title>
                                      <Card.Text>
                                      Film Tagline
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Production Company</Card.Title>
                                      <Card.Text>
                                      Company Name
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Seller Company</Card.Title>
                                      <Card.Text>
                                      Company Name
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Production Year</Card.Title>
                                      <Card.Text>
                                      2022
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Country of Origin </Card.Title>
                                      <Card.Text>
                                      USA
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>


                              </Card>
                            </Col>
                            <Col lg={7}>
                            <div className='pressKit-content-tabs'>
                              <Tabs
                                  defaultActiveKey="profile"
                                  id="fill-tab-example"
                                  className="mb-3"
                                  fill
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
                                    <Table responsive>
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
                                  <Tab eventKey="Crew" title="Crew">
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
                                  <Tab eventKey="Previous Film" title="Previous Film">
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
                            </Col>
                        </Row>
                        <Row className='presskit-tab-row2'>
                          <Col lg={5}>
                          <div>
                              <div className='row2-title'>
                              <Heading heading3 = "Awards" />
                              </div>
                              <div className='tab-content'>
                                  <Table>
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Award Name</th>
                                    
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><img src={t1} alt='t1'/></td>
                                        <td>Award name</td>
                                      
                                      </tr>
                                      <tr>
                                        <td><img src={t2} alt='t'/></td>
                                        <td>Award name</td>
                                      
                                      </tr>
                                      <tr>
                                        <td><img src={t2}  alt='t'/></td>
                                        <td>Award name</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                              </div>
                            </div>
                          </Col>
                          <Col lg={7}>
                            <div>
                              <div className='row2-title'>
                              <Heading heading3 = "Synopsis" />
                              </div>
                              <p>Rutrum risus, fermentum sit lacinia purus commodo, nisi.
                                 Id elementum nisl natoque nullam sit eleifend mauris nisl
                                 ullamcorper. Amet dictum tincidunt ultrices sed faucibus.
                                 Vel ac rhoncus, volutpat augue convallis felis, lobortis.
                                 Commodo nulla aliquet amet mollis viverra mauris.Rutrum risus,
                                 fermentum sit lacinia purus commodo, nisi. Id elementum nisl
                                 natoque nullam sit eleifend mauris nisl ullamcorper.
                                 Amet dictum tincidunt ultrices sed faucibus. Vel ac rhoncus,
                                  volutpat augue convallis felis, lobortis. Commodo nulla
                                  aliquet amet mollis viverra mauris.risus, fermentum sit 
                                  lacinia purus commodo, nisi. Id elementum nisl natoque nullam 
                                  sit eleifend mauris nisl ullamcorper. Amet dictum tincidunt
                                   ultrices sed faucibus Vel ac rhoncus, volutpat augue convallis felis, lobortis. Commodo nulla aliquet amet mollis viverra mauris.</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Film 2">
                    <div className='pressKit-content'>
                        <Row className='presskit-tab-row1'>
                            <Col lg={4}>
                              <Card>
                                <Card.Img variant="top" src={hollywood}  alt='hollywood' />
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Title</Card.Title>
                                      <Card.Text>
                                      Name of the Film
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Tagline</Card.Title>
                                      <Card.Text>
                                      Film Tagline
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Production Company</Card.Title>
                                      <Card.Text>
                                      Company Name
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Seller Company</Card.Title>
                                      <Card.Text>
                                      Company Name
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>
                                  <Card.Body>
                                    <div>
                                      <Card.Title>Production Year</Card.Title>
                                      <Card.Text>
                                      2022
                                      </Card.Text>
                                    </div>
                                    <div>
                                      <Card.Title>Country of Origin </Card.Title>
                                      <Card.Text>
                                      USA
                                      </Card.Text>
                                    </div>  
                                  </Card.Body>


                              </Card>
                            </Col>
                            <Col lg={7}>
                            <div className='pressKit-content-tabs'>
                              <Tabs
                                  defaultActiveKey="profile"
                                  id="fill-tab-example"
                                  className="mb-3"
                                  fill
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
                                    <Table responsive>
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
                                  <Tab eventKey="Crew" title="Crew">
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
                                  <Tab eventKey="Previous Film" title="Previous Film">
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
                            </Col>
                        </Row>
                        <Row className='presskit-tab-row2'>
                          <Col lg={5}>
                          <div>
                              <div className='row2-title'>
                              <Heading heading3 = "Awards" />
                              </div>
                              <div className='tab-content'>
                                  <Table>
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Award Name</th>
                                    
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><img src={t1} alt="t"/></td>
                                        <td>Award name</td>
                                      
                                      </tr>
                                      <tr>
                                        <td><img src={t2} alt="t"/></td>
                                        <td>Award name</td>
                                      
                                      </tr>
                                      <tr>
                                        <td><img src={t2} alt="t"/></td>
                                        <td>Award name</td>
                                      </tr>
                                    </tbody>
                                  </Table>
                              </div>
                            </div>
                          </Col>
                          <Col lg={7}>
                            <div>
                              <div className='row2-title'>
                              <Heading heading3 = "Synopsis" />
                              </div>
                              <p>Rutrum risus, fermentum sit lacinia purus commodo, nisi.
                                 Id elementum nisl natoque nullam sit eleifend mauris nisl
                                 ullamcorper. Amet dictum tincidunt ultrices sed faucibus.
                                 Vel ac rhoncus, volutpat augue convallis felis, lobortis.
                                 Commodo nulla aliquet amet mollis viverra mauris.Rutrum risus,
                                 fermentum sit lacinia purus commodo, nisi. Id elementum nisl
                                 natoque nullam sit eleifend mauris nisl ullamcorper.
                                 Amet dictum tincidunt ultrices sed faucibus. Vel ac rhoncus,
                                  volutpat augue convallis felis, lobortis. Commodo nulla
                                  aliquet amet mollis viverra mauris.risus, fermentum sit 
                                  lacinia purus commodo, nisi. Id elementum nisl natoque nullam 
                                  sit eleifend mauris nisl ullamcorper. Amet dictum tincidunt
                                   ultrices sed faucibus Vel ac rhoncus, volutpat augue convallis felis, lobortis. Commodo nulla aliquet amet mollis viverra mauris.</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                </Tabs>
              </div>
            </div>
    </section>
  )
}

export default PressKit