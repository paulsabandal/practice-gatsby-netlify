import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input, Collapse } from 'antd'
import Link from 'gatsby-link'
import './investors.scss';
import EarlyMovers from '../images/investors/earlymover.png';
import DataCenterInnovation from '../images/investors/datacenterinnovation.png';
import StrategicPartnership from '../images/investors/strategicpartnership.png';
import Partnerships from '../images/investors/partnership.png';
import DataCenterAssets from '../images/investors/datacenter-assets.png';
import BitcoinPopularity from '../images/investors/bitcoin-popularity.png';
import KeyMetrics from '../images/investors/keymetrics.png';

const FormItem = Form.Item;
const Panel = Collapse.Panel;

let general =  [
  {
    q:'Why The Name "Hut8" Mining?',
    a: 'The name “Hut 8” refers to the place at Bletchley Park where Alan Turing created his world-changing Enigma decoding machine. His work saved millions of lives, transformed cryptography and laid the foundation for Blockchain. We thought the name was fitting for our enterprise.'
  },
  {
    q: "WHAT ARE HUT8 MINING'S ASSETS?",
    a: 'Hut8 Mining has the exclusive right to all Bitfury Group hardware and software solutions for cryptocurrency mining in North America. Our initial ASIC-based “containerized” data centers will be assembled by the cryptocurrency mining infrastructure experts at Bitfury Group. Being strategically located in Drumheller, Alberta where electricity costs are low due to an abundance of hydro power, as well as a year-round cool climate, allows Hut8 Mining to cut significant costs from overheated data centers. Our goal is to acquire and operate 67 data centers by end of 2018.'
  },
  {
    q: "WHAT'S THE BIG IDEA BEHIND HUT8 MINING?",
    a: 'Hut8 Mining’s goal is to become a world leader in cryptocurrency mining and connect cryptocurrency enthusiasts and traditional capital markets.'
  },
  {
    q: "WHAT IS YOUR RELATIONSHIP WITH BITFURY GROUP?",
    a: "Hut 8 Mining is the capital financing arm of the Bitfury Group in North America. Bitfury Group is a long-term strategic partner delivering Hut8 Mining with portable “containerized” datacenters used exclusively for cryptocurrency mining."
  },
  {
    q: "WHAT IS HUT8 MINING'S BUSINESS MODEL?",
    a: "Hut8 Mining Corp. is a cryptocurrency mining firm. We validate transactions on blockchain networks for rewards paid in coins. Everyday Hut8 Mining Corp. earns new crypto coins which it can monetize for revenue and cash flow. Hut8 Mining Corp. offers shareholders exposure to the operating margins from cryptocurrency mining plus a growing portfolio of coins."
  },
  {
    q: "HOW DOES HUT8 MINING SOURCE IT'S HARDWARE?",
    a: "Hut8 Mining signed a longterm strategic partnership with Bitfury Group, one of the largest Bitcoin miners in the world, to help acquire and operate portable “containerized” installations called BlockBoxAC. Bitfury manufactures their own proprietary ASIC chips, removing the reliance on third parties. These custom chips can be utilized with Immersion Cooling, providing significantly higher performance which translates to lower costs, less space and quieter operations."
  },
  {
    q: "How Does Hut8 Mining Secure It'S Coins? ", 
    a: "The mined bitcoin earned by Hut 8 will be held in custody by Xapo GmbH (“Xapo”)- known as the “Fort Knox”for Bitcoin and trusted custodian of cryptocurrencies for numerous financial instutions and high-net worth individuals. Hut8 Mining’s coins will be kept offline in Xapo’s vault using proprietary, offline, air-gapped and dual-key split authority cold storage system."
  },
  {
    q: "WHAT IS HUT8 MINING'S POSITION ON SELLING VERSUS KEEPING COINS?",
    a: "Hut8 Mining will be actively mining Bitcoin from our data centers and are implementing an investment strategy involving liquidation of a portion of mined coins as a ratio of future forecasted expenses, while holding the remainder as inventory to benefit from price appreciation & volatility."
  },
  {
    q: "WHAT ARE THE KEYS TO BITCOIN MINING SUCCESS?",
    a: "Cryptocurrency mining is extremely competitive, where efficiencies of scale are the keys to success. \n  \n The largest costs to cryptocurrency mining are electricity costs and hardware. Therefore a cost-efficient and reliable source of electricity for your hardware is necessary to maintain profitability. In addition, fast and reliable internet access, as well as a cool climate (such as Alberta), lower costs. \n  \n Global expertise in scaling cryptocurrency mining operations is limited. Thus, our strategic alignment with Bitfury, operating since 2011 and the largest Bitcoin miners outside of China, allows Hut8 Mining to de-risk outcomes and maximize revenues for our investors & shareholders."
  },
  {
    q: "WHAT ARE HUT8 MINING'S BIGGEST RISKS?",
    a: "For full information, investors should refer to the risk disclosures filed under Hut8 Mining’s profile at www.sedar.com. Some of the risks include volatility in cryptocurrency markets, flaws in cryptocurrency code and hacking, fraud or security failures of the cryptocurrency exchanges on which our coins are exchanged, increased competition in the mining space, mining margins potentially becoming uneconomic, and obsolescence of hardware and equipment in our facilities."
  },
  {
    q: "WHO IS BITFURY GROUP?",
    a: "Bitfury is the leading full-service blockchain technology company providing hardware and software solutions to securely move assets across the blockchain."
  },
  {
    q: "WHAT CRYPTOCURRENCIES DOES HUT8 CURRENTLY MINE?",
    a: "Currently, Hut 8 Mining is focused on ASIC chips which are used to mine Bitcoin, however, the company plans to roll out 20 megawatts of GPU chips by the end of 2018 to mine other “alt-coins”."
  },
  {
    q: "What are Hut8 Mining's Next Steps?",
    a: "The first will be to establish a market presence. We need to engage with the investment community as well as the blockchain community to tell our story, gain important partners, and further develop our team. Second, Hut8 Mining will continue to strengthen its security and risk management processes. Finally, we intend to rapidly grow the business through further acquisitions and development projects."
  },
  {
    q: "HOW LONG WILL HUT8 MINING'S HARDWARE LAST?",
    a: "Hut8 Mining’s BlockBoxAC containerized data centers will last many years. All our data centers are constructed of modular components so that any new chip technology (7 nanometers) can be deployed on the existing hardware stack. This, along with Bitfury’s proprietary software for large-scale mining, monitors hash rates, server temperatures, and energy consumption, allowing Hut 8 Mining engineers to quickly isolate problematic containers, therefore maximizing longevity and longterm profit."
  },
  {
    q: "WHY IS HUT8 MINING GOING PUBLIC ON THE TSX?",
    a: "Being a first mover to list on a major public exchange is key part of Hut8 Mining’s strategy. It provides equity shareholders a way of getting exposure to the crypto world through a traditional investment vehicle. The capital markets have very few options for investors to participate in the sector, and Hut8 Mining provides a unique opportunity to do so. Public markets are a huge untapped opportunity to finance the growth of the blockchain sector. We chose the TSX in particular because it is a flexible capital formation platform, and at the same time, is one of the most accessible stock exchanges globally."
  },
  

]

