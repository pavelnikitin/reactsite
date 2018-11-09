import React from 'react';
import work from '../video/Work.mp4';
import workaholic from '../video/Workaholic.webm';
import poster from '../img/Workaholic.jpg';




class IndexPage extends React.Component {


  componentDidMount() {
    

    if (typeof window !== `undefined`) {
         const TypeIt = require('typeit'); 
         
         new TypeIt('.type-it', {
            startDelay: 3000,
            speed: 50,
            strings: ['HTML верстальщик,', 'вебразработчик Никитин Павел', '(г. Красноярск).']
        });

        const AOS = require('aos');
        this.aos = AOS;
         this.aos.init();
      }
    
    
}

componentDidUpdate() {
    this.aos.refresh()
}



  render () {
    return (
      <div>
          <section className="hero" id="hero">
            <i className="fa fa-angle-down"></i>           
            <div className="hero__overlay hero__overlay_about">
                <h1 className="type-it"></h1> 
            </div>
            <video loop muted autoPlay poster={poster} className="hero__video">
                <source src= {work} type="video/mp4"/>
                <source src={workaholic} type="video/webm"/>
            </video>
         </section>
         <section className="aboutme">
         <h2 className="sectiontitle" data-aos="fade-right" data-aos-duration="500">Обо мне</h2>
         <hr className="underline" data-aos="fade-left" data-aos-duration="500"/>
         <div className="container">
             <div className="row">
                 <div className="col-xs-12 col-sm-10 col-sm-offset-1" data-aos="zoom-in" data-aos-duration="500">
                     <p>
                         Моя специализация это создание сайтов и Landing Page. Верстка (фиксированная, резиновая, адаптивная), верстка с использованием
                         фреймворка
                         <a href="http://getbootstrap.com/"> Bootstrap.</a>
                     </p>
                     <p>
                         Верстка с "натяжкой" на CMS (разработка темы)
                         <a href="https://wordpress.org/"> WordPress.</a>
                     </p>
                     <p>
                         В процессе разработки пишу легкочитаемый, прокомментированный в нужных местах код, который будет понятен другому разработчику.
                     </p>
                     <p> В работе использую
                         <a href="http://webpack.github.io/"> Webpack, </a>препроцессоры
                         <a href="https://sass-scss.ru/"> Sass</a> и
                         <a href="http://lesscss.org"> Less, </a>javascript библиотеки
                         <a href="https://jquery.com/"> Jquery</a> и
                         <a href="https://reactjs.org/"> React.</a>
                     </p>
                 </div>
             </div>
         </div>
     </section>
      </div>
    )
  }
}

export default IndexPage
