import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Chart } from "react-google-charts";
import Calendar from "react-calendar";
import logo from "../../assets/logos/trophy.png";
import bg from "../../assets/images/lambo-aventador.jpg";
import bg2 from "../../assets/images/duke_1290.jpg";
import bg3 from "../../assets/images/digital-art.jpg";
import pic1 from "../../assets/images/asus.jpg";
import pic2 from "../../assets/images/asus_pic.jpg";
import pic3 from "../../assets/images/win_pic.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Sale", 4],
  ["Growth", 5],
  ["Bike", 3],
  ["Car", 7],
];

export const options = {
  title: "Activity Log",
};

const Dashboard = () => {
  const TITLE = "DASHB";

  const [change, setChange] = useState(new Date());

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>AVENTADOR</h1>

      {/*******************Carousel*****************/}
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/*******************carousel*****************/}
      <br />
      <br/>
      {/********************cards*******************/}
    <div className="cards">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title>Asus ROG</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="btn btn-outline-dark">GO</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title>Asus</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="btn btn-outline-dark">GO</button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic3} />
      <Card.Body>
        <Card.Title>Windows</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="btn btn-outline-dark">GO</button>
      </Card.Body>
    </Card>
    </div>
    {/********************cards*******************/}
    <br/>
    <br/>
      <h2>Dashboard Page</h2>
      <img src={logo} className="" alt="logo" width="300px" />
      <button className="btn btn-primary">GO</button>
      <br />
      <br />
      <div className="calendar" align="center">
        <Calendar onChange={setChange} value={change} />
      </div>

      <div className="chart">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    
      
    </div>
  );
};

export default Dashboard;
