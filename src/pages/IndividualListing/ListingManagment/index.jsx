import Heading from 'common/headings'
import React from 'react'
import '../../../styles/Individuallisting/listingManagment.scss'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ListingManagment = () => {
  return (
    <section className='listingManagment-section'>
        <div className='container'>
            <Heading
                heading3= 'Listing Management'
            />
            <Row>
                <Col lg={6}>
                    <div className='RoyaltyDistribution'>
                        <h3>Royalty Distribution</h3>
                        <p>An 8% distribution fee is applied on royalties distributed from catalogues in the Secondary Market</p>
                        <div className='siae-location' >
                          <div>
                            <h4>SIAE</h4>
                            <p>Distributor</p>
                          </div>
                          <div>
                            <h4>Italy</h4>
                            <p>Catalogue Country</p>
                          </div>
                        </div>
                        <progress className='progress-div-bar' id="file" value="45" min='0' max="100"><p>45%</p></progress>
                        <div className='next-desc'><p>
                        Expected Next Distribution - Nov 2021
                        </p></div>
                    </div>
                </Col>
                <Col lg={6}>
                <div className='orderTabs'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                        >
                        <Tab eventKey="home" title="Pending Orders">
                           <div className='order'>
                                <h4>Your orders on the catalogue</h4>
                                <div className='order-status'>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy Orders (Volume)</p>
                                        <p className='order-title-desc'>7 Shares</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy Orders (Volume)</p>
                                        <p className='order-title-desc'>7 Shares</p>
                                    </div>
                                </div>
                                <h4 className='head2'>Your orders on the catalogue</h4>
                                <div  className='order-status'>
                                    <div className='buy-order'>
                                        <p className='order-title'>Position: (Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy in Price:(Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Percentage of total:(Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                </div>
                           </div>
                        </Tab>
                        <Tab eventKey="profile" title="Order Book">
                            {/* {projectdata.map(creatprojectInfo)} */}
                            <div className='order'>
                                <h4>Your orders on the catalogue</h4>
                                <div className='order-status'>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy Orders (Volume)</p>
                                        <p className='order-title-desc'>7 Shares</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy Orders (Volume)</p>
                                        <p className='order-title-desc'>7 Shares</p>
                                    </div>
                                </div>
                                <h4 className='head2'>Your orders on the catalogue</h4>
                                <div  className='order-status'>
                                    <div className='buy-order'>
                                        <p className='order-title'>Position: (Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Buy in Price:(Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                    <div className='buy-order'>
                                        <p className='order-title'>Percentage of total:(Volume)</p>
                                        <p className='order-title-desc'>No Position</p>
                                    </div>
                                </div>
                                <div className='button-div'>
                                <button className='order-btn-1'>€18.26  Sell</button>
                                <button  className='order-btn-2'>€18.26  Sell</button>
                                </div>
                           </div>
                        </Tab>
                    
                        
                    </Tabs>
                 </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default ListingManagment