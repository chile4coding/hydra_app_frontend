import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HomeSidebar from "../components/HomeSidebar";
import HomeStory from "../components/HomeStory";
import Stories from "../components/Stories";
import ProfileLoader from "../components/ProfileLoader";
import classes from "./homepage.module.css";
import KYCNotification from "../components/KYC/KYCNotification";
import Post from "../components/KYC/Story/Post";
import HomeFooter from "../components/HomeFooter";
import SidebarMenu from "../components/sidebarmenu/SidebarMenu";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import SidebarCommunity from "../components/communitysidebar/SidebarCommunity";
import SidebarSujestions from "../components/communitysidebar/SidebarSujestions";
import SidebarPodCast from "../components/communitysidebar/SidebarPodCast";
import { ModalButton } from "../components/KYC/KYCModal";

export function KYCStatus(props) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <p className={`${props.mobile? classes["mobil_status"]: classes["status"]}`}>
      Hello Reginald, kindly complete your kyc to have full access to all Hydra
      features
    </p>{
      props.mobile &&<ModalButton verify="Verify KYC" mobile={props.mobile}/>
    }
      
    </div>
  );
}
export default function Homepage() {
  const [mobile, setMobile] = useState(false)

  return (
    <div className={classes["home__page-bg"]} >
      <div className={`${classes['reels_bg']} my-sm-0 my-md-4  `}
      >
        <Container>
          <Row >
            <HomeNavbar />
          </Row>
        </Container>
      </div>
      <div className={classes['container__width']}>

     
      <Container  className={classes['container__width']}>
        <Row  >
          
          <Col md={5} lg={3} className={classes['mobile__display']}>
            <Row >
              <Col md={12}>
                <HomeSidebar />
              </Col>
              <Col md={12}>
                <Stories sidebar={true} />
                <SidebarMenu />
              </Col>
            </Row>
          </Col>


          <Col md={7} lg={6} >
            <Row >
              <Col md={12} >
                {
                  mobile &&  <KYCStatus mobile={false}/>
                }
               
              </Col>
              <Col md={12} >
                <HomeStory />
              </Col>
              <Col md={12} >
                {/* <Stories sidebar={false} /> */}
                <Post img={user1} />
                <Post img={user2} />
                <Post img={user3} />
              </Col>
            </Row>
          </Col>
          <Col md={3} lg={3}  className={`${classes['mobile__display']} ${classes['mini__view']}`}>
            <ProfileLoader />
            <SidebarCommunity />
            <SidebarSujestions />
            <SidebarPodCast />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}
