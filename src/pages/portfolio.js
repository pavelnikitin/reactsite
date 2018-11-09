import React from 'react';
import Slider from '../components/carousel';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import seolanding from '../img/seolanding.jpg';
import fotogallery from '../img/fotogallery.jpg';
import furnitureshop from '../img/furnitureshop.jpg';
import gamegallery from '../img/gamegallery.jpg';

class Portfolio extends React.Component {


  componentDidMount() {
    

      if (typeof window !== `undefined`) {
        const TypeIt = require('typeit');  

        new TypeIt('.type-it', {
          startDelay: 500,
          speed: 50
      }); 
      
      const AOS = require('aos');

      setTimeout(function() { AOS.init({
        duration: 500,
        delay: 300,
        once: false
      }) }, 500);
     }
      
    
    
}
  componentDidUpdate() {
    if(typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.refresh();      
    }
  }

  render() {
    return (
      <div>
        <section className="hero" id="hero">
          <i className="fa fa-angle-down"></i>
          <div className="hero__overlay">
            <h1 className="type-it">
              Мои работы ...
            </h1>
          </div>
          <div className="hero__img hero__img_portfolio"></div>
        </section>
        <section className="portfolio" id="portfolio">
          <h2 className="sectiontitle" data-aos="fade-right">Портфолио</h2>
          <hr className="underline" data-aos="fade-left" />
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <h4 className="portfolio__title" data-aos="fade-right">Wordpress сайт.</h4>
                <div data-aos="zoom-in">
                <p>
                Сайт разработан с использованием
                <a href="https://getbootstrap.com/"> Bootstrap4 </a>
                и
                <a href="https://wordpress.org/"> WordPress.</a>
              </p>
              <p>Основная часть контента, заголовки, изображения, контактные данные и другая
                информация легко редактируются через административное меню Wordpress. Также
                через административное меню добавляются необходимые страницы.
              </p>
              <p>На сайте реализованы, google карта, parallax эффект фона, mega menu, контактная
              форма и многое другое.</p>
                </div>

              </div>
            </div>
            <div className="row portfolio__item">
              <div className="portfolio__slider col-sm-8 col-sm-offset-2">
                <Slider/>
                <a
                  href="http://nikitix9.beget.tech/"
                  target="_blank"
                  className="btn btn-primary btn-lg">Перейти</a>
              </div>

            </div>
            <div className="row portfolio__item">
              <div className="col-sm-10 col-sm-offset-1">
                <h4 className="portfolio__title" data-aos="fade-right">Лендинг компании по продвижению сайтов.</h4>
                <div data-aos="zoom-in">
                <p >
                Разработан на React генераторе статичных сайтов
                <a href="https://www.gatsbyjs.org/"> Gatsby </a>
                и Bootstrap.</p>
              <p>
                На сайте используются анимация
                <a href="http://michalsnik.github.io/aos/"> AOS</a>, формы обратной связи в
                модальном окне с валидацией и оповещениями, калькулятор, а также адаптивное меню
                для навигации по секциям страницы.</p>
                </div>
              </div>
              <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" data-aos="zoom-out">
                <img
                  src={seolanding}
                  className="portfolio__preview img-responsive"
                  alt="preview"/>
                <a href="/seolanding/" target="_blank" className="btn btn-primary btn-lg">Перейти</a>
              </div>
            </div>
            <div className="row portfolio__item">
              <div className="col-sm-10 col-sm-offset-1">
                <h4 className="portfolio__title" data-aos="fade-right">Фотогалерея.</h4>
                <p data-aos="zoom-in">
                  Адаптивная фотогалерея разработанная с использованием React и Bootstrap.
                  Реализованы навигация по фотографиям, сортировка по категориям и "burger-menu".</p>

              </div>
              <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" data-aos="zoom-out" >
                <img              
                  src={fotogallery}
                  className="portfolio__preview img-responsive"
                  alt="preview"/>
                <a href="/fotogallery/" target="_blank" className="btn btn-primary btn-lg">Перейти</a>
              </div>
            </div>
            <div className="row portfolio__item">
              <div className="col-sm-10 col-sm-offset-1">
                <h4 className="portfolio__title" data-aos="fade-right">Главная страница мебельной компании.</h4>
                <p data-aos="zoom-in">
                  <br/>Адаптивная верстка с использованием Bootstrap. Есть слайдер и "drop-down"
                    меню для мобильных устройств.
                </p>

              </div>
              <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" data-aos="zoom-out">
                <img   
                  src={furnitureshop}
                  className="portfolio__preview img-responsive"
                  alt="preview"/>
                <a
                  href="/furnitureshop/"
                  target="_blank"
                  className="btn btn-primary btn-lg">Перейти</a>
              </div>
            </div>
            <div className="row portfolio__item">
              <div className="col-sm-10 col-sm-offset-1">
                <h4 className="portfolio__title" data-aos="fade-right">Галерея игр.</h4>
                <p data-aos="zoom-in">
                  Адаптивная вебстраница разработанная с использованием React и Bootstrap.
                  Работает поиск игры по названию и есть возможность добавления своей игры.
                </p>
              </div>
              <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3" data-aos="zoom-out">
                <img                 
                  src={gamegallery}
                  className="portfolio__preview img-responsive"
                  alt="preview"/>
                <a
                  href="/gamegallery/"
                  target="_blank"
                  className="btn btn-primary btn-lg">Перейти</a>
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
    )
  }
}

export default Portfolio;