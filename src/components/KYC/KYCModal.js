import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import classes from "./KYCModal.module.css";
import arrowRightIcon from '../../icons/arrowright.png'


export function ModalButton(props){
  return (
    <Button style={{marginBottom: props.mobile? '15px': ''}}
            variant="secondary"
            onClick={props.handleClose}
            className={classes["modal__button"]}>{
              props.verify
            }
            <span className="mx-2">
              {
                props.mobile && <img src={arrowRightIcon}/>
              }
            </span>
           
          </Button>
  )

}
export default function KYCModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="border-0">Hi Reginald,</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          Kindly complete your kyc verification to have access to all Hydra’s
          exclusive features
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center">
          <ModalButton handleClose={props.handleClose} verify="Continue"/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
