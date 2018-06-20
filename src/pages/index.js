import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input } from 'antd'
import Link from 'gatsby-link'
import './index.scss';
import BitFury from '../images/index/bitfury.png';
import BlockBox from '../images/index/blockbox.png';
import InvestorAdvantage from '../images/index/investor-advantage.png'

const svgs = require.context('../images/index/cryptologos/', true, /\.svg$/)
const svgsObj = svgs.keys()
  .reduce((images, key) => {
    images[key] = svgs(key)
    return images
  }, {})

const newsContent = [];
const news = [
  {"day": "19", "month": "Mar", "title": "Hut 8 Mining Corp. Announces Electricity Supply Agreement with City of Medicine Hat", "content": "Vancouver, British Columbia, March 19, 2018 – Hut 8 Mining Corp. (TSXV: HUT) (“Hut 8” or the “Company”), is pleased to announce today."},
  {"day": "18", "month": "Mar", "title": "Hut 8 Mining Corp. Announces Appointment of Andrew Kiguel as President and Chief Executive Officer and Director", "content": "VANCOUVER, British Columbia–(BUSINESS WIRE)–Hut 8 Mining Corp. (TSXV:HUT) (“Hut 8” or the “Company”) is pleased to announce, subject to final acceptance by the.."},
  {"day": "10", "month": "Mar", "title": "Hut 8 Commences Trading on TSXV, Currently World’s Largest Publicly Traded Cryptocurrency Miner", "content": "VANCOUVER, British Columbia–(BUSINESS WIRE)–Mar. 6, 2018– Hut 8 Mining Corp.(TSX.V:HUT) (“Hut 8” or the “Company”) announced today that its common shares have begun trading.."},
];

