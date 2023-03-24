import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from './SidebarCommunityLayout.module.css'
import { SidebarFooterLoader, TitleLoader } from "../ProfileLoader";
function SidebarCommunityLayout({ loading, bg, header, footer, children }) {
  return (
    <Card
      style={{
        padding: "0!important",
        margin: "0 !mportant",
        backgroundColor: loading ? "#F3F3F4" : "",
        border: loading ? '0px ': '',
        
      }} 
      className="mb-4">
    
      {
        !loading && <div className=  {` ml-4 py-3 ${loading ? 'border-o ': 'border-bottom'}`} >
        <h5 className={`${classes['header__footer-text']} mx-4`}>{header}</h5>
      </div>
      }
      
      <Card.Body
        style={{ backgroundColor: `${bg} `, padding: "0", margin: "0" }}>
        {children}
      </Card.Body>
    
     {
      !loading && <div className={` ml-4 py-3 ${loading ? 'border-o ': 'border-top'}`}>
      <p className={`${classes['header__footer-text']} mx-4`}>{footer}</p>
    </div>
     } 
          
    </Card>
  );
}

export default SidebarCommunityLayout;
