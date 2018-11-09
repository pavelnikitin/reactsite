import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './carousel.min.scss';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import slide4 from '../img/slide4.jpg';
import slide5 from '../img/slide5.jpg';
import slide6 from '../img/slide6.jpg';
import slide7 from '../img/slide7.jpg';
import slide8 from '../img/slide8.jpg';
import slide9 from '../img/slide9.jpg';
import slide10 from '../img/slide10.jpg';





class Slider extends Component {
    render() {
        return (
            <Carousel autoPlay= {true} interval={3000} showStatus={false} >
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide2} />
                </div>
                <div>
                    <img src={slide3} />
                </div>
                <div>
                    <img src={slide4} />
                </div>
                <div>
                    <img src={slide5} />
                </div>
                <div>
                    <img src={slide6} />
                </div>
                <div>
                    <img src={slide7} />
                </div>
                <div>
                    <img src={slide8} />
                </div>
                <div>
                    <img src={slide9} />
                </div>
                <div>
                    <img src={slide10} />
                </div>
            </Carousel>
        );
    }
}

export default Slider