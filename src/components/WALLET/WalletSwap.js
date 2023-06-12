import React, { useState } from "react";
import {Button, Modal, Col, Dropdown } from 'react-bootstrap';
import "./walletSwap.css";
import arrowRightIcon from '../../icons/arrowright.png';
import classes from "../../pages/homepage.module.css";



function WalletSwap (props) {

  let value= ['0.001']; 
  let symbol= ['ETH'];
  const [show, setShow] = useState(false);
  
    const [selectedCoin, setSelectedCoin] = useState('ETH');
    const coins = ['BTC', 'ETH', 'LTC', 'BNB'];
  
    const handleSelectCoin = (coin) => {
      setSelectedCoin(coin);
    }
  
  
    return (
        
    <>

<div className={classes['mobile__view']}>

<div
  className={` ${classes["mobile"]} d-flex flex-column container-fluid bg-white d-sm-block d-md-none d-lg-none justify-content-center align-items-center` }
  >
          <div
        className={`d-flex mb-4 bg-white col-12 h-100 mt-5` }
        >
              
              
              <span className="col-3  justify-content-start align-items-start ">
              <i className="fa-sharp fa-solid fa-bars mx-3"></i>
              </span>

              <h3 className="col-6 d-flex text-center justify-content-center align-items-center">SWAP</h3>
        
              <span className="col-3  text-end align-items-end ">
              <i className="fa-solid fa-bell mx-3"></i>
              </span>
          </div>
        
          <div className=" bg-white w-100 clearfix  d-flex">
              <div className=" ">
              <div xs={6}>
                        <div className="p-3">
                        <div className="col-6 float-start text-center">
                          <p>You Send</p>
                          <p className="fw-bold">0.00</p>
                        </div>
                        
                        
                        <div className="col-6 text-center " style={{ marginRight:'0px', float:'right'}}>
                    <p>Select token</p>
                    <div className="dropdown">
                      <h6 className="dropdown-toggle" data-bs-toggle="dropdown">
                        {selectedCoin}
                      </h6>
                      <ul className="dropdown-menu h-4">
                        {coins.map((coin) => (
                          <li key={coin}>
                            <a className="dropdown-item" href="#" onClick={() => handleSelectCoin(coin)}>
                              {coin}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                        </div>
                        <div style={{textAlign: 'center'}}>
                        <hr style={{ borderTop: '2px solid black', width: '100%', marginTop: 0 }} ></hr>
                        <i className="fa-regular fa-arrows-rotate" style={{ position: 'relative', top: '-28px', fontSize: '3  4px'}} ></i>
                      </div>

                      

                        
                        <div className="  clearfix">
                        <div xs={6}>
                        <div className="col-6 text-center float-start">
                          <p>You Send</p>
                          <p className="fw-bold">0.00</p>
                        </div>
                        </div>
                        
                        <Col xs={6}></Col>
                        <div className="col-6 float-end text-center ">
                          <p>Select token</p>
                          <div className="dropdown">
                            <h6 type="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                              ETH
                            </h6>
                            <ul class="dropdown-menu">
                              <li><a className="dropdown-item" href="#">BTC</a></li>
                              <li><a className="dropdown-item" href="#">LTC</a></li>
                              <li><a className="dropdown-item" href="#">BNB</a></li>
                            </ul>
                          </div>
                        </div>
                        </div>
                    
                     <div className="row mx-4  my-4">
                        <div>
                          <p className="fw-bold float-start m-2">Estimated Gas </p><span className="m-1 float-end text-secondary">--(23%)</span>
                        </div>
                        <div className="clearfix m-2">
                        <p className="fw-bold float-start ">Price </p>
                        <p className=" float-end"><span className="fw-bold p-2">1 ETH=2,000 HYD</span>($4,000)</p>
              
                        </div>

                        <button type="submit" className="btn-block my-4 mt-md-2 text-white bg-dark rounded-2 submitBtn">
                          <strong>swap</strong>
                        </button>
                 </div>
               </div>
          </div>

</div>
</div>


        <div className=" bg-white w-100 clearfix  d-flex col-md-6 col-lg-6 d-none d-sm-block">
                  <div className=" ">
                 
                 
                  <div className="clearfix d-flex mx-5">
                            <Col xs={6}>
                              <div className="col-6 text-center float-start">
                                <p>You Send</p>
                                <p className="fw-bold">0.00</p>
                              </div>
                            </Col>

                            <Col xs={6}>
                              <div className="col-6 text-center float-end">
                                <p>Select token</p>
                                <Dropdown className="float-end">
                                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    ETH
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">BTC</Dropdown.Item>
                                    <Dropdown.Item href="#">LTC</Dropdown.Item>
                                    <Dropdown.Item href="#">BNB</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </div>



                            <div className="m-5 py-2">
                              <hr></hr>
                              <i></i>
                            </div>
                            


                          <div className="clearfix d-flex mx-5">
                            <Col xs={6}>
                              <div className="col-6 text-center float-start">
                                <p>You Send</p>
                                <p className="fw-bold">{value}</p>
                              </div>
                            </Col>

                            <Col xs={6}>
                              <div className="col-6 text-center float-end">
                                <p>Select token</p>
                                <Dropdown className="float-end">
                                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    {symbol}
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">BTC</Dropdown.Item>
                                    <Dropdown.Item href="#">LTC</Dropdown.Item>
                                    <Dropdown.Item href="#">BNB</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </div>

                        
                         <div className="row mx-5">
                            <div>
                              <p className="fw-bold float-start  m-3">Estimated Gas </p><span className="m-3 float-end text-secondary">--(23%)</span>
                            </div>
                            <div className="clearfix">
                            <p className="fw-bold float-start m-3">Price </p>
                            <p className="m-3 float-end"><span className="fw-bold text-primary p-2">ETH=2,000 HYD</span>--(23%)</p>
                  
                            </div>

                              
                            <button type="submit" className=" fw-bold my-4 mt-md-2 text-white btn  rounded-2 " style={{background:' linear-gradient(to right, #565bd0, #cb5fc6) '}}> 
                              SWAP
                            </button>
                     </div>
                   </div>

                   
              </div>

      
    </>
    
  );
}
export default WalletSwap