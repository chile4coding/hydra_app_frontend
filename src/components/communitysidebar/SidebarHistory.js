import React from "react";
import Card from "react-bootstrap/Card";
import HomeFooter from "../HomeFooter";
import doc_icon  from "../../images/doc_icon.png";

function SidebarMenu() {
  return (
    <Card className="mb-4 d-none d-lg-block d-md-none">
        <Card.Header>
            <div>
                <p>Recent Transaction</p>
            </div>
        </Card.Header>
      <div className="d-flex border-top py-4 px-4">
        <Card.Text className="py-5 my-5">
          <div className="my-2  clearfix justify-content-center align-items-center gap-3">
            < img src={doc_icon} alt="empty history " className="mx-2" style={{width: '200px'}}/>
            <p className="text-center">No recent transaction</p>
          </div>
          
        </Card.Text>
      </div>
    </Card>
  );
}

export default SidebarMenu;
