import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeStory from "../components/HomeStory";
import classes from "./homepage.module.css";
import Post from "../components/KYC/Story/Post";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import { ModalButton } from "../components/KYC/KYCModal";
import AppLayout from "./AppLayout";
import StatusInput from "../components/StatusInput/StatusInput";

export function KYCStatus(props) {
  return (
    <div className={classes['mobile__view']}>

    <div
      className={`${classes["mobile"]} d-flex flex-column justify-content-center align-items-center`}
      >
      <p className={` ${classes["status"]}`} style={{backgroundColor: `${props.bg}`}}>
        Hello Reginald, kindly complete your kyc to have full access to all
        Hydra features
      </p>

      <ModalButton verify="Verify KYC" mobile={true}/>
    </div>
    </div>
  );
}
export function KYCStatusWeb() {
  return (
    
    <div className={classes["web__status"]}>

   

    <div
      className={`${classes["status"]}  d-flex flex-column justify-content-center align-items-center mb-4`}
      >
      <p  >
        Hello Reginald, kindly complete your kyc to have full access to all
        Hydra features
      </p>

   
    </div>
    </div>
  );
}
export default function Homepage() {
  const [mobile, setMobile] = useState(false);

  return (
    <AppLayout>
      <Row>
        <Col md={12}><KYCStatusWeb/></Col>
        <Col md={12}>
          <HomeStory />
        </Col>
        <Col md={12}>
          <StatusInput/>
        </Col>
        <Col md={12}>
          <Post img={user1} />
          <Post img={user2} />
          <Post img={user3} />
        </Col>
      </Row>
    </AppLayout>
  );
}
