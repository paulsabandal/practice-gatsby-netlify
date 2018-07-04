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
            	<Col md={12} sm={24} xs={24}>
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
					          label="Your Message"
					        >
					          {getFieldDecorator('textarea', {
					            rules: [{
					              type: 'email', message: 'The input is not valid E-mail!',
					            }, {
					              required: true, message: 'Please input your E-mail!',
					            }],
					          })(
					            <TextArea />
					          )}
					        </FormItem>
					        <FormItem>
					        	<Button size="small" type="primary" htmlType="submit" href="/" className="subscription-btn">Submit</Button>
					        </FormItem>
					      </Form>
            	</Col>
              <Col md={12} sm={24} xs={24}>
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
        <section className="maps-section plain-section">
        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.995883894063!2d-79.3852666840962!3d43.648253979121506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d28bb3477b%3A0x703bada3cab80755!2sThe+PATH+-+Exchange+Tower%2C+Toronto%2C+ON%2C+Canada!5e0!3m2!1sen!2sph!4v1530209585892" height="450" frameborder="0" allowfullscreen></iframe>
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
