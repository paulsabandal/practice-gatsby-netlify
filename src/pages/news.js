import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input, Collapse, Menu } from 'antd'
import Link from 'gatsby-link'
import './news.scss';
import MedicineHat from '../images/news/medicine-hat.jpg';

const FormItem = Form.Item;

class News extends Component {
  constructor(props) {
    super(props);
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
        <section className="news-list plain-section">
          <div className="container">
            <Row gutter={64}>
              <Col lg={18} md={24}>
                <Row gutter={48}>
                	<Col md={4} sm={4} className="first-column">
      		          <div className="date">
      		            <div className="day">MAR</div>
      		            <div className="month">24</div>
      		          </div>
                	</Col>
                  <Col md={20} sm={20} className="first-column">
                  	<div className="news-container">
                      <div className="image">
                      	<img src={MedicineHat} />
                      </div>
                      <h3 className="title">
                      	Hut 8 Mining Corp. Announces Electricity Supply Agreement with City of Medicine Hat 
                      </h3>
                      <p className="content">
                      	Vancouver, British Columbia, March 19, 2018 – Hut 8 Mining Corp. (TSXV: HUT) (“Hut 8” or the “Company”), is pleased to announce today that it has entered into definitive agreements with the City of Medicine Hat (“CMH”) for the supply of 42 MW of electric energy and the lease of... <a href="">read more →</a>
                      </p>
                      <ul className="entry-meta">
                        <li class="meta-date">March 19, 2018</li>
                        <li class="meta-author">
                          <a href="https://www.hut8mining.com/author/hut8mining/" original-title="View all posts by hut8mining">hut8mining</a>
                        </li>
                        <li class="meta-category">
                          <a href="https://www.hut8mining.com/category/press-release/" rel="category tag" original-title="">Press Release</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Row gutter={48}>
                  <Col md={4} className="first-column">
                    <div className="date">
                      <div className="day">MAR</div>
                      <div className="month">24</div>
                    </div>
                  </Col>
                  <Col md={20} className="first-column">
                    <div className="news-container">
                      <div className="image">
                        <img src={MedicineHat} />
                      </div>
                      <h3 className="title">
                        Hut 8 Mining Corp. Announces Electricity Supply Agreement with City of Medicine Hat 
                      </h3>
                      <p className="content">
                        Vancouver, British Columbia, March 19, 2018 – Hut 8 Mining Corp. (TSXV: HUT) (“Hut 8” or the “Company”), is pleased to announce today that it has entered into definitive agreements with the City of Medicine Hat (“CMH”) for the supply of 42 MW of electric energy and the lease of... <a href="">read more →</a>
                      </p>
                      <ul className="entry-meta">
                        <li class="meta-date">March 19, 2018</li>
                        <li class="meta-author">
                          <a href="https://www.hut8mining.com/author/hut8mining/" original-title="View all posts by hut8mining">hut8mining</a>
                        </li>
                        <li class="meta-category">
                          <a href="https://www.hut8mining.com/category/press-release/" rel="category tag" original-title="">Press Release</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <Row gutter={48}>
                  <Col md={4} className="first-column">
                    <div className="date">
                      <div className="day">MAR</div>
                      <div className="month">24</div>
                    </div>
                  </Col>
                  <Col md={20} className="first-column">
                    <div className="news-container">
                      <div className="image">
                        <img src={MedicineHat} />
                      </div>
                      <h3 className="title">
                        Hut 8 Mining Corp. Announces Electricity Supply Agreement with City of Medicine Hat 
                      </h3>
                      <p className="content">
                        Vancouver, British Columbia, March 19, 2018 – Hut 8 Mining Corp. (TSXV: HUT) (“Hut 8” or the “Company”), is pleased to announce today that it has entered into definitive agreements with the City of Medicine Hat (“CMH”) for the supply of 42 MW of electric energy and the lease of... <a href="">read more →</a>
                      </p>
                      <ul className="entry-meta">
                        <li class="meta-date">March 19, 2018</li>
                        <li class="meta-author">
                          <a href="https://www.hut8mining.com/author/hut8mining/" original-title="View all posts by hut8mining">hut8mining</a>
                        </li>
                        <li class="meta-category">
                          <a href="https://www.hut8mining.com/category/press-release/" rel="category tag" original-title="">Press Release</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>


              <Col lg={6} md={24} className="first-column newsletter-subscription">
                <div className="menu-title">
                  Newsletter
                </div>
                <Form layout="" onSubmit={this.handleSubmit}>
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
                      type="primary"
                      htmlType="submit"
                      className="subscription-btn"
                    >
                      Submit
                    </Button>
                  </FormItem>
                </Form>
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
            </Row>
          </div>
        </section>
		  </div>
		)
	}
}

export default Form.create()(News)
