import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import reelIcon from "../icons/reelsIcon.png";
import storyIcon from "../icons/storyIcon.png";
import Col from "react-bootstrap/Col";
import classes from "./HomeStory.module.css";
import manavatar from "../images/man.jpg";
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avartar2.png'
import avatar3 from '../images/avatar3.png'
import avatar4 from '../images/avatar4.png'
import { KYCStatus } from "../pages/homepage";

const storyAndReelObj = [
  { img: storyIcon, title: "Story", active: true, id: 0 },
  { img: reelIcon, title: "Reels", active: false, id: 1 },
];
function Stories(props) {
  const [stories, setStories] = useState(storyAndReelObj);

  return (
    <div className={`${classes['mobile__view']} mt-4`}>
      <div className={classes["stories__cover"]} >
        <div
          className={classes["stories"]}
          style={{ backgroundImage: `url(${manavatar})` }}></div>
      </div>
      <p  className={`${ classes["stories__text"]}`}>Reginald</p>
    </div>
  );
}

function HomeStory() {
  const [Obj, setObj] = useState(storyAndReelObj);
  const [mobile, setMobile] = useState(true)
  function handleActiveClass(id) {
    setObj((prev) => {
      return storyAndReelObj.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            active: true,
          };
        } else {
          return {
            ...el,
            active: false,
          };
        }
      });
    });
  }

  return (
    <Card className={`${classes['border']} ${classes['mobile__view']} mb-4 border `} >
      <div  className={`${classes['mobile__display']} d-flex justify-content-around border-bottom`}>
        {Obj.map((el, i) => {
          return (
            <button
              className={`${classes["story__container"]} ${
                el.active ? classes["story__contain_active"] : ""
              }`}
              onMouseEnter={handleActiveClass.bind(this, i)}>
              <img src={el.img} />{" "}
              <span className={classes["story__text"]}>{el.title}</span>
            </button>
          );
        })}
      </div>

      <Card.Body className="d-flex overflow-auto ">
        <Stories avatar={avatar1}/>
        <Stories avatar={avatar2}/>
        <Stories avatar={avatar3}/>
        <Stories avatar={avatar4}/>
        <Stories avatar={avatar1}/>
        <Stories avatar={avatar2}/>
        <Stories avatar={avatar3}/>
        <Stories avatar={avatar4}/>
      </Card.Body>
  <KYCStatus bg='#43454C'/>
      
    </Card>
  );
}

export default HomeStory;
