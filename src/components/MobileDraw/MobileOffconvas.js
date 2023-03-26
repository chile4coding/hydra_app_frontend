import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import man from "../../images/man.jpg";
import view1 from "../../icons/view1.png";
import arrowDownIcon from "../../icons/downArrow.png";
import pencilIcon from "../../icons/pencil.png";
import plus from "../../icons/plus.png";
import profilIcon from "../../icons/profileIcon.png";
import communityIcon from "../../icons/communityIcon.png";
import NFTIcon from "../../icons/NFTIcon.png";
import setting from "../../icons/setting.png";
import help from "../../icons/setting.png";
import logoutIcon from "../../icons/logout.png";
import classes from "./MobileOffcanvas.module.css";
import Accordion from "react-bootstrap/Accordion";

const options = [
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

function CreateAccount(props) {
  console.log(props);
  return (
    <>
      <div className={`${props.animate ? classes["animate"] : ""} py-4`}>
        <i>
          <img src={pencilIcon} alt="pencil icon" />
        </i>{" "}
        <span className="px-2">Create a new account</span>
      </div>
      <div className={`${props.animate ? classes["animate"] : ""} pt-2`}>
        <i>
          <img src={plus} alt="plus icon" />
        </i>{" "}
        <span className="px-2">Add new  account</span>
      </div>
    </>
  );
}

function SettingsAndSupport(props) {
  return (
    <>
      <div className={`${props.animate ? classes["animate"] : ""} py-4`}>
        <i>
          <img src={setting} alt="settings" />
        </i>{" "}
        <span className="px-2">Settings & privacy</span>
      </div>
      <div className={`${props.animate ? classes["animate"] : ""} pt-2`}>
        <i>
          <img src={help} alt="help icon" />
        </i>{" "}
        <span className="px-2">Help center</span>
      </div>
    </>
  );
}

function OffCanvas({ handleToggle }) {
  const [show, setShow] = useState(true);
  const [showSetting, setShowSetting] = useState({
    setting: false,
    createAccount: false,
  });

  const handleClose = () => {
    setShow(false);
    handleToggle(false);
  };

  function handleSettings() {
    setShowSetting({ ...showSetting, setting: !showSetting.setting });
  }
  function handleCreateAccount() {
    setShowSetting({
      ...showSetting,
      createAccount: !showSetting.createAccount,
    });
  }

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        className={`${classes["mobile__offcanvas-topography"]} w-75`}>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div>
            <div className="border-bottom py-2">
              <div
                style={{
                  backgroundImage: `url(${man})`,
                  borderRadius: "50%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "48px",
                  height: "48px",
                }}></div>
              <h5 className="py-2">Truth Man</h5>
              <p className="pt-2">
                {" "}
                <span className={classes["followers"]}>96</span>{" "}
                <span>Following</span>{" "}
                <span className={classes["followers"]}>31</span>{" "}
                <span>Followers</span>
              </p>
            </div>
            <div className="border-bottom py-4 ">
              <p>
                Total Balance (HDA) <img src={view1} alt="view icon" />
              </p>
              <h5 className={classes["balance"]}>
                42.650 -{" "}
                <span className={classes["remaining__balance"]}>$0.0047</span>
              </h5>
            </div>
            <div className="border-bottom py-4">
              <Accordion defaultActiveKey="0" className={classes['accordion__style']} >
                <Accordion.Item eventKey="1" className={classes['accordion__style']}>
                  <Accordion.Header
                    onClick={handleCreateAccount}
                    className="border-0">
                    <div className={`${classes['accordion__style']} d-flex justify-content-between`}>
                      <div
                        style={{
                          backgroundImage: `url(${man})`,
                          borderRadius: "50%",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          width: "20px",
                          height: "20px",
                        }}></div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {<CreateAccount animate={showSetting.createAccount} />}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="border-bottom  py-4">
              <div>
                <i>
                  <img src={profilIcon} alt="profile icon" />
                </i>{" "}
                <span className="px-2">Profile</span>
              </div>
              <div className="py-4">
                <i>
                  <img src={communityIcon} alt="community icon" />
                </i>{" "}
                <span className="px-2"> Communities</span>
              </div>
              <div className="py-2">
                <i>
                  <img src={NFTIcon} alt="NFT icon" />
                </i>{" "}
                <span className="px-2"> NFT Marketplace</span>
              </div>
            </div>

            <div className="py-4">
             

              <Accordion defaultActiveKey="0" className={classes['accordion__style']}>
                <Accordion.Item eventKey="1" className={classes['accordion__style']}>
                  <Accordion.Header className={classes['accordion__style']}> Settings & Support </Accordion.Header>
                  
              <Accordion.Body className={classes['accordion__style']}>
                <SettingsAndSupport animate={showSetting.setting} />

              </Accordion.Body>
                </Accordion.Item>
                  </Accordion>
            </div>
          </div>
          <div>
            <i>
              <img src={logoutIcon} alt="logout icon" />
            </i>{" "}
            <span className="px-2">Log Out</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function MobileOffcanvas({ handleToggle }) {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvas key={idx} handleToggle={handleToggle} />
      ))}
    </>
  );
}
export default MobileOffcanvas;
