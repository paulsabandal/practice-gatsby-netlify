import React from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input } from 'antd'
import Link from 'gatsby-link'
import './corporate.scss';
import Numeral01 from '../images/corporate/8-Numeral-01.png'
import Numeral02 from '../images/corporate/8-Numeral-02.png'
import Numeral04 from '../images/corporate/8-Numeral-04.png'
import Computer01 from '../images/corporate/Computer-01.png'
import Computer02 from '../images/corporate/Computer-02.png'
import Decoder01 from '../images/corporate/Decoder-01.png'
import BitfuryLogo from '../images/corporate/bitfury.png'


const Corporate = () => (
	<div>
	  <section className="container hero-content">
	    <h1 className="title">
	      Finance & Technology <br /> Industry Experts 
	    </h1>
	    <p className="sub-title">
	      Global Business, Technology and Financial Expertise.
	    </p>
	  </section>
	  <section className="what-is-hut8 plain-section">
	    <div className="container text-center">
	      <h1 className="title">What’s behind the name “Hut 8”?</h1>
	      <div className="title-divider align-center" />
	      <p className="fixed-paragraph-width">The name “Hut 8” refers to the building at Bletchley Park where Alan Turing created his world-changing Enigma decoding machine. His work saved millions of lives, transformed cryptography and laid the foundation for Blockchain.</p>
	    </div>
	  </section>
	  <section className="blank-video dark-section">
	    <div className="container text-center">
	    </div>
	  </section>
	  <section className="about-hut8 plain-section">
	    <div className="container text-center">
	      <h1 className="title">About Hut 8 Mining Corp.</h1>
	      <div className="title-divider align-center" />
	      <p className="fixed-paragraph-width">Hut 8 Mining is a cryptocurrency mining and Blockchain infrastructure company established through an exclusive partnership with Bitfury, one of the world’s leading Blockchain technology companies. Hut8 Mining currently owns bitcoin mining datacenters representing 24.2 MW and 165 PH/s that are in operation or under construction, with a pipeline of acquisition and development opportunities across North America. Hut 8 Mining is led by a team of industry experts to provide investors with exposure to Blockchain processing infrastructure and technology along with underlying cryptocurrency rewards and revenue from transaction fees.</p>
	    </div>
	  </section>
	  <section className="about-pictures plain-section">
	  	<Row>
	  		<Col span={8}>
	  			<img src={Numeral02} />
	  		</Col>
	  		<Col span={8}>
	  			<img src={Decoder01} />
	  		</Col>
	  		<Col span={8}>
	  			<img src={Numeral01} />
	  		</Col>
	  	</Row>
	  	<Row>
	  		<Col span={8}>
	  			<img src={Computer02} />
	  		</Col>
	  		<Col span={8}>
	  			<img src={Numeral04} />
	  		</Col>
	  		<Col span={8}>
	  			<img src={Computer01} />
	  		</Col>
	  	</Row>
	  </section>

	  <section className="about-count plain-section">
  	  <div className="container text-center">
		  	<Row>
		  		<Col span={8}>
		  			<h2>57 <br /> <small>Datacenter</small></h2>
		  		</Col>
		  		<Col span={8}>
		  			<h2>62 <br /> <small>Megawatts</small></h2>
		  		</Col>
		  		<Col span={8}>
		  			<h2>428 <br /> <small>PH/S</small></h2>
		  		</Col>
		  	</Row>
  		</div>
	  </section>

	  <section className="about-bitfury-group dark-section">
	    <div className="container text-center">
	      <h1 className="title">About Bitfury Group</h1>
	      <div className="title-divider align-center" />
	      	<img src={BitfuryLogo} className="bitfury-logo" />
			  	<Row>
			  		<Col span={24}>
			  			<p className="description">
			  				The Bitfury Group develops and delivers both the software and the hardware solutions necessary for businesses, governments, organizations and individuals to securely move an asset across the Blockchain. The expertise of The Bitfury Group ensures successful, easy, fast, secure and cost-effective connectivity to the Blockchain. The Bitfury Group has offices in San Francisco, Washington D.C., Hong Kong, London and Amsterdam, and data center operations in Iceland and the Republic of Georgia.
			  			</p>
			  		</Col>
			  	</Row>
			  	 <h2 className="title sub-title">“We believe the world is changing and we are <br /> on the front lines of this groundbreaking evolution.”</h2>
	  		</div>
	  </section>
  </div>
)

export default Corporate
