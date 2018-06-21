import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input } from 'antd'
import Link from 'gatsby-link'
import './projects.scss';
import BlockBox from '../images/projects/blockbox.jpg';
import BlockBoxAC from '../images/projects/blockbox-ac.jpg';
import CuttingEdge from '../images/projects/cuttingedge.png';
import Innovative from '../images/projects/Innovative.png';
import Monitoring from '../images/projects/Monitoring.png';
import Resilience from '../images/projects/resilience.png';
import Quickstart from '../images/projects/quickstart.png';
import Portable from '../images/projects/portable.png';
const FormItem = Form.Item;
class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.form.validateFields();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
      },
    };
		return (
			<div>
			  <section className="container hero-content">
			    <h1 className="title">
			      Leading Blockchain <br /> Infrastructure Company 
			    </h1>
			    <p className="sub-title">
			      Leading Edge Data Centers Mining Cryptocurrencies Around The Clock.
			    </p>
			  </section>
        <section className="section-triangle">
          <div className="section-triangle-color" />
        </section>
			  <section className="state-of-the-art plain-section">
			    <div className="container">
			      <h1 className="title text-center">State Of The Art Mining Infrastructure</h1>
			      <div className="title-divider align-center" />
			      <h4 className="subtitle text-center">Bitfury Blockbox: Overview</h4>
				    <Row>
				    	<Col md={8}>
				    		<ul className="list">
				    			<li>The BlockBox AC (Air Cooled) is a containerized datacenter for bitcoin mining that substantially shortens the time required to start mining bitcoin on a commercial scale.</li>
				    			<li>Units are comprised of a standard 40’ High Cube freight container for ease of transportation and installation on sites with sufficient power and internet available.</li>
				    		</ul>
				    	</Col>
				    	<Col md={8}>
				    		<ul className="list">
				    			<li>Capacity of 1.1 MW of power supply per BlockBox.</li>
				    			<li>Require reliable internet connection with at least 2 Mbps and maximum 70 ms latency.</li>
				    			<li>Each unit includes 176 air-cooled mining servers that deliver a total hashrate of 7.5 PH/s from over 100,000 custom ASIC chips.</li>
				    		</ul>
				    	</Col>
				    	<Col md={8} className="text-center">
				    		<img src={BlockBox} />
				    	</Col>
				    </Row>
			    </div>
			  </section>
			  <section className="container blockbox-ac">
			    <Row>
			    	<img src={BlockBoxAC} className="blockbox-ac" />
			    </Row>
			  </section>
			  <section className="blockbox-benefits plain-section">
			    <div className="container">
			      <h1 className="title text-center">BlockBoxAC Key Benefits</h1>
			      <div className="title-divider align-center" />
		        <Row gutter={48} type="flex" justify="center" align="center">
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={Innovative}/>
		          	</div>
		          	<h4 className="heading">Innovation</h4>
		          	<p className="content">BlockBox AC is based on modern hardware and software manufactured by Bitfury. The basic configuration includes 176 Bitfury B8 servers. Each server houses six hashboards, each contains 96 specialized ASIC bitcoin mining chips. Each BlockBox has over 100,000 ASIC mining chips.</p>
		          </Col>
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={Monitoring} />
		          	</div>
		          	<h4 className="heading">Monitoring</h4>
		          	<p className="content">The Bitfury BlockBox AC is monitored on-site and remotely using built-in software and/or a mobile app, displaying key performance indicators.</p>
		          </Col>
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={CuttingEdge} />
		          	</div>
		          	<h4 className="heading">Cutting-Edge</h4>
		          	<p className="content">The BlockBox AC, both software and hardware components, can be easily upgraded.  The modular architecture of the Bitfury BlockBox AC and its Bitfury В8 servers allows it to keep in place more than the half of components when upgrading hardware to keep up with technology advances and ASIC chips progress.</p>
		          </Col>
		        </Row>
		        <Row gutter={48} type="flex" justify="center" align="center">
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={Quickstart}/>
		          	</div>
		          	<h4 className="heading">Quick Start</h4>
		          	<p className="content">It takes two days to install Bitfury BlockBox AC on a properly prepared site.  Once installed, the solution connects to the mining pool, and immediately starts to generate income.</p>
		          </Col>
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={Portable} />
		          	</div>
		          	<h4 className="heading">Modularity</h4>
		          	<p className="content">Bitfury BlockBox AC is a full-featured, self-contained solution for bitcoin mining, delivered in a 40’ High Cube freight container.  Once installed, no further investments of time, capital, or expertise are required for the solution maintenance.</p>
		          </Col>
		          <Col span={6}>
		          	<div className="icon-image">	
		          		<img src={CuttingEdge} />
		          	</div>
		          	<h4 className="heading">Resilience</h4>
		          	<p className="content">The Bitfury BlockBox AC solution is supported. Bitfury engineers and service partners ensure the equipment operates at top capacity. All solution components – from servers and their elements to power supply units and coolers – are replaceable.</p>
		          </Col>
		        </Row>
			    </div>
			  </section>
		    <section className="subscribe-news dark-section">
		      <div className="container">
		        <Row gutter={16} type="flex" justify="center" align="middle">
		          <Col md={4}>
		            <p className="title">Get the latest news</p>
		          </Col>
		          <Col md={16}>
		            <Form layout="inline" onSubmit={this.handleSubmit}>
		              <FormItem
		                wrapperCol={{ span: 24 }}
		                className="subscription-input"
		              >
		                {getFieldDecorator('email', {
		                  rules: [{ required: false, message: 'Please input your email!' }],
		                })(
		                  <Input placeholder="Email Address" size="large" />
		                )}
		              </FormItem>
		              <FormItem wrapperCol={{ span: 24 }}>
		                <Button
		                  size="large"
		                  type="default"
		                  htmlType="submit"
		                  className="subscription-btn"
		                >
		                  Submit
		                </Button>
		              </FormItem>
		            </Form>
		          </Col>
		        </Row>
		      </div>
		    </section>

        <section className="download-investors-package dark-section">
          <div className="container text-center">
            <Row gutter={16}>
              <Col md={24}>
                <h1 className="title">Download Your Investor Package</h1>
                <p className="description">
                  Download a PDF copy of the investor package and learn more about <br /> the opportunity, our exclusive partnership with Bitfury Group, and the innovative “BlockBoxAC” containerized data centers.
                </p>
                <Button type="primary">DOWNLOAD</Button> 
                <p className="links">View our <a href="https://www.hut8mining.com">HOME</a>, <a href="https://www.hut8mining.com/corporate">CORPORATE</a>, <a href="https://www.hut8mining.com/investors">INVESTORS</a>, and <a href="https://www.hut8mining.com/news/">NEWS</a> page,</p>
                <p>or <a href="https://www.hut8mining.com/contact/">CONTACT US</a> for more info.</p>
              </Col>
            </Row>
          </div>
        </section>
		  </div>
		);
	}
}

export default Form.create()(Projects)
