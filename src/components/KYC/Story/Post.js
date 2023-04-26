import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import earthIcon from "../../../icons/earth.png";
import man from "../../../images/man.jpg";
import favourite from "../../../icons/heart.png";
import like from "../../../icons/like.png";
import hifiIcon from "../../../icons/H.png";
import moreIcon from "../../../icons/moreIcon.png";
import replyhifiIcon from "../../../icons/hifireply.png";
import hifilikeIcon from "../../../icons/hifilike.png";
import hificommentIcon from "../../../icons/hificomment.png";
import classes from "./Post.module.css";

function PostFooter(props) {
  const KYCCheckComponent = (
    <div>
      <div
        className={`${classes["KYC__text"]} d-flex justify-content-between my-2`}>
        <div className="d-flex gap-3 ">
          <span>1m views</span>
          <span>200 comments</span>
          <span>400 shares</span>
        </div>
        <div>
          {" "}
          <span
            style={{
              backgroundColor: "#EFEFEF",
              padding: "0px 7px",
              borderRadius: "20px",
            }}
            className="d-flex align-items-start  ">
            <span
              className={classes["currency__style"]}
              style={{ width: "7.37px", height: "15.3px", padding: "0px" }}>
              <img src={hifiIcon} alt="hifi icon" style={{ width: "100%" }} />{" "}
            </span>
            <span className={classes["amount"]}>0.478</span>
          </span>
        </div>
      </div>

      {props.KYC && (
        <div className="d-flex justify-content-between">
          <div className={`${classes["KYC__inner-text"]}  d-flex gap-4 `}>
            <i>
              <img src={hifilikeIcon} />
            </i>
            <i>
              <img src={hificommentIcon} />
            </i>
            <i>
              <img src={replyhifiIcon} />
            </i>
          </div>
          <div classname={`${classes["KYC__inner-text"]} `}>
            <span>
              Pere, Jon and 500k person views{" "}
              <span style={{ position: "relative", marginLeft: "8px" }}>
                <img
                  src={favourite}
                  style={{ cursor: "pointer", zIndex: "0" }}
                />
                <img
                  src={like}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "4px",
                    right: "10px",
                    zIndex: "1000",
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return KYCCheckComponent;
}

function Post(props) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div
              className={classes["user__profile"]}
              style={{ backgroundImage: `url(${man})` }}></div>
            <div className={classes["username"]}>
              <p className={classes["username__text"]}>James Ryan</p>
              <p className={classes["username__text"]}>
                <img src={earthIcon} /> <span>1 hour ago</span>
              </p>
            </div>
          </div>
          <img src={moreIcon} alt="more icon" style={{ cursor: "pointer" }} />
        </div>
        <Card.Text className="my-3">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
        </Card.Text>
        <div
          className={classes["posts__img"]}
          style={{ backgroundImage: `url(${props.img})` }}></div>
        <PostFooter KYC={true} />
      </Card.Body>
    </Card>
  );
}

export default Post;
