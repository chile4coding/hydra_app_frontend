import React from "react";
import Landpics from "../images/rectangle.svg";
//import './index.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Ppics from '../images/pp.svg';
import pen from '../icons/Vectorpen.svg';
import ball from '../icons/ball.svg';
import links from '../icons/links.svg';
import linkedin from '../icons/linkedin.svg';
import HomeNavbar from "../components/HomeNavbar";
import SidebarMenu from "../components/sidebarmenu/SidebarMenu";
import Stories from "../components/Stories";
import Col from "react-bootstrap/Col";
import HomeSidebar from "../components/HomeSidebar";
import classes from "./Editprofile.module.css";
import AppLayout from "../pages/AppLayout";
import { Container, Modal } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import add from '../icons/add.svg';
import SocialLinks from "./SocialLinks";
// import cardpics from'./cardpics.svg';



const Editprofile = () => (
  
        <AppLayout>
            <Container>

            
              <div className={``} >
                        <h6>User Profile</h6>
                        <div className={`${classes["card"]}`}>
                            <img src={Landpics} className={`${classes["card-img-top"]}`} alt="pics"/>
                            <img src={pen} alt="pen" className={`${classes["pen2"]}`}/>
                            <fieldset>
                                <img src={Ppics} className={`${classes["card-top"]}`} alt="pics" style={{width: '100px'}}/> <img src={pen} alt="pen" className={`${classes["pen"]}`}/>
                                <div className={`${classes["card-body"]}`}>
                                    <form action="#" className={`${classes["form"]}`} >
                                        <label htmlFor="display-name">Display Name</label><span className={`${classes["span"]}`}>Edit</span><br/>
                                        <input type="text" placeholder="Enter your Name"  className={`${classes["input"]}`}/><br/><br/>
                                        <label htmlFor="bio">Bio</label><span className={`${classes["span"]}`}>Edit</span><br/>
                                        <input type="text" placeholder="Describe yourself in few words" className={`${classes["input"]}`} /><br/><br/>
                                        <label htmlFor="location">Location</label><span className={`${classes["span"]}`}>Edit</span><br/>
                                        <input type="text" placeholder="Where's your location" className={`${classes["input"]}`}/>
                                    </form><br/>
                                    <div className={`${classes["hobbies"]}`}>
                                        <p>Hobbies & Interests<span className={`${classes["span"]}`}>Add</span></p>
                                        <div className={`${classes["list"]}`}>
                                            <p>Dancing</p>
                                            <p>Swimming</p>
                                            <p>Talking</p>
                                            <p>Sports</p>
                                            <p>Crypto</p>
                                            <p>Programming</p>
                                        </div><br/>
                                        <div className={`${classes["social"]}`}>
                                            <p>Social Links</p><span className={`${classes["span-s"]}`}>Add</span><br/>
                                            <img src={ball} alt="ball" />
                                            <img src={links} alt="links" />
                                            <img src={linkedin} alt="linkedin" />
                                            <SocialLinks className={`${classes["SocialLinks"]}`}/>
                                        </div>
                                    </div>
                                    <button className={`${classes["bttn"]}`}>Proceed</button>
                                </div>
                            </fieldset>
                            
                            
                        </div>
                    </div>
                    </Container>
        </AppLayout>
     );

 
export default Editprofile;