import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton from "react-skeleton-loader";
import Container from "react-bootstrap/Container";
import ContentLoader from "react-content-loader";
import HomeFooter from "./HomeFooter";
import classes from './Stories.module.css'

export function HomeSidebarLoader(){

  return(
    
    <ContentLoader
    width="100%"
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    viewBox='0 0 200 250'
    className="">
    <rect x="20" y="20" width="40%" height="10" className='py-4' />
    <rect x="20" y="55" width="9%" height="20" />

    <rect x="50" y="60" width="50%" height="10" />
    <rect x="20" y="100" width="9%" height="20" />
    <rect x="50" y="106" width="50%" height="10" />
    <rect x="20" y="150" width="9%" height="20" />
    <rect x="50" y="155" width="50%" height="10" />
    <rect x="20" y="195" width="9%" height="20" />
    <rect x="50" y="200" width="50%" height="10" />
    
  </ContentLoader>
  )
}

export function  HomeSidebarFooterloader(){
  return (
 <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
            <rect x="20" y="" width="9%" height="20" />
            <rect x="50" y="6" width="50%" height="10" />
            <rect x="20" y="60" width="9%" height="20" />
            <rect x="50" y="66" width="50%" height="10" />
            
            
          </ContentLoader> 
  )
}

function Stories({children}) {
  return (
    <Card className={`${classes['card__width'] } border-0 px-0`}  > 
        
       
        
       
 
        

{
  children
}

        
          <HomeFooter/>
      
    </Card>
  );
}

export default Stories;
