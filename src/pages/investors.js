import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input } from 'antd'
import Link from 'gatsby-link'
import './projects.scss';
import EarlyMovers from '../images/investors/earlymover.png';
import DataCenterInnovation from '../images/investors/datacenterinnovation.png';
import StrategicPartnership from '../images/investors/strategicpartnership.png';
import Partnerships from '../images/investors/partnership.png';
import DataCenterAssets from '../images/investors/datacenter-assets.png';
import BitcoinPopularity from '../images/investors/bitcoin-popularity.png';
import KeyMetrics from '../images/investors/keymetrics.png';

const FormItem = Form.Item;
class Investors extends Component {
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
            Maximizing Long-Term <br /> Shareholder Value 
          </h1>
          <p className="sub-title">
            Accelerating Development Of Blockchain Through Traditional Capital Markets.
          </p>
        </section>
        <section className="blockbox-benefits plain-section">
          <div className="container">
            <h1 className="title text-center">Why invest in Hut8 Mining Corp?</h1>
            <div className="title-divider align-center" />
            <Row gutter={48} type="flex" justify="center" align="center">
              <Col md={8} xs={24}>
                <div className="icon-image">  
                  <img src={EarlyMovers}/>
                </div>
                <h4 className="heading">Early Entry Advantage</h4>
                <p className="content">Among the first publicly traded companies offering investors access to blockchain technology and cryptocurrency mining data centers, backed by over a century of expertise in technology, finance, and business.</p>
              </Col>
              <Col md={8} xs={24}>
                <div className="icon-image">  
                  <img src={DataCenterInnovation} />
                </div>
                <h4 className="heading">Datacenter Innovation</h4>
                <p className="content">Each “BlockboxAC” data center is a full-featured, quick-start, and portable solution for cryptocurrency mining, is delivered in a 40’ high cube freight container allowing rapid scale. Once deployed, no further investments of time or capital is required.</p>
              </Col>
              <Col md={8} xs={24}>
                <div className="icon-image">  
                  <img src={StrategicPartnership} />
                </div>
                <h4 className="heading">Strategic Partnerships</h4>
                <p className="content">Exclusive partnership with Bitfury Group, the world’s largest cryptocurrency mining company outside of China, accelerates the deployment of data centers, secures long-term strategic IP, and maximizes long-term shareholder value.</p>
              </Col>
            </Row>
          </div>
        </section>
        <section className="hut8-video dark-section">
          <div className="container text-center">
            <h1 className="title">Bitcoin Mining Explained</h1>
            <iframe
              width="1161"
              height="653"
              src="https://www.youtube.com/embed/j5LHVGQClLE"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
        </section>

        <section className="what-they-said plain-section">
          <div className="container text-center">
            <h1 className="title">What our clients, investors, and partners say:</h1>
            <Row gutter={16} type="flex" justify="center" align="center">
              <Col span={16}>
                <Carousel autoplay>
                  <div>
                    <p className="testimonial">
                      We are excited to partner with Hut 8 to expand our activities in the strategic
                      North America market. We believe there is a tremendous opportunity to establish 
                      North America as one of the most important crypto-currency mining hubs in the world,” 
                      added Valery Vavilov, CEO of BitFury. 
                    </p>
                    <p className="said-by">- Valery Vavilov | Bitfury Group</p>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>
        </section>

        <section className="key-investment dark-section">
          <div className="container">
            <h1 className="title text-center">Key Investment Highlights</h1>
            <div className="title-divider align-center" />
            <Row gutter={48} type="flex" justify="center" align="center">
              <Col md={6} xs={24}>
                <div className="icon-image">  
                  <img src={Partnerships} className="svg-icon" />
                </div>
                <h4 className="heading">Bitfury Partnership</h4>
                <p className="content">

                </p>
              </Col>
              <Col md={6} xs={24}>
                <div className="icon-image">  
                  <img src={DataCenterAssets} className="svg-icon" />
                </div>
                <h4 className="heading">Datacenter Assets</h4>
                <p className="content"></p>

              </Col>
              <Col md={6} xs={24}>
                <div className="icon-image">  
                  <img src={BitcoinPopularity} className="svg-icon" />
                </div>
                <h4 className="heading">Bitcoin Popularity</h4>
                <p className="content">

                </p>
              </Col>
              <Col md={6} xs={24}>
                <div className="icon-image">  
                  <img src={KeyMetrics} className="svg-icon" />
                </div>
                <h4 className="heading">Key Metrics</h4>
                <p className="content">

                </p>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    )
  }
}

export default Form.create()(Investors)