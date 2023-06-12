import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ModalButton } from "../KYC/KYCModal";
import {Modal} from "react-bootstrap";
import WalletSwap  from "./WalletSwap";


const WalletItem = ({ icon, symbol, label, name, value, usd, percent }) => {
  const [show, setShow] = useState(false)
  const [tempData, setTempData] = useState([])

const getData = ( label, name, symbol, value, usd, percent ) => {
  let tempData = [name, value, symbol, usd, percent ];

  setTempData(item =>[1, ...tempData])
  
  return setShow(true);
}
  const handleShow= ( ) => setShow(true)
  const handleClose= ( ) => setShow(false)

  return (
    

    <div className="WalletItem my-3 ">
        

      <Row className="align-items-center rounded" onClick={()=> getData(label,symbol, name, value, usd, percent)}>
        <Col xs={2} className="text-center">
          <div className="IconWrapper">{icon}</div>
        </Col>
        <Col xs={7}>
          <p className="text-dark mb-0">{label}</p>
          <p className="text-muted font-weight-bold mt-1">{name}</p>
        </Col>
        <Col xs={3} className="text-right">
          <p className="mb-1  fw-bold text-primary">{value}</p>
          <p className="text-muted font-weight-bold mb-0"><i className="dropdown-toggle justify-content-space-between mx2 text-danger" /><small className="text-danger">{percent}</small> {usd}</p>
        </Col>
      </Row>


      <Modal show={show} onHide={handleClose} >
        
        <Modal.Body >
        {
          show === true ? <WalletSwap symbol={tempData[1]} value={tempData[2]}/> : ''
        }
                 

        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center">
          
        </Modal.Footer>
      </Modal>

    </div>



       
       
  );
};





export default WalletItem;
