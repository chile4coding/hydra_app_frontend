import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import AppLayout from "../pages/WalletLayout";
import WalletItemMob from "./WALLET/WalletItemMob";
import NFTunList from "./WALLET/NFTunList";
import  WalletHeader from "./WALLET/walletHeader";
         


export default function Homepage() {
  const [mobile, setMobile] = useState(false);

  return (
    <AppLayout>
      <Row>
      <Col md={12}>


        <walletHeader/>
       </Col>
       <Col md={12}>        
        < WalletItemMob />
        </Col>
      </Row>
    </AppLayout>
  );
}
