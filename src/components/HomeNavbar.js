import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import hydraLogo from "../icons/hydra_logo.png";
import avatar from "../images/avatar.png";
import searchIcon from "../icons/search.png";
import dropdownIcon from "../icons/dropdown.png";
import classes from "./HomeNavbar.module.css";
import podcastIcon from "../icons/podcast.png";
import messageIcon from "../icons/message.png";
import notificationIcon from "../icons/notification.png";
import burgerIcon from '../icons/burger.png'
import MobileOffcanvas from "./MobileDraw/MobileOffconvas";




function HomeNavbar() {
  const [input, setInput] = useState({
    searchInput: "",
    show: true,
    toggle: false
  });

  const [kyc, setKyc] = useState(true);
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value, show: false });
    if (value === "") {
      setInput({ ...input, [name]: value, show: true });
    }
  }
  function handleToggle(show){
    setInput({...input, toggle: show})
  }
  return (
    <div className="d-flex justify-content-between gap-4 align-items-center my-4 border-sm-0">
      <div className=" " md={kyc ? 2 : 3} sm={4}>
        <div className="d-flex align-items-baseline ">
          <i><img src={burgerIcon} className={classes['hand__burger_icon']} onClick={handleToggle.bind(this, true)}/></i>
          {
            input.toggle && <MobileOffcanvas handleToggle={handleToggle}/>
          }
          
          <i className={classes["home__icon-holder"]}>
            <img
              src={hydraLogo}
              alt="Hyra Logo"
              className={classes["home__icon"]}
            />
          </i>
          <p className={classes["home__navtext"]}>0.00000 ~ 0.0H/h </p>
        </div>
      </div>

      <div
        className={`${classes["search__visibility"]} lg-5 position-relative`}
        md={kyc ? 5 : 6}
        style={{ flexGrow: "4" }}>
          <form autocomplete="on">
        <div className=" ">
          {input.show && (
            <img src={searchIcon} className={classes["home__search-icon"]} />
          )}
          <input
            type="text"
            placeholder="Search Hydra"
            className={classes["home__search-input"]}
            name="searchInput"
            onChange={handleInput}
            value={input.searchInput}
            autocomplete="on"
          />
        </div>
        </form>
      </div>
      <div
        sm={8}
        xs={8}
        md={kyc ? 5 : 3}
        className={`${classes["user__profile"]}`}
        style={{ flexGrow: "2" }}>
        {kyc && (
          <span className={classes["home__icon-holders"]}>
            <img
              src={podcastIcon}
              alt="podcast icon"
              className={classes["home__icon"]}
            />
            <p className={classes["show__tilte"]}>Podcast</p>
          </span>
        )}
        {kyc && (
          <span className={classes["home__icon-holders"]}>
            <span className={classes['notifications']}>14</span>
            <img
              src={notificationIcon}
              alt="notification icon"
              className={classes["home__icon"]}
            />
            <p className={classes["show__tilte"]}>Notification</p>
          </span>
        )}
        {kyc && (
          <span className={classes["home__icon-holders"]}>
            <span className={classes['notifications']}>2</span>
            <img
              src={messageIcon}
              alt="message icon"
              className={classes["home__icon"]}
            />
            <p className={classes["show__tilte"]}>Message</p>
            
          </span>
        )}

        <span className="d-flex  flex-column">
          <span className={classes["home__icon-holders"]}>
            <img
              src={avatar}
              alt="avatar icon"
              className={classes["home__icon"]}
            />
          </span>
          <div
            className={` ${classes["search__visibility"]} ${classes["meIcon__visibility"]} ${classes["show__tilte"]}`}>
            <span className={classes["show__tilte"]}>Me</span>
            <span className={classes["show__tilte"]}>
              <img
                src={dropdownIcon}
                alt="Hyra Logo"
                className={classes["home__icon"]}
              />
            </span>
          </div>
        </span>
      </div>
    </div>
  );
}
//  <p>Me</p>
{
  /* <i className={classes["home__icon-holder"]}>
  <img src={dropdownIcon} alt="Hyra Logo" className="image-fluid" />
</i>; */
}

export default HomeNavbar;
