import React, { Component } from 'react'
import Link, { withPrefix }from 'gatsby-link'
import { Menu, Icon } from 'antd'
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
    this.setNavOpaque();
    let pathName = location.pathname || '';
  }

  setNavOpaque() {
    let pathName = location.pathname || '';
    console.log(pathName);
    let OpaqueNav = (pathName == "/news/") || (pathName == "/contact/") ? "opaque-true" : "";

    const mainHeader = document.querySelector(".main-header");
    const navHeight = document.querySelector(".navbar");

    if (OpaqueNav == "opaque-true") {
      mainHeader.classList.add("opaque-true");
      navHeight.classList.add("opaque-true");
    } else {
      mainHeader.classList.remove("opaque-true");
      navHeight.classList.remove("opaque-true");
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

  toggleMobileMenu() {
    this.setNavOpaque();
    this.state.isMobileMenuOpen ? this.setState({isMobileMenuOpen: false}) : this.setState({isMobileMenuOpen: true})
  }

  render() {
    const location = location || '';
    const pathName = location.pathname || '';
    const OpaqueNav = (pathName == "/news/") || (pathName == "/contact/") ? "opaque-true" : "";
    console.log(location);

    return (
      <div className={`navbar container unscrolled ${OpaqueNav}`}>
        <div className="logo">
          <Link to="/">
            <img src={LogoWhite} className="logo-white" />
            <img src={Logo} className="logo-plain" />
          </Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="nav"
        >
          <Menu.Item key="1" onClick={this.setNavOpaque}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2" onClick={this.setNavOpaque}><Link to="/corporate/">Corporate</Link></Menu.Item>
          <Menu.Item key="3" onClick={this.setNavOpaque}><Link to="/projects/">Projects</Link></Menu.Item>
          <Menu.Item key="4" onClick={this.setNavOpaque}><Link to="/investors/">Investors</Link></Menu.Item>
          <Menu.Item key="5" onClick={this.setNavOpaque}><Link to="/news/">News</Link></Menu.Item>
          <Menu.Item key="6" onClick={this.setNavOpaque}><Link to="/contact/">Contact</Link></Menu.Item>
        </Menu>
        <div className={['mobile-toggle-container', this.state.isMobileMenuOpen ? 'active' : ''].join(' ')}>
          <span className='mobile-toggle' onClick={() => this.toggleMobileMenu()} >
              {this.state.isMobileMenuOpen ? <Icon type="close" /> : <Icon type="menu-unfold" /> }
          </span>
        </div>
        <div className={['mobile-menu', this.state.isMobileMenuOpen ? 'active' : ''].join(' ')}>
          <div className='mobile-wrap'>
            <div className='nav-links'>
              <Link to="/" onClick={() => this.toggleMobileMenu()}>Home</Link>
              <Link to="/corporate/" onClick={() => this.toggleMobileMenu()}>Corporate</Link>
              <Link to="/projects/" onClick={() => this.toggleMobileMenu()}>Projects</Link>
              <Link to="/investors/" onClick={() => this.toggleMobileMenu()}>Investors</Link>
              <Link to="/news/" onClick={() => this.toggleMobileMenu()}>News</Link>
              <Link to="/contact/" onClick={() => this.toggleMobileMenu()}>Contact</Link>
            </div>
          </div>
        </div>
        <div className={['shape', this.state.isMobileMenuOpen ? 'active' : ''].join(' ')} />
      </div>
    )
  }
}

export default Navbar

