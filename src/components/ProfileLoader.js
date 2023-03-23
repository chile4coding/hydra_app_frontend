import React from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-skeleton-loader";
import Container from "react-bootstrap/Container";
import ContentLoader from "react-content-loader";
import KYCNotification from "./KYC/KYCNotification";
import classes from './ProfileLoader.module.css'

export default function () {
  return (
    <Card className={`${classes['right__sidebar']} pt-4 border-0`} style={{backgroundColor: '#F3F3F4'}}>
        <KYCNotification/>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed">
        <rect x="20" y="2" width="75%" height="15" />
        <rect x="20" y="30" width="30%" height="75" />
        <rect x="120" y="30" width="40%" height="15" />
        <rect x="120" y="55" width="40%" height="15" />
        <rect x="120" y="80" width="30%" height="20" />
      </ContentLoader>
    <ContentLoader
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed">
    <rect x="20" y="0" width="30%" height="75" />
        <rect x="120" y="0" width="40%" height="15" />
        <rect x="120" y="25" width="40%" height="15" />
        <rect x="120" y="50" width="30%" height="20" />
    </ContentLoader>
    <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed">
        <rect x="20" y="90" width="75%" height="15" />
        <rect x="20" y="0" width="30%" height="75" />
        <rect x="120" y="0" width="40%" height="15" />
        <rect x="120" y="25" width="40%" height="15" />
        <rect x="120" y="50" width="30%" height="20" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="2" width="25%" height="12" />
        <rect x="20" y="30" rx="50%" ry="50%" width="50" height="50" />
        <rect x="80" y="30" width="50%" height="12" />
        <rect x="80" y="55" width="50%" height="12" />
        <rect x="50" y="90" width="45%" height="20" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="2" width="25%" height="12" />
        <rect x="20" y="30" rx="50%" ry="50%" width="50" height="50" />
        <rect x="80" y="30" width="50%" height="12" />
        <rect x="80" y="55" width="50%" height="12" />
        <rect x="50" y="90" width="45%" height="20" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="2" width="25%" height="12" />
        <rect x="20" y="30" rx="50%" ry="50%" width="50" height="50" />
        <rect x="80" y="30" width="50%" height="12" />
        <rect x="80" y="55" width="50%" height="12" />
        <rect x="50" y="90" width="45%" height="20" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="2" width="25%" height="12" />
        <rect x="20" y="30" width="70%" height="12" />
        <rect x="20" y="55" width="70%" height="12" />
        <rect x="20" y="80" width="70%" height="12" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="0" width="85%" height="12" />
        <rect x="20" y="30" width="70%" height="12" />
        <rect x="20" y="55" width="85%" height="12" />
      </ContentLoader>

      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="0" rx="50%" ry="50%" width="30" height="30" />
        <rect x="60" y="10" width="50%" height="12" />
        <rect x="20" y="40" width="60%" height="12" />
        <rect x="20" y="65" width="60%" height="12" />
        <rect x="20" y="85" width="60%" height="12" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="0" width="85%" height="12" />
        <rect x="20" y="30" width="70%" height="12" />
        <rect x="20" y="55" width="85%" height="12" />
      </ContentLoader>
      <ContentLoader
        width="100%"
        backgroundColor="#d9d9d9"
        foregroundColor="#d9d9d9">
        <rect x="20" y="0" rx="50%" ry="50%" width="30" height="30" />
        <rect x="60" y="10" width="20%" height="12" />
        <rect x="20" y="40" width="30%" height="12" />
        
      </ContentLoader>
    </Card>
  );
}
