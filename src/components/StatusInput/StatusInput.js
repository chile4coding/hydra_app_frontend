import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import mediaIcon from "../../icons/media.png";
import stickerIcon from "../../icons/sticker.png";
import videoIcon from "../../icons/videoIcon.png";
import { useState } from "react";
import man from "../../images/man.jpg";
import PostComponent from "../post/Post";
import classes from "./StatusInput.module.css";

function StatusInput() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <>
      <PostComponent handleClose={handleClose} show={show} />
      <Card className={`${classes["card__display--desktop"]} mb-4`}>
        <Card.Body className="d-flex align-items-start gap-2">
          <div
            style={{
              backgroundImage: `url(${man})`,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}></div>
          <div className="w-100">
            <form className="w-100 mt-2">
              <input
                placeholder="What is going on?"
                className={`${classes["form__style"]} w-100 border-0 px-4`}
              />

              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className={`${classes["show__mobile"]} d-flex `}>
                  <div style={{ cursor: "pointer" }}>
                    <i>
                      <img src={mediaIcon} />
                    </i>{" "}
                    <span className={classes["text__format"]}>Media</span>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <i>
                      {" "}
                      <img src={stickerIcon} />
                    </i>{" "}
                    <span className={classes["text__format"]}>Sticker</span>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <i>
                      {" "}
                      <img src={videoIcon} />
                    </i>{" "}
                    <span className={classes["text__format"]}>Live video</span>
                  </div>
                </div>
                <div className={classes["mobile__view"]}>
                  <button
                    className={`btn btn-primary ${classes["button__style"]}`}
                    onClick={handleShow}>
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default StatusInput;
