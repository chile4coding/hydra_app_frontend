import React, { useState } from "react";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import { Container } from "react-bootstrap";
//import { hover } from "@t` esting-library/user-event/dist/hover";
import classes from "../../pages/homepage.module.css";




 function NFTList () {
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
                  <div onClick={toggleVisibility} className=" float-right" style={{marginLeft:'100px'}}>
                            {visible ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                          </div>
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
  
                  
                  <div className="row rounded-3 bg-light ">
  
  <div className=" bg-light d-flex justify-content-center align-item-center text-center">
        <span className="col-6 px-5">
        <h5 className="" >Token</h5></span>
        <span className="col-6 px-5"><h5 className="" style={{borderBottom:'3px solid grey', borderRadius:'10px' }}>NFT</h5></span>
  </div>
  
  <div className="container ">
  
  <div className="  row  d-flex justify-content-center align-item-center ">
    
    
    
  <div className="col-4  m-3 " style={{padding:'0px', boxSizing:'border-box'}}>
      <div className="clearfix rounded-5 card " style={{position:'relative', margin:'0px'}}  >
                                <img src={user1} alt="NFT image" style={{ width:'100%', height:'100px', position:'relative',  objectFit: 'fill' }}  className=" rounded-5"/>
      </div>
      <div className="text-center">
                                    <p className=" m-0 fw-bold">CryptoPunk<span>#100</span></p>
                                    <small className=" m-0">last sale<span>120Eth</span></small>
      </div>
                                  
     </div>
    
     <div className="col-4  m-3 " style={{padding:'0px', boxSizing:'border-box'}}>
      <div className="clearfix rounded-5 card " style={{position:'relative', margin:'0px'}}  >
                                <img src={user1} alt="NFT image" style={{ width:'100%', height:'100px', position:'relative',  objectFit: 'fill' }}  className=" rounded-5"/>
      </div>
      <div className="text-center">
                                    <p className=" m-0 fw-bold">CryptoPunk<span>#100</span></p>
                                    <small className=" m-0">last sale<span>120Eth</span></small>
      </div>
                                  
     </div>
  
     <div className="col-4  m-3 " style={{padding:'0px', boxSizing:'border-box'}}>
      <div className="clearfix rounded-5 card " style={{position:'relative', margin:'0px'}}  >
                                <img src={user1} alt="NFT image" style={{ width:'100%', height:'100px', position:'relative',  objectFit: 'fill' }}  className=" rounded-5"/>
      </div>
      <div className="text-center">
                                    <p className=" m-0 fw-bold">CryptoPunk<span>#100</span></p>
                                    <small className=" m-0">last sale<span>120Eth</span></small>
      </div>
                                  
     </div>
    
     <div className="col-4  m-3 " style={{padding:'0px', boxSizing:'border-box'}}>
      <div className="clearfix rounded-5 card " style={{position:'relative', margin:'0px'}}  >
                                <img src={user1} alt="NFT image" style={{ width:'100%', height:'100px', position:'relative',  objectFit: 'fill' }}  className=" rounded-5"/>
      </div>
      <div className="text-center">
                                    <p className=" m-0 fw-bold">CryptoPunk<span>#100</span></p>
                                    <small className=" m-0">last sale<span>120Eth</span></small>
      </div>
                                  
     </div>
    
  
    
    </div >
  </div>
              </div>
  
              </div>
            </div>
      </div>

            <Container className="col-md-6 col-lg-6 d-none d-sm-block">

              
  <div className=" rounded ">
  
  <div className=" bg-light d-flex justify-content-center align-item-center text-center">
  <h5 className="col-6">Token</h5>
  <div className="col-6 active px-5" ><h5 className="mx-3" style={{borderBottom:'3px solid blue', borderRadius:'10px' , Width:'10px'}}>NFT</h5> </div>
  </div>
  
  <div className=" bg-white container-fluid py-3 rounded-3" style={{height:'500px'}}>
      
  <div className="  row d-flex justify-content-center align-item-center">
  
  
  <div className="col-3  border mx-2 text-center card " 
  style={{width:'150px', margin:'0', padding:'0'}}>
  
  <div className="" style={{position:'relative', }}>
  <img src={user1} alt="NFT IMAGE" style={{ width:'100%', height:'150px', position:'relative',  objectFit: 'fill' }} 
  className=" ">
  </img>
  
  <div className="overlay rounded text-center" style={{ position: 'absolute', 
    bottom: '18px', left:'12px', backgroundColor:'#fff', opacity:'0.8'}}>
  <p class="card-text mb-1  pointer " style={{color:'#00000' }}>Glass world #162 : </p>
  </div>
  </div>
  
  </div>
  
  <div className="col-3  border mx-2 text-center card " 
  style={{width:'150px', margin:'0', padding:'0'}}>
  
  <div className="" style={{position:'relative', }}>
  <img src={user2} alt="NFT IMAGE" style={{ width:'100%', height:'150px', position:'relative',  objectFit: 'fill' }} 
  className=" ">
  </img>
  
  <div className="overlay rounded text-center" style={{ position: 'absolute', 
    bottom: '18px', left:'12px', backgroundColor:'#fff', opacity:'0.8'}}>
  <p class="card-text mb-1   " style={{color:'#00000' }}>Glass world #162 : </p>
  </div>
  </div>
  
  </div>
  
  
  <div className="col-3  border mx-2 text-center card " 
  style={{width:'150px', margin:'0', padding:'0'}}>
  
  <div className="" style={{position:'relative', }}>
  <img src={user3} alt="NFT IMAGE" style={{ width:'100%', height:'150px', position:'relative',  objectFit: 'fill' }} 
  className=" ">
  </img>
  
  <div className="overlay rounded text-center" style={{ position: 'absolute', 
    bottom: '18px', left:'12px', backgroundColor:'#fff', opacity:'0.8'}}>
  <p class="card-text mb-1   " style={{color:'#00000' }}>Glass world #162 : </p>
  </div>
  </div>
  
  </div>
  
  
  </div >
  </div>
  
  
  </div>
            </Container>
      </>
    )
  };
  export default NFTList