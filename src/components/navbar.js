import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu } from 'antd'
import LogoWhite from '../images/logo/logo-white.png';
import Logo from '../images/logo/logo.png';
import './navbar.scss'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { isMobileMenuOpen: false, hasHash: false, isOpaqueNav: false};
    this.handleScroll = this.handleScroll.bind(this);
    this.setNavOpaque = this.setNavOpaque.bind(this);
  }

  componentDidMount() {
    // add listener for scroll event
    document.addEventListener("scroll", this.handleScroll, false);
    // document.addEventListener('scroll', this.addMenuActiveState, false)
  }

  setNavOpaque() {
    let pathName = window.location.pathname;
    let OpaqueNav = (pathName == "/news") || (pathName == "/contact") ? "opaque-true" : "";

    const mainHeader = document.querySelector(".main-header");
    
    if (OpaqueNav == "opaque-true") {
      mainHeader.classList.add("opaque-true");
    } else {
      mainHeader.classList.remove("opaque-true");
    }

    this.setState({ isOpaqueNav: OpaqueNav, })
  }

  handleScroll() {
    const navHeight = document.querySelector(".navbar");
    const headerHeight = document.querySelector(".main-header");

    if (window.scrollY > 200) {
      navHeight.classList.add("scrolled");
      navHeight.classList.remove("unscrolled");
      headerHeight.classList.add("scrolled");
      headerHeight.classList.remove("unscrolled");
    } else {
      navHeight.classList.add("unscrolled");
      navHeight.classList.remove("scrolled");
      headerHeight.classList.add("unscrolled");
      headerHeight.classList.remove("scrolled");
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll, false);
  }

  render() {
    
    return (
      <div className={`navbar container unscrolled ${this.state.isOpaqueNav}`}>
        <div className="logo">
          <img src={LogoWhite} className="logo-white" />
          <img src={Logo} className="logo-plain" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="nav"
        >
          <Menu.Item key="1" onClick={this.setNavOpaque}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2" onClick={this.setNavOpaque}><Link to="/corporate">Corporate</Link></Menu.Item>
          <Menu.Item key="3" onClick={this.setNavOpaque}><Link to="/projects">Projects</Link></Menu.Item>
          <Menu.Item key="4" onClick={this.setNavOpaque}><Link to="/investors">Investors</Link></Menu.Item>
          <Menu.Item key="5" onClick={this.setNavOpaque}><Link to="/news">News</Link></Menu.Item>
          <Menu.Item key="6" onClick={this.setNavOpaque}><Link to="/contact">Contact</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Navbar

