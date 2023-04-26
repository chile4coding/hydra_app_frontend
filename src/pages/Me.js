import React from "react";
import Landpics from "../images/rectangle.svg";
// import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Ppics from '../images/pp.svg';

import ball from '../icons/ball.svg';
import links from '../icons/links.svg';
import linkedin from '../icons/linkedin.svg';
import pen from '../icons/Vectorpen.svg';
import ink from '../icons/Link.svg';
import location from '../icons/Vectorloki.svg';
import message from '../icons/message.svg';
// import HomeNavbar from "../components/HomeNavbar";
// import SidebarMenu from "../components/sidebarmenu/SidebarMenu";
// import Stories from "../components/Stories";
import Col from "react-bootstrap/Col";
// import HomeSidebar from "../components/HomeSidebar";
//import Row from "react-bootstrap/Row";
// import ProfileLoader from "../components/ProfileLoader";
import classes from "./Me.module.css";
// import SidebarCommunity from "../components/communitysidebar/SidebarCommunity";
// import SidebarSujestions from "../components/communitysidebar/SidebarSujestions";
// import SidebarPodCast from "../components/communitysidebar/SidebarPodCast";
import { Link } from 'react-router-dom';
import AppLayout from "./AppLayout";
import { Container } from "react-bootstrap";



// import the AppLayout component use it to wrap what ever component you are adding

const Me = () => (

    <AppLayout>
        <Container>

     
        <div className={`${classes["col-md-5"]}`}>

        <div className={`${classes["col-md-5"]}`} style={{ width: '560px' }}>
            <h6 className={`${classes["user"]}`}>User Profile</h6>
            <div className={`${classes["card"]}`}>
                <img src={Landpics} className={`${classes["card-img-top"]}`} alt="pics" />
                <img src={Ppics} className={`${classes["profile-p"]}`} alt="pics" style={{ width: '100px' }} />
                <div className={`${classes["card-body"]}`}>
                    <Link to='/Editprofile'><button className={`${classes["edit-b"]}`}> <img src={pen} alt="pen" className={`${classes["edit-p"]}`} /> Edit profile</button></Link>
                    <div className={`${classes["name"]}`}>
                        <strong>Azeez Malik Adekunle</strong>
                        <p>@yourfavdesigner</p>
                    </div>
                    <h6>UX/UI Designer || interaction Designer || Designing with strong focus on user centered design, improving user experience and engaging user interface</h6>
                </div>
                <div className={`${classes["address"]}`}>
                    <h6> <img src={location} alt="location-icon" /> Florida, USA</h6>
                    <h6 style={{ color: '#4378FF' }}> <img src={ink} alt="Message-Icon" /> azeezmalik43.com</h6>
                    <h6> <img src={message} alt="Message-Icon" /> azeezmalik43@gmail.com</h6>
                </div>
                <div className={`${classes["social"]}`}>
                    <img src={ball} alt="ball" />
                    <img src={links} alt="links" />
                    <img src={linkedin} alt="linkedin" />
                </div>
                <div className={`${classes["cont"]}`}>
                    <p>312 contact</p>
                    <p>255 friends</p>
                </div>
                <div className={`${classes["btn-pro"]}`}>
                    <button className={`${classes["act"]}`}>All activity</button>
                    <button className={`${classes["act"]}`}>My post</button>
                    <button className={`${classes["act"]}`}>Media</button>
                    <button className={`${classes["act"]}`}>share</button>
                    <button className={`${classes["act"]}`}>Bookmarks</button>
                </div>
            </div>
        </div>
        </Container>

    </AppLayout>
    // <React.Fragment>
    //     {/* <div>
    //         <HomeNavbar/>
    //     </div> */}
    //     <div className='container'>

    //         <div className="row">
    //             {/* <div className={`${classes["col-md-1"]}`} style={{width: '280px'}}>

    //                 <Col md={12}>
    //                     <HomeSidebar />

    //                     <Stories>
    //                         <SidebarMenu />
    //                     </Stories>
    //                 </Col>

    //             </div> */}
    //             {/* <div className={`${classes["col-md-5"]}`} style={{width: '560px'}}>
    //                 <h6 className={`${classes["user"]}`}>User Profile</h6>
    //                 <div className={`${classes["card"]}`}>
    //                     <img src={Landpics} className={`${classes["card-img-top"]}`} alt="pics"/>
    //                         <img src={Ppics} className={`${classes["profile-p"]}`} alt="pics" style={{width: '100px'}}/>
    //                         <div className={`${classes["card-body"]}`}>
    //                             <Link to='/Editprofile'><button className={`${classes["edit-b"]}`}> <img src={pen} alt="pen"  className={`${classes["edit-p"]}`}/> Edit profile</button></Link>
    //                             <div className={`${classes["name"]}`}>
    //                                 <strong>Azeez Malik Adekunle</strong>
    //                                 <p>@yourfavdesigner</p>
    //                             </div>
    //                             <h6>UX/UI Designer || interaction Designer || Designing with strong focus on user centered design, improving user experience and engaging user interface</h6>
    //                         </div>
    //                         <div className={`${classes["address"]}`}>
    //                             <h6> <img src={location} alt="location-icon" /> Florida, USA</h6>
    //                             <h6 style={{color: '#4378FF'}}> <img src={ink} alt="Message-Icon" /> azeezmalik43.com</h6>
    //                             <h6> <img src={message} alt="Message-Icon" /> azeezmalik43@gmail.com</h6>
    //                         </div>
    //                         <div className={`${classes["social"]}`}>
    //                             <img src={ball} alt="ball" />
    //                             <img src={links} alt="links" />
    //                             <img src={linkedin} alt="linkedin" />
    //                         </div>
    //                         <div className={`${classes["cont"]}`}>
    //                             <p>312 contact</p>
    //                             <p>255 friends</p>
    //                         </div>
    //                         <div className={`${classes["btn-pro"]}`}>
    //                             <button className={`${classes["act"]}`}>All activity</button>
    //                             <button className={`${classes["act"]}`}>My post</button>
    //                             <button className={`${classes["act"]}`}>Media</button>
    //                             <button className={`${classes["act"]}`}>share</button>
    //                             <button className={`${classes["act"]}`}>Bookmarks</button>
    //                         </div>
    //                 </div>
    //             </div> */}

    //             {/* <Col md={3} lg={3} className={`${classes["mobile__display"]} ${classes["mini__view"]}border-0`} style={{ backgroundColor: "#F3F3F4" }}>
    //                 <ProfileLoader>
    //                     <SidebarCommunity />
    //                     <SidebarSujestions />
    //                     <SidebarPodCast />
    //                 </ProfileLoader>
    //             </Col> */}


    //         </div>
    //     </div>
    // </React.Fragment>

);


export default Me;