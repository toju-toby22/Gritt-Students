import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '..//Assets/podcast-illo-2020-u-billboard-1548-compressed.jpg';
import "../Styling/sliderBanner.css"
import pic from "../Assets/Podcasting-stock-image-Shutterstock.jpg";
import pic2 from "../Assets/R.jpeg";





const SliderBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className='banner'>
                    <img className='d-block w-100 banner_image' src={pic} alt="" />
                    <Carousel.Caption>
                        <h1>Exciting Articles</h1>
                        <p>Get your hands on newest articles and blogs</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='banner'>
                <img className='d-block w-100 banner_image' src={pic2} alt="" />

                    <Carousel.Caption>
                        <h1>Deep Podcast</h1>
                        <p>Listen to our podcast where we dive into the minds of great peoplle around the world</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item className='banner'>
                    <ExampleCarouselImage text="Third slide" />
                    <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            {/* <img src={image1} alt="" /> */}

        </div>
    )
}

export default SliderBanner