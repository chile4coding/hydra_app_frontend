import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import home from "../../icons/home.png";
import communityIcon from "../../icons/community.png";
import marketplaceIcon from "../../icons/marketplace.png";
import walletIcon from "../../icons/wallet.png";
import seeIcon from "../../icons/see.png";
import westIcon from "../../icons/west.png";
import nestyIcon from "../../icons/nesty.png";
import hydrasocialIcon from "../../icons/hydrasocial.png";
import groupIcon from "../../icons/group.png";
import dappIcon from "../../icons/dapp.png";
import videoIcon from "../../icons/video.png";
import groupcallIcon from "../../icons/groupcall.png";
import tradeIcon from "../../icons/trade.png";
import moreshortcutIcon from "../../icons/moreshortcut.png";
import classes from "./SidebarMenu.module.css";
import HomeFooter from "../HomeFooter";
// import KYCNotification from "../KYC/KYCNotification";
import { HomeSidebarLoader, HomeSidebarFooterloader } from "../Stories";
import KYCNotification from "../KYC/KYCNotification";

function HomeSidebarComponent() {
  return (
    <div className="border-bottom mt-4 ">
      <div className="px-4">
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={home} alt="home icon" />
          <p>Home</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={communityIcon} alt="home icon" />
          <p>Communities</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={marketplaceIcon} alt="home icon" />
          <p>NFT Marketplace</p>
        </div>
        <div className=" d-flex align-items-start gap-3">
          <img src={walletIcon} alt="home icon" />
          <p>Wallet</p>
        </div>
        <div className=" d-flex align-items-start gap-3">
          <img src={seeIcon} alt="home icon" />
          <p>See all</p>
        </div>
      </div>
    </div>
  );
}

function SidebarGroupComponent() {
  return (
    <div className=" py-4 border-bottom  ">
      <div className="px-4">
        <h6 className="mb-3">Groups</h6>

        <div className="my-2 d-flex align-items-start gap-3">
          <img src={westIcon} alt="home icon" />
          <p>West Technology</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={nestyIcon} alt="home icon" />
          <p>Nesty NFT Leaders</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={hydrasocialIcon} alt="home icon" />
          <p>Hydra Social Club</p>
        </div>
        <div className=" d-flex align-items-start gap-3">
          <img src={groupIcon} alt="home icon" />
          <p>See all groups</p>
        </div>
      </div>
    </div>
  );
}

function SidebarShortcutComponent() {
  return (
    <div className=" py-4  ">
      <div className="px-4">
        <h6 className="mb-3">Shortcuts</h6>

        <div className="my-2 d-flex align-items-start gap-3">
          <img src={dappIcon} alt="home icon" />
          <p>Dapp browser</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={videoIcon} alt="home icon" />
          <p>Video call</p>
        </div>
        <div className="my-2 d-flex align-items-start gap-3">
          <img src={groupcallIcon} alt="home icon" />
          <p>Group call</p>
        </div>
        <div className=" d-flex align-items-start gap-3">
          <img src={tradeIcon} alt="home icon" />
          <p>Trade tokens</p>
        </div>
        <div className=" d-flex align-items-start gap-3">
          <img src={moreshortcutIcon} alt="home icon" />
          <p>See more shortcuts</p>
        </div>
      </div>
    </div>
  );
}

function SidebarMenu() {
  const [loading, setloading] = useState(true);
  return (
    <Card
      className="my-4 border-0"
      style={{ backgroundColor: loading ? "#F3F3F4" : "" }}>
      {loading ? <HomeSidebarLoader /> : <HomeSidebarComponent />}

      {loading ? <HomeSidebarLoader /> : <SidebarGroupComponent />}

      {loading ? <HomeSidebarLoader /> : <SidebarShortcutComponent />}

      <KYCNotification sidebar={true} />
    </Card>
  );
}

export default SidebarMenu;
