import React, { useState } from "react";
import SidebarCommunityLayout from "./SidebarCommunityLayout";
import avatar from "../../images/avatar.png";
import man from "../../images/man.jpg";
import { LiveEventLoader } from "../ProfileLoader";
import { MyCommunityLoader } from "../ProfileLoader";
import KYCNotification from "../KYC/KYCNotification";

function CommunitiesAvatar() {
  return (
    <div
      style={{
        width: "15px",
        height: "15px",

        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "50%",

        backgroundImage: `url(${man})`,
      }}></div>
  );
}

function Communities() {
  return (
    <div className="d-flex gap-3 my-3 px-3">
      <div
        style={{
          width: "74px",
          height: "74px",
          backgroundImage: `url(${man})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}></div>
      <div style={{ padding: "0px", margin: "0px" }}>
        <p style={{ padding: "0px", margin: "4px" }}>Web3 Africa</p>
        <p style={{ padding: "0px", margin: "0px" }}>1,1613 members</p>
        <div className="d-flex position-relative ">
          <CommunitiesAvatar />
          <CommunitiesAvatar />
          <CommunitiesAvatar />
        </div>
      </div>
    </div>
  );
}

export default function SidebarCommunity() {
  const [loading, setLoding] = useState(true);
  return (
    <SidebarCommunityLayout
      header="My Communities"
      footer="see all"
      loading={loading}>
      {loading ? (
        <>
          <MyCommunityLoader /> <KYCNotification />
        </>
      ) : (
        <Communities />
      )}
      {loading ? <MyCommunityLoader /> : <Communities />}
      {loading ? <MyCommunityLoader /> : <Communities />}
    </SidebarCommunityLayout>
  );
}