for (let i = 0; i < news.length; i++) {
  newsContent.push (
    <Col className="news-item" md={8}>
      <Row gutter={48}>
        <Col md={4}>
          <div className="date">
            <div className="day">{ news[i].day }</div>
            <div className="month">{ news[i].month }</div>
          </div>
        </Col>
        <Col md={20}>
          <div className="content">
            <div className="title">
              { news[i].title }
            </div>
            <div className="details">
              <p>{ news[i].content }</p>
            </div>
            <div className="link">
              <Link to="/">Read More <Icon type="arrow-right" /></Link>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

const coinList = [];

const FormItem = Form.Item;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { coinMarketCapdata: [] }
  }

  loadData() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?limit=8')
      .then(response => response.json())
      .then(data => {
        this.setState({coinMarketCapdata: data.data })
    })
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.props.form.validateFields();
    this.loadData()
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

    const coinMarketFetchedData = this.state.coinMarketCapdata;

    const listCoins = Object.keys(coinMarketFetchedData).map((item, index) =>
      <li key={index}>
        <span><img src={ svgsObj[ "./" + coinMarketFetchedData[item].symbol.toLowerCase() + ".svg" ] } /></span>
        <span className="coin-name">{coinMarketFetchedData[item].name} ({ coinMarketFetchedData[item].symbol })</span>
        <span className="coin-price">${coinMarketFetchedData[item].quotes.USD.price}</span>
        <span className={ "coin-status" + coinMarketFetchedData[item].quotes.USD.percent_change_1h < 0 ? "coin-down": "coin-up"}>{coinMarketFetchedData[item].quotes.USD.percent_change_1h}%</span>
      </li>
    );

    return (
      <div>
        <section className="container hero-content">
          <h1 className="title">
            Global Cryptocurrency <br /> Mining Leadership
          </h1>
          <p className="sub-title">
            Establishing North America’s Largest Cryptocurrency Mining Data
            Centers.
          </p>
        </section>
        <section className="section-triangle">
          <div className="section-triangle-color" />
        </section>
        <section className="plain-section bitfury">
          <div className="container text-center">
            <h1>
              One Of The World’s Largest Publicly Traded Cryptocurrency Miner
            </h1>
            <h1 className="in-partnership">In Partnership with:</h1>
            <img src={BitFury} />
            <div className="description">
              <p>
                Exclusive Partnership between Hut 8 Mining and Bitfury Group{" "}
                <br /> Creates One of the Largest Cryptocurrency Mines in North
                America
              </p>
            </div>
            <Button type="primary">About Us</Button>
          </div>
        </section>
        <section className="hut8-video dark-section">
          <div className="container text-center">
            <h1 className="title">Watch Our Video</h1>
            <iframe
              width="1161"
              height="653"
              src="https://www.youtube.com/embed/O9ggH7-SbPs"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
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
                <p className="description">
                  Hut 8 Mining’s launch transaction involves the acquisition of
                  an initial state-of-the-art blockchain infrastructure facility
                  in Drumheller, Alberta from Bitfury Ltd., the world’s largest
                  cloud bitcoin mining company outside of China. The launch also
                  includes the assembly of our facility, which utilizes cutting
                  edge computing components and infrastructure design in order
                  to mine cryptocurrency around the clock.
                </p>
                <Button type="primary">Our Projects</Button>
              </Col>
            </Row>
          </div>
        </section>
        <section className="testimonials plain-section">
          <div className="container text-center">
            <h1 className="title">Global Leaders on Cryptocurrency</h1>
            <div className="title-divider align-center" />
            <Row gutter={16} type="flex" justify="center" align="center">
              <Col span={16}>
                <Carousel autoplay>
                  <div>
                    <p className="testimonial">
                      Bitcoin is exciting because it shows how cheap it can be.
                      Bitcoin is better than currency in that you don’t have to
                      be physically in the same place and, of course, for large
                      transactions, currency can get pretty inconvenient.
                    </p>
                    <p className="said-by">- Bill Gates</p>
                  </div>
                  <div>
                    <p className="testimonial">
                      Bitcoin is a remarkable cryptographic achievement… The
                      ability to create something which is not duplicable in the
                      digital world has enormous value…Lots of people will build
                      businesses on top of that.
                    </p>
                    <p className="said-by">- Eric Schmidt</p>
                  </div>
                  <div>
                    <p className="testimonial">
                      Bitcoin is exciting because it shows how cheap it can be.
                      Bitcoin is better than currency in that you don’t have to
                      be physically in the same place and, of course, for large
                      transactions, currency can get pretty inconvenient.
                    </p>
                    <p className="said-by">-Bill Gates</p>
                  </div>
                  <div>
                    <p className="testimonial">
                      Bitcoin is exciting because it shows how cheap it can be.
                      Bitcoin is better than currency in that you don’t have to
                      be physically in the same place and, of course, for large
                      transactions, currency can get pretty inconvenient.
                    </p>
                    <p className="said-by">-Bill Gates</p>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>
        </section>
        <section className="blockbox-innovation dark-section">
          <div className="container">
            <Row gutter={16}>
              <Col md={12}>
                <h1 className="title">Investor Advantage</h1>
                <p className="description">
                  Hut 8 Mining’s launch transaction involves the acquisition of
                  an initial state-of-the-art blockchain infrastructure facility
                  in Drumheller, Alberta from Bitfury Ltd., the world’s largest
                  cloud bitcoin mining company outside of China. The launch also
                  includes the assembly of our facility, which utilizes cutting
                  edge computing components and infrastructure design in order
                  to mine cryptocurrency around the clock.
                </p>
                <Button type="primary">Investors</Button>
              </Col>
              <Col md={12} className="text-center">
                <img src={InvestorAdvantage} />
              </Col>
            </Row>
          </div>
        </section>
        <section className="cryptocurrency-rates dark-section">
          <div className="container">
            <h3 className="title">Current Cryptocurrency Exchange Rates</h3>
            <div className="title-divider align-center" />
          </div>
          <Row gutter={16}>
            <Col md={24}>
              <ul className="coinList">
                {listCoins}
              </ul>
            </Col>
          </Row>
        </section>
        <section className="latest-news plain-section">
          <div className="container text-center">
            <h1 className="title">Latest News</h1>
            <div className="title-divider align-center" />
          </div>
          <div className="container">
            <Row gutter={16} className="news">
              { newsContent }
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
        <section className="first-quarter dark-section">
          <div className="container text-center">
            <Row gutter={16}>
              <Col md={24}>
                <h1 className="title">Hut 8 Mining’s First Quarter 2018 Report</h1>
                <p className="description">
                  Download our First Quarter Report to learn more about the opportunity.
                </p>
                <Button type="primary">DOWNLOAD</Button>
                <p className="description">
                  For copies of our financial statements and other continuous disclosure filings, please see Hut 8’s profile at SEDAR (System for Electronic Document Analysis and Retrieval) by clicking HERE.
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  }
}
export default Form.create()(IndexPage)


