import React from 'react'
import { Button, Row, Col, Carousel } from 'antd'
import Link from 'gatsby-link'
import './index.scss';
import BitFury from '../images/index/bitfury.png';
import BlockBox from '../images/index/blockbox.png';

const IndexPage = () => (
  <div>
  	<section className="container hero-content">
  		<h1 className="title"> Global Cryptocurrency <br /> Mining Leadership </h1>
  		<p className="sub-title">Establishing North America’s Largest Cryptocurrency Mining Data Centers.</p>
  	</section>
		<section className="section-triangle">
			<div className="section-triangle-color">
			</div>
		</section>

  	<section className="plain-section bitfury">
  		<div className="container text-center">
		    <h1>One Of The World’s Largest Publicly Traded Cryptocurrency Miner</h1>
		    <h1 className="in-partnership">In Partnership with:</h1>
		    <img src={BitFury} />
		    <div className="description">
		    	<p>Exclusive Partnership between Hut 8 Mining and Bitfury Group <br /> Creates One of the Largest Cryptocurrency Mines in North America</p>
		    </div>
		    <Button type="primary">About Us</Button>
	    </div>	
  	</section>

  	<section className="hut8-video dark-section">
  		<div className="container text-center">
		    <h1 className="title">Watch Our Video</h1>
		    <iframe width="1161" height="653" src="https://www.youtube.com/embed/O9ggH7-SbPs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	    </div>	
  	</section>

  	<section className="blockbox-innovation dark-section">
  		<div className="container">
  			<Row gutter={16}>
  				<Col md={12}>
  					<img src={BlockBox} />
  				</Col>
  				<Col md={12}>
  					<h1 className="title">Blockbox Innovation</h1>
  					<p className="description">Hut 8 Mining’s launch transaction involves the acquisition of an initial state-of-the-art blockchain infrastructure facility in Drumheller, Alberta from Bitfury Ltd., the world’s largest cloud bitcoin mining company outside of China. The launch also includes the assembly of our facility, which utilizes cutting edge computing components and infrastructure design in order to mine cryptocurrency around the clock.</p>
  					<Button type="primary">Our Projects</Button>
  				</Col>
  			</Row>
	    </div>	
  	</section>

  	<section className="testimonials plain-section">
  		<div className="container text-center">
		  	<h1 className="title">Global Leaders on Cryptocurrency</h1>
		  	<div className="title-divider align-center"></div>
		  	<Row gutter={16} type="flex" justify="center" align="center">
			  	<Col span={16}>
						<Carousel autoplay>
							<div>
								<p className="testimonial">Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.</p>
								<p className="said-by">- Bill Gates</p>
							</div>
							<div>
								<p className="testimonial">Bitcoin is a remarkable cryptographic achievement… The ability to create something which is not duplicable in the digital world has enormous value…Lots of people will build businesses on top of that.</p>
								<p className="said-by">- Eric Schmidt</p>
							</div>
							<div>
								<p className="testimonial">Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.</p>
								<p className="said-by">-Bill Gates</p>
							</div>
							<div>
								<p className="testimonial">Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don’t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.</p>
								<p className="said-by">-Bill Gates</p>
							</div>
						</Carousel>
					</Col>
				</Row>
	    </div>	
  	</section>
  </div>
)

export default IndexPage
