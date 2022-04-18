import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import tutor1 from '../Banner/images/tutor1.jpg'
import tutor2 from '../Banner/images/tutor2.jpg'
import tutor3 from '../Banner/images/tutor3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tutor1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3 className='text-success fs-3'>Tutor Academy</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tutor2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tutor3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Banner;