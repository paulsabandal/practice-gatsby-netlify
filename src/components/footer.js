import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Menu } from 'antd'
import LogoWhite from '../images/logo/logo-white.png';
import Logo from '../images/logo/logo.png';
import './navbar.scss'

class Footer extends Component {
  render() {
    return (
      <div className="navbar container unscrolled">
        <div className="logo">
          <img src={LogoWhite} className="logo-white" />
          <img src={Logo} className="logo-plain" />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className="nav"
        >
          <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/about">Corporate</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/projects">Projects</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/investors">Investors</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/news">News</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/contact">Contact</Link></Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Footer

