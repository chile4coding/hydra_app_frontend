import React, { useState } from "react";
import {Row, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function WalletTop( handleChange ) {

    const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

    
let YES = 'YES'
let NO = 'NO'
  return (
    <div className="d-none d-md-none d-lg-block " >
        <Container className=" rounded clearfix d-flex  ">
                      
                      <Container className="justify-contemt-start float-left">
                      <Row className="">
                        <h6 className="text-primary pt-3">Wallet</h6>
                        <div className="d-flex clearfix">
                          { visible ? (
                            <p className="fw-bold fs-6 my-3">$3,000.45</p>
                          ) : (
                            <p className="fw-bold fs-6 my-3">*********</p>
                          ) }
                          <div onClick={ toggleVisibility } className=" float-right" style={ {marginLeft:'100px'} }>
                            { visible ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i> }
                          </div>
                        </div>

                        </Row>

                    </Container>
                      <Container className=" justify-contemt-end float-right clearfix pt-3">

                      <Row className="d-flex">
                        <div className="p-1 mx-4 rounded float-left bg-light headerIcon" style={{width:'85px', hieght:'10px', cursor:'pointer'}}>
                          <i className=" rounded-circle px-0 mx-1 fas fa-arrow-up"></i> Send 
                        </div>

                        <div className="p-1 mx-4 rounded float-left bg-light headerIcon" style={{width:'85px', hieght:'10px', cursor:'pointer'}}>
                          <i className=" rounded-circle px-0 mx-1 fas fa-rotate"></i> swap 
                        </div>

                        <div className="p-1 mx-4 rounded float-left bg-light headerIcon" style={{width:'85px', hieght:'10px', cursor:'pointer'}}>
                          <i className=" rounded-circle px-0 mx-1 fas fa-credit-card"></i> Buy 
                        </div>
                        <div className="p-1 mx-3 rounded float-left bg-light headerIcon" style={{width:'100px', hieght:'10px', cursor:'pointer'}}>
                          <i className=" rounded-circle px-0 mx-0 fas fa-arrow-down"></i> Receive 
                        </div>
                      </Row>
                  </Container>  
                    

              </Container>
    </div>
  );
}