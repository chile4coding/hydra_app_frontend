import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Skeleton from "react-skeleton-loader";
import Container from "react-bootstrap/Container";
import ContentLoader from "react-content-loader";
import KYCNotification from "./KYC/KYCNotification";
import HomeFooter from "./HomeFooter";

function Stories(props) {
  return (
    <Card className="mx-auto my-4 border-0" style={{backgroundColor: '#F3F3F4'}}>
        {
            props.sidebar && <KYCNotification  sidebar={true} />
        }
       
      <Card.Body className="mx-auto mt-4" >
        
        <Container>
       
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
            <rect x="40" y="2" width="40%" height="10" />
            <rect x="40" y="35" width="9%" height="20" />
            <rect x="70" y="40" width="50%" height="10" />
            <rect x="40" y="80" width="9%" height="20" />
            <rect x="70" y="86" width="50%" height="10" />
            <rect x="40" y="130" width="9%" height="20" />
            <rect x="70" y="135" width="50%" height="10" />
            
          </ContentLoader>
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
           
            <rect x="40" y="35" width="9%" height="20" />
            <rect x="80" y="40" width="50%" height="10" />
            <rect x="40" y="80" width="9%" height="20" />
            <rect x="80" y="86" width="50%" height="10" />
            <rect x="40" y="130" width="9%" height="20" />
            <rect x="80" y="135" width="50%" height="10" />
            
          </ContentLoader>
          
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
           
            <rect x="40" y="35" width="70%" height="10" />
            <rect x="40" y="80" width="50%" height="10" />
            
            
          </ContentLoader>
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
            <rect x="40" y="2" width="40%" height="10" />
            <rect x="40" y="35" width="9%" height="20" />
            <rect x="70" y="40" width="50%" height="10" />
            <rect x="40" y="80" width="9%" height="20" />
            <rect x="70" y="86" width="50%" height="10" />
            <rect x="40" y="130" width="9%" height="20" />
            <rect x="70" y="135" width="50%" height="10" />
            
          </ContentLoader>
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
            <rect x="40" y="2" width="40%" height="10" />
            <rect x="40" y="35" width="9%" height="20" />
            <rect x="70" y="40" width="50%" height="10" />
            <rect x="40" y="80" width="9%" height="20" />
            <rect x="70" y="86" width="50%" height="10" />
            <rect x="40" y="130" width="9%" height="20" />
            <rect x="70" y="135" width="50%" height="10" />
            
          </ContentLoader>
          <ContentLoader
            width="100%"
            backgroundColor="#d9d9d9"
            foregroundColor="#ededed"
            className="">
            <rect x="40" y="" width="9%" height="20" />
            <rect x="70" y="6" width="50%" height="10" />
            <rect x="40" y="60" width="9%" height="20" />
            <rect x="70" y="66" width="50%" height="10" />
            
            
          </ContentLoader>
          </Container>
          <HomeFooter/>
      </Card.Body>
    </Card>
  );
}

export default Stories;
