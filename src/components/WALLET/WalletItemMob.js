import React, { useState } from "react";
import classes from "../../pages/homepage.module.css";
import { Container } from "react-bootstrap";
import WalletItem from "./WalletItem";
import { Link } from 'react-router-dom';
import NFT from '../WALLET/NFTList';
import "./walletitemMob.css";




const list = [
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#FA996E" }}></i>
    ),
    label: "Bitcoin",
    name: "5.04 BTC",
    value: "-$230",
    usd: "$35 57",
    percent: "1.7%",
    symbol: "BTC"
  },
  {
    icon: (
      <i
        className="Icon ri-copper-diamond-fill"
        style={{ color: "#353535" }}
      ></i>
    ),
    label: "Ethereum",
    name: "160.02 ETH",
    value: "-$1.400",
    usd: "$36 57",
    percent: "2.6%",
    symbol: "ETH"
  },
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#9B9B9B" }}></i>
    ),
    label: "Litecoin",
    name: "135.89 LTC",
    value: "-$4.09",
    usd: "$7 035.02",
    percent: "0.60%",
    symbol: "LTC"
  },
  {
    icon: <i className="Icon ri-stack-fill" style={{ color: "#EBBA23" }}></i>,
    label: "BNB",
    name: "5.04 BNB",
    value: "-$34,400",
    usd: "$35 57",
    percent: "30.4%",
    symbol: "BNB"
  },
  
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#FA996E" }}></i>
    ),
    label: "Hydra",
    name: "1400.20 HDR",
    value: "-$580",
    usd: "-$3.8",
    percent: "0.90%",
    symbol: "HDR"
  },
  {
    icon: (
      <i
        className="Icon ri-copper-diamond-fill"
        style={{ color: "#353535" }}
      ></i>
    ),
    label: "Luna",
    name: "0.46 Luna",
    value: "-$2.89",
    usd: "$6.9",
    percent: "3.2%"
  },
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#9B9B9B" }}></i>
    ),
    label: "USDT",
    name: "135.89 USDT",
    value: "-$4.09",
    usd: "$5.02",
    percent: "0.00%"
  },
  
];
 function WalletItemMob (props) {
  
  const [show, setShow] = useState(false)
  const handleShow= ( ) => setShow(true)

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

<Container className="rounded-5 d-lg-block d-none  d-md-block">
  <div className="rounded-3 bg-light">         
             <div className="rounded-5  bg-light d-flex justify-content-center align-item-center text-center">
             <span className="col-6 active px-5 text-center"><h5 className="col-6"  style={{borderBottom:'3px solid blue', borderRadius:'10px' , Width:'10px', cursor:'pointer' }}>Token</h5></span>
             <span className="col-6 active px-5 text-center" ><h5 className="mx-3">NFT</h5> </span>
             </div>

           <div className="bg-white py-3 rounded-3">
             {list.map((item, i) => (
               <WalletItem key={i} {...item} />
             ))}
           </div>
  </div>
 </Container>

{/* Mobile View */}
 
 
<div className={` ${ classes['mobile__view'] }  bg-light `} >
  
  <div
    className={ ` ${ classes["mobile"]}  d-flex flex-column container-fluid bg-white d-sm-block d-md-none d-lg-none justify-content-center align-items-center ` }>
            <div div className={`d-flex mb-4 bg-white col-12 h-100 mt-5` } >
                
                
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

              
              <div className="row h-100 rounded-3 ">

<div className=" bg-light d-flex justify-content-center align-item-center text-center">
    <span className="col-6 px-5">
    <h5 className="" style={ {borderBottom:'3px solid grey', borderRadius:'30px' } }>Token</h5></span>
    <span className="col-6 px-5"><h5 className="col-6">NFT</h5></span>
</div>

<div className="container ">

<div className="  row d-flex justify-content-start align-item-start text-nowrap">


<div className=   "col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>

<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>

<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>


<div className="col-3 rounded-3 border border-3 card m-1 " style={{padding:'0px', width:' 31.00%', boxSizing:'border-box'}}>
<div className="clearfix d-flex m-0" style={{margin:'0px'}}>

<i className="float-start rounded-circle bg-dark m-1"  alt="logo" style={{marginLeft:'2px', width:'30px', height:'30px'}}></i> 
  <div>
  <small className="m-1" style={{fontSize:'14px'}}>Hydra coin</small><small 
  className=" d-flex justify-content-center align-item-center text-center" style={{fontSize:'10px'}}>2.500 H</small>
  </div>

</div>

<h6 className="text-center my-2">$230</h6>

<small className="clearfix px-2 pb-1">
<i></i>
<span className="float-start d-inline pl-3 justify-content-start align-item-start">3.3%</span>
<span className="float-end d-inline justify-content-end align-item-end">(+$25)</span>
</small>
</div>



</div >
</div>
          </div>

          </div>
  </div>
  
</div>
    
 </>
    );
  };
  
export default WalletItemMob  