import React, { useState } from "react";
import SidebarCommunityLayout from "./SidebarCommunityLayout";
import moreIcon from "../../icons/moreIcon.png";
import man from "../../images/man.jpg";
import liveIcon from "../../icons/live.png";
import calendar from "../../icons/calendar.png";
import podcastavatar from "../../images/podcastavatar.png";
import classes from "./SidebarPodcast.module.css";
import { LiveEventLoader } from "../ProfileLoader";
import { PodCastEntertainmentLoader } from "../ProfileLoader";
const listenersObj = [
  { position: "10px" },
  { position: "-1px" },
  { position: "-10px" },
  { position: "-20px" },
];

const podcastObj = [
  {
    icon: liveIcon,
    text1: "LIVE-",
    text2: "[Invite]",
    avatar: man,
    name: "Dillion Fillion",
    host: "Host",
    paragraph: "Daily data insights and ticker.",
    bg: "#EFDCEE",
  },
  {
    icon: calendar,
    text1: "Today at 6:00 PM - ",
    text2: "[Paid]",
    avatar: podcastavatar,
    name: "Nesty Designs",
    host: "Host",
    paragraph: "NFT Creator/Crypto Analyst and mentor",
    bg: "#D1F1CC",
  },
];

const podcastNftObj = [
  {
    text1: "How to gain 1.1k followers with @nftkingscout",
    text2: "Entertainment - Fashion & beauty - Arts & culture",
    bg: "#954491",
  },
  {
    text1: "The best way to be an NFT Creator @Nestydesigns",
    text2: "Web 3.0 - Crypto - Blockchain - Opensea",
    bg: "#348E25",
  },
];
function Listeners() {
  return (
    <div className="d-flex  gap-2 align-items-center">
      <div className="d-flex  align-items-center">
        {listenersObj.map((lisEl, i) => (
          <div
            key={i}
            style={{
              width: "22px",
              height: "22px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50%",
              backgroundImage: `url(${man})`,
              padding: "0px",
              margin: "0px",
              position: "relative",
              left: `${lisEl.position}`,
            }}></div>
        ))}
      </div>
      <p
        style={{ padding: "0px", margin: "0px" }}
        className={classes["entertainment__text"]}>
        500 listening
      </p>
    </div>
  );
}

function GainFollowers({ details, children }) {
  return (
    <div
      className={classes["gain__follower"]}
      style={{ backgroundColor: `${details.bg}` }}>
      <h3>{details.text1}</h3>
      <p className={classes["entertainment__text"]}>{details.text2}</p>
      {children}
    </div>
  );
}
function ShowPodCasters({ details }) {
  return (
    <div
      className={classes["live__component"]}
      style={{ backgroundColor: `${details.bg}` }}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2 align-items-center my-2">
          <img src={details.icon} />
          <span>{details.text1}</span>
          <span>{details.text2}</span>
        </div>
        <img src={moreIcon} />
      </div>
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "50%",
            backgroundImage: `url(${details.avatar})`,
          }}></div>
        <span>{details.name}</span> <span className="ml-4">Host</span>
      </div>
      <p> {details.paragraph}</p>
    </div>
  );
}
export default function SidebarPodCast() {
  const [loading, setloading] = useState(false);
  return (
    <SidebarCommunityLayout header="My Podcast" footer="See all" loading={loading}>
      {loading ? (
        <LiveEventLoader />
      ) : (
        <ShowPodCasters details={podcastObj[0]} />
      )}
      {loading ? (
        <PodCastEntertainmentLoader />
      ) : (
        <GainFollowers details={podcastNftObj[0]}>
          <Listeners />
        </GainFollowers>
      )}
      {loading ? (
        <LiveEventLoader />
      ) : (
        <ShowPodCasters details={podcastObj[1]} />
      )}
      {loading ? (
        <PodCastEntertainmentLoader />
      ) : (
        <GainFollowers details={podcastNftObj[1]} />
      )}
    </SidebarCommunityLayout>
  );
}
