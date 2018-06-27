import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input, Collapse } from 'antd'
import Link from 'gatsby-link'
import './contact.scss';
import MedicineHat from '../images/news/medicine-hat.jpg';

const FormItem = Form.Item;
const { TextArea } = Input;
 
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
        <section className="contact no-particles plain-section">
          <div className="container">
            <Row gutter={64}>
            	<Col md={12}>
              	<div className="contact-heading">
	            		<h3 className="heading">Contact Us</h3>
	            		<p className="description">Have a question about Hut8 Mining? Curious about what we do, or just feel like saying hello? Don’t hesitate to drop us a line! We’d love to hear from you.</p>
	            	</div>

					      <Form onSubmit={this.handleSubmit} className="contact-form">
					        <FormItem
					          {...formItemLayout}
					          label="Your Name (Required)"
					        >
					          {getFieldDecorator('name', {
					            rules: [{
					              type: 'name', message: 'The input is not valid Name!',
					            }, {
					              required: true, message: 'Please input your Name!',
					            }],
					          })(
					            <Input size="large" />
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="Your Email"
					        >
					          {getFieldDecorator('email', {
					            rules: [{
					              type: 'email', message: 'The input is not valid E-mail!',
					            }, {
					              required: true, message: 'Please input your E-mail!',
					            }],
					          })(
					            <Input size="large" />
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="Subject"
					        >
					          {getFieldDecorator('subject', {
					          })(
					            <Input size="large" />
					          )}
					        </FormItem>
					        <FormItem
					          {...formItemLayout}
					          label="Your Email"
					        >
					          {getFieldDecorator('textarea', {
					            rules: [{
					              type: 'email', message: 'The input is not valid E-mail!',
					            }, {
					              required: true, message: 'Please input your E-mail!',
					            }],
					          })(
					            <TextArea row={4} />
					          )}
					        </FormItem>
					      </Form>
            	</Col>
              <Col md={12}>
              	<div className="contact-heading">
	            		<h3 className="heading">Have Questions?</h3>
	            		<p className="description">Looking for quick answers? Most questions can be answered by visiting our <Link to="/investors"> FAQ section. </Link></p>
            		</div>
              	<div className="contact-heading">
	            		<h3 className="heading">Get in Touch</h3>
	            		<p className="description">
		            		The Exchange Tower<br />
		            		130 King Street West, Suite 1800<br />
		            		Toronto, Ontario, Canada<br />
		            		M5X 1E3.<br />
	            		</p>
	            		<p className="description">
	                  <ul className="contact-list">
	                    <li><Icon type="phone"/> 1-647-256-1992</li>
	                    <li><Icon type="mail"/><Link to="mailto:https://www.linkedin.com/company/hut8mining/">info@hut8mining.com</Link></li>
	                  </ul>
	            		</p>
	            		<p className="description">
	            			Office Hours: <br />
	            			Monday – Friday: 9am to 5pm EDT
	            		</p>
            		</div>
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
		  </div>
		)
	}
}

export default Form.create()(Contact)
