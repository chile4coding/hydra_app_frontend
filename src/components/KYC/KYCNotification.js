import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import KYCicon from "../../icons/KYCicon.png";
import classes from "./KYCNotification.module.css";
import avatar from "../../images/avatar.png";
import KYCModal from "./KYCModal";

function KYCNotification(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card.Body
      className={classes["KYC__container"]}
      style={{ top: `${props.sidebar ? "30%" : ""}` }}>
   <KYCModal 
       show={show}
       handleShow={handleShow}
       handleClose={handleClose}
      />

      <Card.Text className="my-4">
        Tap to complete your kyc verification
      </Card.Text>
      <i
        className={classes["KYC__icon"]}
       onClick={handleShow}
       >
        <img src={KYCicon} alt="KYC tap icon" />
      </i>
    </Card.Body>
  );
}

export default KYCNotification;
