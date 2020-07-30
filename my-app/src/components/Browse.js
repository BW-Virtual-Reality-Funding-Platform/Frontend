import React, { useState, useEffect } from "react";
import "./Box.css";
import { Card } from "react-bootstrap";
import axios from "axios";

const DashboardContainer = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://vr-lambdaschool.herokuapp.com/projects")
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
};

const Browse = () => {
  const cardInfo = [
    {
      image:
        "https://www.cybershoes.io/wp-content/uploads/2019/11/HellSplit-750x375@2x.jpg",
      title: "Hell Split",
      text: "Hell split VR, fight in the depths of hell.. Win or Be Consumed",
    },
    {
      image:
        "https://ksr-ugc.imgix.net/assets/011/609/376/9118166d49e15455e574b7b5c20d2a96_original.png?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1463685320&auto=format&frame=1&q=92&s=49719d993f25f1a55c1f9b109c2c2257",
      title: "SuperHot",
      text: "Fight against your FOEs",
    },
    {
      image:
        "https://www.roadtovr.com/wp-content/uploads/2018/11/beat-saber-8.jpg",
      title: "Beat Saber",
      text: "play along with your favorite songs in VR",
    },
    {
      image: "https://www.runescape.com/img/microsite/social-share-fb.jpg",
      title: "Runescape",
      text: "Runescape VR is underway!",
    },
    {
      image:
        "https://media.contentapi.ea.com/content/dam/walrus/en-us/migrated-images/2017/04/reveal-swbf2-fb-meta-image-alt.png.adapt.crop191x100.1200w.png",
      title: "Star Wars Battlefront",
      text: "We are trying to make Star Wards Battlefront VR",
    },
    {
      image:
        "https://www.roadtovr.com/wp-content/uploads/2020/02/vive-cosmos-elite-virtual-reality.jpg",
      title: "Space Walk",
      text:
        "Walk through Space and time itself fighting your way through to make it back home",
    },
    {
      image:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/20200601234858/valorant-personajes-1.jpg",
      title: "Valorant",
      text: "We are trying to make Valorant VR",
    },
    {
      image:
        "https://cdn3.whatculture.com/images/2018/06/3eec47493d526e20-1200x675.png",
      title: "Skate 4",
      text: "We are making skate 4 VR",
    },
    {
      image:
        "https://cdn1.dotesports.com/wp-content/uploads/2019/09/04100720/overwatch-1.jpg",
      title: "Overwatch",
      text: "We are planning on making Overwatch VR",
    },
    // {image: "https://www.roadtovr.com/wp-content/uploads/2020/02/vive-cosmos-elite-virtual-reality.jpg", title: "Monster Hunter VR", text: "We are trying to make Monster Hunter VR"},
    // {image: "https://crohasit.net/wp-content/uploads/2016/04/151828.jpg", title: "Mirror's Edge", text: "We are trying to make Mirror's Edge VR"},
    // {image: "https://images.dexerto.com/uploads/2020/06/29163703/escape-from-tarkov-battlestate-games-june-29-patch.jpg", title: "Escape from Tarkov VR", text: "We are trying to make Escape from Tarkov VR"},
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  };
  return (
    <div className="grid">
      {/* <h1>Features</h1> */}
      {/* <div className="grid">
                <div className="box box1"></div>
                <div className="box box2"></div>
                <div className="box box3"></div>
                <div className="box box4"></div>
                <div className="box box5"></div>
                <div className="box box6"></div>
                <div className="box box7"></div>
                <div className="box box8"></div>
                <div className="box box9"></div> */}
      {/* <div className="box box10"></div> */}

      {cardInfo.map(renderCard)}
    </div>
    // </div> */}
  );
};

export default Browse;
