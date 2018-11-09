import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../scss/styles.scss';
if (typeof window !== `undefined`) {
   require('../scripts/bootstrap.min.js');       
 }

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="24verstka.ru"
            meta={[
            {
                name: 'description',
                content: 'Портфолио HTML верстальщика вебразработчика Красноярск'
            }, {
                name: 'keywords',
                content: 'Никтин Павел, Красноярск, Вебразработчик, Портфолио, Красноярск'
            }, {
                name: 'author',
                content: 'Никитин Павел'
            }
            
        ]}/>
        <Helmet>
          <title>24verstka.ru</title>
          <meta name="description" content="Портфолио HTML верстальщика вебразработчика Красноярск" />
          <meta name="keywords" content="Верстка, Вебразработчик, Создать сайт, Портфолио, Красноярск, Никитин Павел" />
          <meta name="author" content="Никитин Павел" />          
          <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
        </Helmet>

        <div>
            <nav
                id="mainNav"
                className="navbar navbar-default navbar-fixed-top navbar-custom">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810.36 222.08">
                                <title>Asset 1</title>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <text className="cls-1" transform="translate(3.69 138.88) scale(0.72 1)">24verstka.ru
                                        </text>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="page-scroll">
                                <Link exact to="/" activeClassName="activelink">Обо мне</Link>
                            </li>
                            <li className="page-scroll">
                                <Link  to="/portfolio/" activeClassName="activelink">Портфолио</Link>
                            </li>
                            <li className="page-scroll">
                                <Link  to="/contacts/" activeClassName="activelink">Контакты</Link>
                            </li>
                            <li className="page-scroll">
                                <Link  to="/resource/" activeClassName="activelink">Ресурсы</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {children()}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <h4>Социальные сети</h4>
                            <ul className="list-inline">
                                <li>
                                    <a href="https://facebook.com/" target="_blank" className="bage social">
                                        <i className="fa fa-fw fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" className="bage social">
                                        <i className="fa fa-fw fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-center">
                            <h4>г. Красноярск,
                                <br/>Красноярский Край
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright row">
                    <p className="text-center">Copyright &copy; Nikitin Pavel 2018
                    </p>
                </div>
            </footer>
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper
