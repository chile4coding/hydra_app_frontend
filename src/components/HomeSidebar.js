import React from "react";

import Card from "react-bootstrap/Card";

import sidebrBg from "../images/sidebarbg.png";
import view from "../icons/view.png";
import avatar from "../images/avatar.png";
import classes from "./HomeSidebar.module.css";

function HomeSidebar() {
  return (
    <Card>
      <div
        style={{ backgroundImage: `url(${sidebrBg})`, height: "91px" }}
        className={classes["sidebar--img"]}></div>
      <div
        className={classes["img--holder"]}
        style={{ backgroundImage: `url(${avatar})` }}></div>
      <div className="px-4">
        <h5 className="text-center pt-0 mb-4">Reginal Wekoro</h5>
        <p className={classes["card__desc"]}>
          Web3 Enthusiast , NFT Hodler & BTC Hodler
        </p>
        <div className={classes["paragraph__desc"]}>
          <span>0 Following </span>
          <span>0 Followers</span>
        </div>
        <div className={classes["balance--holder"]}>
          <p style={{ padding: "0px", margin: "0px" }}>
            Total Balance <span>( HYD )</span>{" "}
            <span>
              <img src={view} />
            </span>{" "}
          </p>
          <h5 className={classes["card__main-balance"]}>
            0.00000 ~ <span className={classes["card--balance"]}>$0.000</span>
          </h5>
        </div>
      </div>
    </Card>
  );
}

export default HomeSidebar;
