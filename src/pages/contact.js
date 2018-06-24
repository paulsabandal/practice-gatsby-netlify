import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input, Collapse } from 'antd'
import Link from 'gatsby-link'
import './news.scss';
import MedicineHat from '../images/news/medicine-hat.jpg';

const FormItem = Form.Item;

class Contact extends Component {
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
        <section className="news-list no-particles plain-section">
          <div className="container">
            <Row gutter={16}>
            	<Col md={12}>
			          <div className="date">
			            <div className="day">Mar</div>
			            <div className="month">24</div>
			          </div>
            	</Col>
              <Col md={12}>
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
	              </div>
              </Col>
            </Row>
          </div>
        </section>
		  </div>
		)
	}
}

export default Form.create()(Contact)
