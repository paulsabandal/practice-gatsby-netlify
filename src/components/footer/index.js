import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu, List, Row, Col, Icon } from 'antd'
import TradingView from 'react-tradingview-wrapper'
import Helmet from 'react-helmet'

import './footer.scss'
import Thumbnail1 from '../../images/footer/thumbnail-1.png';
import Thumbnail2 from '../../images/footer/thumbnail-2.png';
import FacebookIcon from '../../images/footer/facebook.png';
import TwitterIcon from '../../images/footer/twitter.png';
import LinkedinIcon from '../../images/footer/linkedin.png';
import InstagramIcon from '../../images/footer/instagram.png';

class Footer extends Component {
  componentDidMount () {
      const tvScript = document.createElement("script");
      const tradingViewContainer = document.querySelector(".tradingview-widget-container");
      
      tvScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
      tvScript.innerHTML = '{ "locale": "en", "symbol": "TSXV:HUT" , "width": 350 }';
      tvScript.async = true;

      tradingViewContainer.appendChild(tvScript);
  }

  render() {
    
    return (
      <div>
        <div className="footer">
          <div className="container">
            <Row gutter={48} >
              <Col md={6}>
                <div className="menu-title">
                  Menu
                </div>
                <Menu
                  mode="vertical"
                  className="menu"
                >
                  <Menu.Item key="1"> <Link to="/">Home <Icon type="right" /> </Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/about">Corporate <Icon type="right" /> </Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/projects">Projects <Icon type="right" /> </Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/investors">Investors <Icon type="right" /> </Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/news">News <Icon type="right" /> </Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/contact">Contact <Icon type="right" /> </Link></Menu.Item>
                </Menu>
              </Col>
              <Col md={6}>
                <div className="menu-title">
                  Recent news
                </div>
                <Menu
                  mode="vertical"
                  className="menu"
                >
                  <Menu.Item key="1"> <Link to="/">Hut 8 Mining Corp. Announces Electricity Supply Agreement with City of Medicine Hat <Icon type="right" /></Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/about">Hut 8 Mining Corp. Announces Appointment of Andrew Kiguel as President and Chief Executive Officer and Director <Icon type="right" /></Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/projects">Hut 8 Commences Trading on TSXV, Currently World’s Largest Publicly Traded Cryptocurrency Miner <Icon type="right" /></Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/investors">Hut 8 Mining, a way to play crypto, debuts on TSX Venture <Icon type="right" /></Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/news">Bitcoin battle brewing behind Hut 8 Mining’s Canadian TSX listing <Icon type="right" /></Link></Menu.Item>
                </Menu>
              </Col>
              <Col md={6}>
                <div className="menu-title">
                  Latest News
                </div>
                <div className="latest-news">
                  <Row>
                    <Col span={8} className="news-item">
                      <Link to="/"><img src={Thumbnail1} className="news-thumbnail" /></Link>
                    </Col>
                    <Col span={8} className="news-item">
                      <Link to="/"><img src={Thumbnail2} className="news-thumbnail" /></Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6}>
                <div className="menu-title">
                  Tsxv Exchange
                </div>
                <div className="tradingview-widget-container"> 
                  <div className="tradingview-widget-container__widget"></div>
                  <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/TSXV-HUT/" rel="noopener" target="_blank"><span className="blue-text">QUOTES</span></a> by TradingView</div>
                </div>
                <div className="social-media-icons">
                  <ul className="icons">
                    <li><Link to="https://www.facebook.com/Hut8-Mining-142674539780512/"><img src={FacebookIcon} /></Link></li>
                    <li><Link to="https://twitter.com/Hut8Mining"><img src={TwitterIcon} /></Link></li>
                    <li><Link to="https://www.linkedin.com/company/hut8mining/"><img src={LinkedinIcon} /></Link></li>
                    <li><Link to="https://www.instagram.com/hut8mining/"><img src={InstagramIcon} /></Link></li>
                  </ul>
                </div>
                <div className="contact-us">
                  <div className="menu-title">
                    Contact Us
                  </div>
                  <ul className="contact-list">
                    <li><Icon type="home" /> <span className="address"> 130 King Street West, Suite 1800, Toronto, Canada, M5X 1E3</span></li>
                    <li><Icon type="phone"/> 1-647-256-1992</li>
                    <li><Icon type="mail"/><Link to="mailto:https://www.linkedin.com/company/hut8mining/">info@hut8mining.com</Link></li>
                    <li><Icon type="global"/><Link to="https://www.hut8mining.com/">www.hut8mining.com</Link></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <Row gutter={48}>
              <Col span={24}>
                &copy; 2018 Hut 8 Mining - Establishing North America's Largest Bitcoin Mining Data Centers.
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

