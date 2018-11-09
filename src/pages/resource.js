import React from 'react';
import Link from 'gatsby-link';
import ResourceItem from '../components/resourceItem';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import sasslogo from '../img/sass.png';
import reactlogo from '../img/react.png';
import bootstraplogo from '../img/bootstrap.png';
import wordpresslogo from '../img/wordpress.jpg';
import jquerylogo from '../img/jquery.png';
import gitlogo from '../img/git.png';






const data = [
  {
    title: 'React',
    url: reactlogo,
    resUrl: 'https://reactjs.org/',
    description: 'React - это библиотека JavaScript, которая используется для создания пользовательского интерфейса. React был создан компанией Facebook, а первый релиз библиотеки увидел свет в марте 2013 года.'
  },
  {
    title: 'Sass',
    resUrl: 'https://sass-scss.ru/',
    url: sasslogo,
    description: 'Написание CSS само по себе весело, но когда таблица стилей становится огромной, то становится и сложно её обслуживать. И вот в таком случае нам поможет препроцессор. Sass позволяет использовать функции недоступные в самом CSS, например, переменные, вложенности, миксины, наследование и другие приятные вещи, возвращающие удобство написания CSS.'
  },
  {
    title: 'Bootstrap',
    resUrl: 'https://getbootstrap.com/',
    url: bootstraplogo,
    description: 'Bootstrap cамый популярный HTML, CSS, и JS фреймворк для разработки адаптивных и мобильных web-проектов.'
  },
  {
    title: 'WordPress',
    resUrl: 'https://wordpress.org/',
    url: wordpresslogo,
    description: 'Вордпресс — без преувеличения самая популярная система управления контентом в мире.Эта CMS или Content Management System была создана еще в 2003 году, сегодня порядка 30% всех существующих сайтов работают именно на данном движке.'
  },
  {
    title: 'jQuery',
    resUrl: 'https://jquery.com/',
    url: jquerylogo,
    description: 'Библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими.'
  },
  {
    title: 'Git',
    resUrl: 'https://git-scm.com/',
    url: gitlogo,
    description: 'Git является распределенной системой для управления версиями разрабатываемых файлов. Создана она была в 2005 году автором ОС Linux. Эта система осуществляет синхронизацию работы с сайтом, а также сохраняет и обновляет изменения в файлах.'
  }

]

class Resource extends React.Component {

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

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <div>
        <section className="hero" id="hero">
          <i className="fa fa-angle-down"></i>
          <div className="hero__overlay">
            <h1 className="type-it">
              Использую в работе ...
            </h1>
          </div>
          <div className="hero__img hero__img_resource"></div>
        </section>
        <section className="resource">
          <div className="container">
            <div className="row">
              <div className="resource__wraper">
                {data.map((item, index) => {

                  return <ResourceItem key={index} title={item.title} resUrl={item.resUrl} url={item.url}
                    description={item.description} />
                })}
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



export default Resource;