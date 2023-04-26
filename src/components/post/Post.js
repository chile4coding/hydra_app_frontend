import React from "react";
import { Card } from "react-bootstrap";

import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AppLayout from "../../pages/AppLayout";
import man from "../../images/man.jpg";
import earthIcon from "../../icons/earth.png";
import classes from "./Post.module.css";

const PostComponent = (props) => {
  return (
    <AppLayout>
      <div className={classes["post_container"]}>
        <h6 className="text-white pt-2 px-2">Post</h6>
        <div className={classes['post__body']}>
          <Container className="px-4 ">
            <div
              className={`${classes["post__span"]} d-flex justify-content-between align-items-center `}>
              <span className={classes["close__button"]}> &times;</span>{" "}
              <span>Create Post</span> <span>Post</span>
            </div>
            <div className="d-flex align-items-center gap-2 mt-4">
              <div
                style={{
                  backgroundImage: `url(${man})`,
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}></div>
              <div>
                <p className="py-0 my-0">John Doe</p>
                <div className="border  align-items-center px-2 rounded  py-1">
                  <img src={earthIcon} />
                  <select className="border-0 px-2">
                    <option>Everyone</option>
                  </select>
                </div>
              </div>
            </div>
            <form className="my-4">
              <textarea rows="8"  className={`${classes['text__area']}`} placeholder="Write something...">

              </textarea>
            </form>
          </Container>
          <div className="border-0 d-flex justify-content-center"></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PostComponent;
