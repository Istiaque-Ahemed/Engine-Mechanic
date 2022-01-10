import React from 'react';
import './Banner.css'
import { Button, Carousel} from 'react-bootstrap';


const Banner = () => {
    return (
        <div className="heder-extra">
     <Carousel className="theme-slider">
        <Carousel.Item className="slider-id-1" >
            <img
            className="d-block w-100 first-carosal image-id-1"
            src="https://i.ibb.co/njPW2dN/pexels-andrea-piacquadio-3806288.jpg"
            alt="First slide"
         
            />
            <Carousel.Caption className="carousel-caption">
                <span className="Top-hader">The Best in Town!</span>
            <h1 className="main-hader">Autolane Repair Shop
                <br />

               since 1967 in Seattle
            </h1>
            <button className="full-button fw-bold">Our Services</button>
            <Button className="gap-button fw-bold" variant="outline-secondary">Get In Touch</Button>
           
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 first-carosal carousel"
            src="https://i.ibb.co/ccbFwBg/pexels-cottonbro-4488636.jpg"
            alt="Second slide"
            />

            <Carousel.Caption >
            <span className="Top-hader">We vallue Your Car</span>
            <h1 className="main-hader">All Makes and Models
                <br />

              Auto Repair and Seattle
            </h1>
            <button className="full-button fw-bold">Our Services</button>
    
            <Button className="gap-button fw-bold" variant="outline-secondary">Get In Touch</Button>
          
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 first-carosal carousel"
            src="https://i.ibb.co/YbLF8yq/pexels-pixabay-279949.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <span className="Top-hader fw-bold">True Care in Autocare</span>
            <h1 className="main-hader fw-bold">Car REpair Services
                <br />

              for Affordable Prices
            </h1>
            <button className="full-button fw-bold">Our Services</button>

            <Button className="gap-button fw-bold" variant="outline-secondary">Get In Touch</Button>
            
            </Carousel.Caption>
        </Carousel.Item>
       
</Carousel>
    
        </div>
    );
};

export default Banner;