import React from "react";
import SidebarCommunityLayout from "./SidebarCommunityLayout";
import moreIcon from "../../icons/moreIcon.png";
import man from "../../images/man.jpg";
import liveIcon from "../../icons/live.png";
const listenersObj = [
  { position: "10px" },
  { position: "-1px" },
  { position: "-10px" },
  { position: "-20px" },
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
      <p style={{ padding: "0px", margin: "0px" }}>500 listening</p>
    </div>
  );
}

function ShowPodCasters(){
    return (
        <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center my-2">
            <img src={liveIcon} />
            <span>Live</span>
            <span>[invite]</span>
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
              backgroundImage: `url(${man})`,
            }}></div>
          <span >Dillion Fillion</span> <span className="ml-4">Host</span>
        </div>
        <p> Daily data insights and ticker.</p>
        <div>
          <h3>How to gain 1.1k followers with @nftkingscout</h3>
          <p>Entertainment - Fashion & beauty - Arts & culture</p>
          <Listeners />
        </div>
      </div>
    )
}
export default function SidebarPodCast() {
  return (
    <SidebarCommunityLayout header="My Podcast" footer="See all">
     <ShowPodCasters/>
    </SidebarCommunityLayout>
  );
}
