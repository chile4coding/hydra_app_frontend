import React, { useState } from "react";
import classes from "../../pages/homepage.module.css";
import { Container } from "react-bootstrap";




function NFTunList (props) {

        const [selectedCoin, setSelectedCoin] = useState('ETH');
        const coins = ['BTC', 'ETH', 'LTC', 'BNB'];
      
        const handleSelectCoin = (coin) => {
          setSelectedCoin(coin);
        }
      
            const [visible, setVisible] = useState(true);
      
        const toggleVisibility = () => {
          setVisible(!visible);
        };
      
          
      let YES = 'YES'
      let NO = 'NO'

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
    
                      <h3 className="col-6 d-flex text-center justify-content-center align-items-center">WALLET</h3>
                
                      <span className="col-3  text-end align-items-end ">
                      <i className="fa-solid fa-bell mx-3"></i>
                      </span>
                  </div>
                
       <div>
    
                    <div className="row px-3">
                      
                    <div className="bg-light rounded  p-5 " style={{textAlign: 'center'}}>
                    <span>
                                <button onClick={toggleVisibility} className=" float-right" style={{marginRight:'-280px', position: 'relative', top: '-40px'}}>
                                {visible ? YES : NO}
                                </button>
                    </span>
    
    
                    <div className="clearfix">
                                {visible ? (
                                 <h5 className=" text-center" >$3,000.45</h5>
                                ) : (
                                <p className="fw-bold fs-6 ">*********</p>
                                )}
                               
                              
                            </div>
                       
                        
                    </div>
                    <i class=""></i>
                    <div className="text-center" >
                            <span className=""> <i className="p-2 bg-light mx-4 border border  rounded-circle fas fa-arrows-alt-h" 
                            style={{ position: 'relative', top: '-34px', fontSize: '24px'}}></i> </span>
                            
                            <span className=""> <i className="p-2 bg-dark mx-4 border border rounded-circle fas fa-arrows-alt-h" style={{ color:'#ffff', position: 'relative', top: '-30px', fontSize: '33px'}}></i></span>
                            <span className=""> <i className="p-2 bg-light mx-4 border border rounded-circle fa-thin fas fa-arrows-alt-h" style={{ position: 'relative', top: '-34px', fontSize: '24px'}}></i></span>
                       
                            <div className="text-center mt-3">
                        <i className="p-2 bg-light rounded-circle border border  mx-4 fas fa-arrows-alt-h" style={{ position: 'relative', top: '-34px', fontSize: '24px'}}></i>
                        <i className="p-2 bg-light rounded-circle border border mx-4 fas fa-arrows-alt-h"  style={{ position: 'relative', top: '-34px', fontSize: '24px'}}></i>
                    </div>
    
                    </div>
                        
                        
                    
                    </div>
    
                    
                    <div className="row h-100 rounded-3 bg-light  ">
    
    <div className=" bg-light d-flex justify-content-center align-item-center text-center">
          <span className="col-6 px-5">
          <h5 className="" >Token</h5></span>
          <span className="col-6 px-5"><h5 className="" style={{borderBottom:'3px solid grey', borderRadius:'10px' }}>NFT</h5></span>
    </div>
    
    <div className="container ">
    
    <div className="  row  d-flex justify-content-center align-item-center ">
      
      
      
    <div className="col-8   text-unwrap " style={{padding:'0px', boxSizing:'border-box'}}>
        <div className="clearfix mx-3 my-5 rounded-5 card text-center " style={{position:'relative', margin:'0px'}}  >
                                  <img src="#" alt="NFT image" style={{ width:'100%', height:'100px', position:'relative',  objectFit: 'fill' }}  className=" rounded-5"/>
        </div>
    
        <div className="text-center mt-5" >
                                    <p className="text-secondary">Ooops, you do not have any collectible.  </p>
                                    <a className="text-dark fw-bold text-decoration-none" style={{marginTop:'300px'}}>Click here to receive</a>
                            </div>                      
       </div>
      
       
      
    
      
      </div >
    </div>
                </div>
    
                </div>
              </div>
        </div>
           
           <Container className="col-md col-lg d-none d-sm-block">
              
                        
           <div className=" bg-light d-flex justify-content-center align-item-center text-center">
  <h5 className="col-6">Token</h5>
  <div className="col-6 active px-5" ><h5 className="mx-3" style={{borderBottom:'3px solid blue', borderRadius:'10px' , Width:'10px'}}>NFT</h5> </div>
  </div>
           
                        <div className="container-fluid py-3 bg-white rounded-3" style={{height:'500px'}}>
                            
                        <div className="  row d-flex justify-content-center align-item-center">
                        
                        
                        
                        <div className="" >
                        <i class="text-center mt-4 fas fa-ghost"></i>
                        </div>
                        <div className="text-center mt-5" >
                                <p className="text-secondary">Ooops, you do not have any collectible.  </p>
                                <a className="text-primary text-decoration-none" style={{marginTop:'300px'}}>Click here to receive</a>
                        </div>
                        </div >
                        </div>
  
  
  
            </Container>
        </>
    )
  };
  export default NFTunList