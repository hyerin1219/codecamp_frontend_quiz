import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function SimpleSlider():JSX.Element {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    

    return (
        <>
            <Slider {...settings}>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}}>1</div>
                </div>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}} >2</div>
                </div>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}} >3</div>
                </div>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}} >4</div>
                </div>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}} >5</div>
                </div>
                <div>
                    <div style={{height: "70px", backgroundColor:"gray", margin: "20px"}} >6</div>
                </div>
            </Slider>
        </>
    );
}