let general_faqs = [];

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

    general_faqs = general.map((general, i) =>
      <Collapse bordered={false}>
        <Panel header={general.q}  key={i}>
          {general.a}
        </Panel>
      </Collapse>
    )

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
        <section className="section-triangle">
          <div className="section-triangle-color" />
        </section>
        <section className="why-invest-benefits plain-section">
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
                <div className="icon-title">
                  <div className="icon-image">  
                    <img src={Partnerships} className="svg-icon" />
                  </div>
                  <h3 className="heading">Bitfury Partnership</h3>
                </div>
                <p className="content">
                  <ul>
                    <li class="li1"><span class="s2"><strong>Bitfury</strong> is one of the <strong>largest bitcoin miners in the world outside of China </strong></span></li>
                    <li class="li1"><span class="s2">Owns, co-owns and services datacenters of <strong>58 MW in Alberta plus 114 MW globally</strong></span></li>
                    <li class="li1"><span class="s2">Manufactures their own <strong>proprietary ASIC chips</strong></span></li>
                    <li class="li1"><span class="s2">Bitfury delivers exclusively to <strong>Hut 8 a bitcoin mining</strong> solution </span></li>
                  </ul>
                </p>
              </Col>
              <Col md={6} xs={24}>
                <div className="icon-title">
                  <div className="icon-image">  
                    <img src={DataCenterAssets} className="svg-icon" />
                  </div>
                  <h3 className="heading">Datacenter Assets</h3>
                </div>
                <p className="content">
                  <ul>
                    <li class="li1"><span class="s2">No facility retrofit costs required: <strong>datacenters are ready-to-use and portable</strong></span></li>
                    <li class="li1"><strong><span class="s2">Low electricity prices: historical average of $0.03-$0.035 / kWh</span></strong></li>
                    <li class="li1"><span class="s2">Hut 8 intends to scale rapidly with installed capacity expected to reach <strong>74 MW in 2018</strong></span></li>
                    <li>Near future projects in <strong>Georgia, and Quebec</strong></li>
                  </ul>
                </p>
              </Col>
              <Col md={6} xs={24}>
                <div className="icon-title">
                  <div className="icon-image">  
                    <img src={BitcoinPopularity} className="svg-icon" />
                  </div>
                  <h3 className="heading">Bitcoin Popularity</h3>
                </div>
                <p className="content">
                  <ul>
                    <li class="li1"><span class="s2"><b>Scarcity Factor</b>: 21 million circulation limit on coins</span></li>
                    <li class="li1"><span class="s2"><b>Predictability:</b> Mining rates predetermined. Currently 12.5 bitcoin per block plus transaction fees that grow over time </span></li>
                    <li class="li1"><span class="s2"><b>Security: </b>Proof of Work via SHA 256; no migration expected to Proof of Stake</span></li>
                    <li class="li1"><span class="s2"><b>Scale:</b> Market moving from hobbyists to scale driven utilities</span></li>
                  </ul>
                </p>
              </Col>
              <Col md={6} xs={24}>
                <div className="icon-title">
                  <div className="icon-image">  
                    <img src={KeyMetrics} className="svg-icon" />
                  </div>
                  <h3 className="heading">Key Metrics</h3>
                </div>
                <p className="content">
                  <ul>
                    <li class="li1"><span class="s2"><b>Completed acquisition of 22 datacenters </b>(7 operating, 15 ordered) with Phase II to represent an additional 45 datacenters (10 operating, 35 ordered) to achieve total 503 PH/s with electrical capacity of 74 MW</span></li>
                    <li class="li1"><span class="s2">Illustrative revenue and gross mining margin potential of US$[•] million and US$[•] million, respectively</span></li>
                    <li class="li1"><span class="s2"><b>Post-money valuation of $7.6 million / MW</b></span></li>
                  </ul>
                </p>
              </Col>
            </Row>
          </div>
        </section>

        <section className="faq plain-section">
          <div className="container">
            <h1 className="title text-center">Frequently Asked Questions</h1>
            <div className="title-divider align-center" />
              <Row gutter={48} type="flex" className="faq-list">
                <Col span={12}> 
                  {general_faqs}
                </Col>
                <Col span={12}> 
                  <div className="link-to-contact">
                    <h3>Have questions?</h3>
                    <p>Didn’t find answers to a particular question? Feel free to reach out!</p>
                    <Button size="small" type="primary" htmlType="submit" href="/" className="contact-us-btn"
                      > Contact Us </Button>
                  </div>
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

export default Form.create()(Investors)