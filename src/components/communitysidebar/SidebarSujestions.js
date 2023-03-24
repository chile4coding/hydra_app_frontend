import React, { useState } from "react";
import SidebarCommunityLayout from "./SidebarCommunityLayout";
import man from "../../images/man.jpg";
import { SuggestedFollowerLoader } from "../ProfileLoader";

function Suggestions (){
  return (
    <div className="my-4 mx-3">

     
      <div className="d-flex gap-3" >
        <div
          style={{
            width: "48px",
            height: "48px",
            backgroundImage: `url(${man})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "50%",
          }}></div>
        <div>
          <p
            style={{
              padding: "0px",
              margin: "0px",
              fontWeight: "700",
              fontSize: "16px",
              color: "#14171F",
            }}>
            {" "}
            CardnonNFT
          </p>
          <p
            style={{
              padding: "0px",
              margin: "0px",
              fontWeight: "600",
              fontSize: "14px",
              color: " #595959",
            }}>
            @cardnonADA
          </p>
        </div>
      </div>
      <button
        className="btn btn-dark px-4 py-2 mt-4  ml-4"
        style={{
          fontWeight: "800",
          borderRadius: "16px",
          background: "#14171FBF",
        }}>
        Follow
      </button>
      </div>
  )
}

export default function SidebarSujestions() {
  const  [loading, setloading ]= useState(true)
  return (
    <SidebarCommunityLayout header="Suggested followers" footer="Show more" loading={loading}>
    
     
    
    {
      loading? <SuggestedFollowerLoader/> : <Suggestions/> 
    }
    {
      loading? <SuggestedFollowerLoader/> : <Suggestions/> 
    }
    {
      loading? <SuggestedFollowerLoader/> : <Suggestions/> 
    }
     
    </SidebarCommunityLayout>
  );
}
