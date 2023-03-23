import React from "react";
import Button from "react-bootstrap/Button";
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
import HomeFooter from "../HomeFooter";

function SidebarMenu() {
  return (
    <Card className="mb-4">
      <div className="border-bottom py-4 px-4">
        <Card.Text>
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
        </Card.Text>
      </div>
      <div className="border-bottom py-4 px-4">
        <h6 className="mb-3">Groups</h6>
        <Card.Text>
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
        </Card.Text>
      </div>
      <div className=" py-4 px-4">
        <h6 className="mb-3">Shortcuts</h6>
        <Card.Text>
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
        </Card.Text>
        <HomeFooter />
      </div>
    </Card>
  );
}

export default SidebarMenu;
