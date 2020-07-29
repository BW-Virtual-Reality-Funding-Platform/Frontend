import React from 'react';
import "./Box.css";
import { Card } from 'react-bootstrap';

const Features = () => {
    const cardInfo = [
        {image: "https://media.playstation.com/is/image/SCEA/dead-by-daylight-listing-thumb-01-ps4-us-26may17?$Icon$", title: "Dead By Daylight", text: "We are trying to fund VR DbD"},
        {image: "https://www.roadtovr.com/wp-content/uploads/2020/02/vive-cosmos-elite-virtual-reality.jpg", title: "Monster Hunter", text: "We are trying to make Monster Hunter VR"},
        {image: "https://crohasit.net/wp-content/uploads/2016/04/151828.jpg", title: "Mirror's Edge", text: "We are trying to make Mirror's Edge VR"},
        {image: "https://images.dexerto.com/uploads/2020/06/29163703/escape-from-tarkov-battlestate-games-june-29-patch.jpg", title: "Escape from Tarkov", text: "We are trying to make Escape from Tarkov VR"},
        {image: "https://www.runescape.com/img/microsite/social-share-fb.jpg", title: "Runescape", text: "Runescape VR is underway!"},
        {image: "https://media.contentapi.ea.com/content/dam/walrus/en-us/migrated-images/2017/04/reveal-swbf2-fb-meta-image-alt.png.adapt.crop191x100.1200w.png", title: "Star Wars Battlefront", text: "We are trying to make Star Wards Battlefront VR"},
        {image: "https://image-cdn.essentiallysports.com/wp-content/uploads/20200601234858/valorant-personajes-1.jpg", title: "Valorant", text: "We are trying to make Valorant VR"},
        {image: "https://cdn3.whatculture.com/images/2018/06/3eec47493d526e20-1200x675.png", title: "Skate 4", text: "We are making skate 4 VR"},
        {image: "https://cdn1.dotesports.com/wp-content/uploads/2019/09/04100720/overwatch-1.jpg", title: "Overwatch", text: "We are planning on making Overwatch VR"},
        // {image: "https://www.roadtovr.com/wp-content/uploads/2020/02/vive-cosmos-elite-virtual-reality.jpg", title: "Monster Hunter VR", text: "We are trying to make Monster Hunter VR"},
        // {image: "https://crohasit.net/wp-content/uploads/2016/04/151828.jpg", title: "Mirror's Edge", text: "We are trying to make Mirror's Edge VR"},
        // {image: "https://images.dexerto.com/uploads/2020/06/29163703/escape-from-tarkov-battlestate-games-june-29-patch.jpg", title: "Escape from Tarkov VR", text: "We are trying to make Escape from Tarkov VR"},
    ];
    const renderCard = (card, index) => {
        return(
            <Card style={{ width: '18rem' }} key = {index} className = "box">
                <Card.Img variant="top" src="holder.js/100px180" src= {card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>
        )
    }
    return(
        <div className = 'grid'>
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

    )
}

export default Features