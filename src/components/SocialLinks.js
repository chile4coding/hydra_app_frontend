import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import add from '../icons/add.svg';
import ball from '../icons/Dribbble.svg';
import linkedin from '../icons/LinkedIncircled.svg';
import Link from '../icons/Link.svg';
import deletes from '../icons/deletes.svg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import classes from './SocialLinks.module.css';



function SocialLinks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        <img src={add}  onClick={handleShow} alt="add" className={`${classes['add-links']}`}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        
          <h2 className={`${classes['modal_title']}`}>Social Links</h2>
        <Modal.Body>
        <p  >Add your social links that will be visible on your profile</p>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded">
            <div  className="mb-4">
              <h6 className={`${classes['para']}`}>Add social Links</h6>
              <div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src={ball} alt='dribble-icon'/></InputGroup.Text>
                <Form.Control
                  placeholder="https://dribble.com/malikazeez"
                  aria-label="dribble"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1"><img src={deletes} alt='delete-icon'/></InputGroup.Text>
              </InputGroup>
              </div>
              <div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src={linkedin} alt='linkedin-icon'/></InputGroup.Text>
                <Form.Control
                  placeholder="https://linkedin.com/malikazeez "
                  aria-label="links"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1"><img src={deletes} alt='delete-icon'/></InputGroup.Text>
              </InputGroup>
              </div>
              <div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><img src={Link} alt='link-icon' /></InputGroup.Text>
                <Form.Control
                  placeholder="malikazeez.com"
                  aria-label="Linkedin"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1"><img src={deletes} alt='delete-icon'/></InputGroup.Text>
              </InputGroup>
              </div>

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