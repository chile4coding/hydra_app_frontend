// import React, { useState } from "react";
// import HomeNavbar from "../components/HomeNavbar";
// import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import HomeSidebar from "../components/HomeSidebar";
// import HomeStory from "../components/HomeStory";
// import Stories from "../components/Stories";
// import ProfileLoader from "../components/ProfileLoader";
// import classes from "./AppLayout.module.css";
// import KYCNotification from "../components/KYC/KYCNotification";
// import Post from "../components/KYC/Story/Post";
// import HomeFooter from "../components/HomeFooter";
// import SidebarMenu from "../components/sidebarmenu/SidebarMenu";
// import user1 from "../images/user1.png";
// import user2 from "../images/user2.png";
// import user3 from "../images/user3.png";
// import SidebarCommunity from "../components/communitysidebar/SidebarCommunity";
// import SidebarSujestions from "../components/communitysidebar/SidebarSujestions";
// import SidebarPodCast from "../components/communitysidebar/SidebarPodCast";
// import { ModalButton } from "../components/KYC/KYCModal";

// function AppLayout({ children }) {
//   return (
//     <div className={classes["home__page-bg"]}>
//       <div className={`${classes["reels_bg"]} my-sm-0 my-md-4  `}>
//         <Container>
//           <Row>
//             <HomeNavbar />
//           </Row>
//         </Container>
//       </div>
//       <div className={classes["container__width"]}>
//         <Container className={classes["container__width"]}>
//           <Row>
//             <Col md={5} lg={3} className={classes["mobile__display"]}>
//               <Row>
//                 <Col md={12}>
//                   <HomeSidebar />
//                 </Col>
//                 <Col md={12}>
//                   <Stories sidebar={true} />
//                   <SidebarMenu />
//                 </Col>
//               </Row>
//             </Col>

//             <Col md={7} lg={6}>
//               {children}
//             </Col>

//             <Col
//               md={3}
//               lg={3}
//               className={`${classes["mobile__display"]} ${classes["mini__view"]}`}>
//               <ProfileLoader>

//               </ProfileLoader>
//               <SidebarCommunity />
//               <SidebarSujestions />
//               <SidebarPodCast />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default AppLayout;

import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import HomeSidebar from "../components/HomeSidebar";
import HomeStory from "../components/HomeStory";
import Stories from "../components/Stories";
import ProfileLoader from "../components/ProfileLoader";
import classes from "./AppLayout.module.css";
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
import SidebarHistory from "../components/communitysidebar/SidebarHistory";
import WalletTop from "../components/WALLET/WalletTop";
import walletHeader from "../components/WALLET/walletHeader";

function AppLayout({ children }) {
  return (
    <div className={ `${classes["home__page-bg"]} `} >
      <div className={`${classes["reels_bg"]} my-sm-0 my-md-4  `} >
        <Container >
          <Row className={classes["mobile__display"]}>
            <HomeNavbar />
            </Row>
         

        </Container>
      </div>
      <Col md={12} lg={12} className="mx-0 d-none d-lg-block d-md-none d-sm-none" >
                    <div className={`${classes["reels_bg"]} my-sm-0 my-md-4  rounded-3`} style={{marginLeft:'125px', marginRight:'125px'}}>
                    <Row className={classes["mobile__display"]}>
                      <WalletTop />
                    </Row>
                  </div>
       </Col>       
      <div className={`${classes["container__width"]} ${classes["set__bg"]}`}>
        <Container className={classes["container__width"]}>
          <Row>
            <Col md={5} lg={3} className={classes["mobile__display"]}>
              <Row className="d-none d-lg-block d-md-none d-sm-none">
                <Col md={12}>
                  
                  <HomeSidebar />
                </Col>
                <Col md={12} className="my-5">
                  {/* <Stories sidebar={true} /> */}
                  <SidebarMenu />
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={6}>
              
              {children}
            </Col>

            <Col
              md={3}
              lg={3}
              className={`${classes["mobile__display"]} ${classes["mini__view"]}border-0`} >
             
                <SidebarHistory/>               

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AppLayout;
