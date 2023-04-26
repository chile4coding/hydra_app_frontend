import React from "react";
import { Card } from "react-bootstrap";
// import AppLayout from "../../pages/AppLayout";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const PostComponent = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Container>
          <div className="d-flex justify-content-between">
            <span> &times;</span> <span>Create Post</span> <span>Post</span>
          </div>

          <Modal.Body className="border-0">
            Kindly complete your kyc verification to have access to all Hydra’s
            exclusive features
          </Modal.Body>
          <Modal.Footer className="border-0 d-flex justify-content-center"></Modal.Footer>
        </Container>
      </Modal>
    </>
  );
};

export default PostComponent;
