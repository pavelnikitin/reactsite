import React from 'react';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import work from '../video/Work.mp4';
import workaholic from '../video/Workaholic.webm';
import poster from '../img/Workaholic.jpg';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import ContactForm from '../components/contactform';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 56.03337490000001, lng: 92.88050309999994 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 56.03337490000001, lng: 92.88050309999994 }} />}
  </GoogleMap>
));

class Contacts extends React.Component {

    componentDidMount() {
       
    
        if (typeof window !== `undefined`) {
                const TypeIt = require('typeit'); 
                
                new TypeIt('.type-it', {
                    startDelay: 500,
                    speed: 50
                });

                const AOS = require('aos');
                this.aos = AOS;
                this.aos.init();
             }
          
    }

    render() {
        return (
            <div>
                <section className="hero" id="hero">
                    <i className="fa fa-angle-down"></i>
                    <div className="hero__overlay">
                        <h1 className="type-it">Будем на связи!
                        </h1>
                    </div>
                    <div className="hero__img hero__img_contacts"></div>
                </section>
                <section className="contacts" id="contacts">
                    <div className="container">
                        <div className="row">
                            <h2 className="sectiontitle" data-aos="fade-right" data-aos-duration="500">Контакты</h2>
                            <hr className="underline" data-aos="fade-left" data-aos-duration="500"/>
                            <div className="col-xs-10 col-xs-offset-1">
                                <p className="contacts__info text-center" data-aos="zoom-out" data-aos-duration="500">
                                    <i className="fa fa-phone" ></i>&nbsp;8-923-27-131-27
                                </p>
                                <p className="contacts__info text-center" data-aos="zoom-out" data-aos-duration="500">
                                    <i className="fa fa-envelope"></i>&nbsp; nikitin.pavel.nik@yandex.ru
                                </p>
                                <div className="google_map" data-aos="zoom-in" data-aos-duration="500">
                                    <div className="row">
                                        <div className="col-xs-12  col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                            <div id="map">
                                            <MyMapComponent
                                            isMarkerShown
                                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCe49OOGbyEYcub29-rI_FpR_UT8lRBNGE&v=3.exp&libraries=geometry,drawing,places"
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `400px` }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                          />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sendmail" id="email">
                    <div className="container">
                        <div className="row">
                            <h2 className="sectiontitle"  data-aos="fade-right" data-aos-duration="500">Отправить E-mail</h2>
                            <hr className="underline"  data-aos="fade-left" data-aos-duration="500"/>
                            <div className="row" data-aos="zoom-in" data-aos-duration="500">
                                <ContactForm url={'./mailer.php'}/>      
                            </div>
                        </div>
                        
                    </div>
                </section>
                <ScrollUpButton 
                   style={{
                            fill: '#d37676',
                            backgroundColor: 'transparent'
                         }}
                 />
            </div>
        );
    }
}

export default Contacts