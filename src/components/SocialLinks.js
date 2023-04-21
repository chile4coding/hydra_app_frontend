import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import plus from '../icons/plus.svg';
import dribble from '../icons/Dribbble.svg';
import linked from '../icons/LinkedInCircled.svg';
import Link from '../icons/Link.svg';
import classes from './socialLinks.module.css';



function SocialLinks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        <img src={plus}  onClick={handleShow} alt="add"/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className={`${classes['M_title']}`}>Social Links</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <p className={`${classes['body_para']}`}>Add your social links that will be visible on your profile</p>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded">
            <div className="mb-4">
              <h6 className={`${classes['body_h6']}`}>Add social Links</h6>
              <div >
                <img className={`${classes['img_drib']}`}  src={dribble}/>
                <input className="border rounded w-70% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${classes["username"]}`} type="text"/>
              </div>
              <div>
                <img className={`${classes['img_drib']}`} src={linked}/>
                <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${classes["username"]}`} type="text"/>
              </div>
              
              <img className={`${classes['img_drib']}`}  src={Link}/>
              <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`${classes["username"]}`} type="text"/>
            </div>
          </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SocialLinks;