import React, { Component } from 'react'
import { Button, Row, Col, Carousel, Icon, Form, Input } from 'antd'
import Link from 'gatsby-link'
import Fade from 'react-reveal/Fade';
import TextScramble from '../components/text-scrambler'
import './corporate.scss';
import Numeral01 from '../images/corporate/8-Numeral-01.png'
import Numeral02 from '../images/corporate/8-Numeral-02.png'
import Numeral04 from '../images/corporate/8-Numeral-04.png'
import Computer01 from '../images/corporate/Computer-01.png'
import Computer02 from '../images/corporate/Computer-02.png'
import Decoder01 from '../images/corporate/Decoder-01.png'
import BitfuryLogo from '../images/corporate/bitfury.png'
import Andrew from '../images/corporate/andrew.jpg'
import Kyle from '../images/corporate/kyle.jpg'
import Bill from '../images/corporate/bill.jpg'
import Michael from '../images/corporate/michael.jpg'
import Jeffrey from '../images/corporate/jeffrey.png'
import Valery from '../images/corporate/valery.png'
import Gerri from '../images/corporate/gerri.jpg'
import Dennis from '../images/corporate/dennis.jpg'

const FormItem = Form.Item;

let teamMembers = [];
let members = [ 
	{ 'photo': Bill, 'name': 'BILL TAI', 'position': 'CEO', 'bio': "Bill Tai is Chairman of Hut 8 Mining, and serves on the Board of BitFury, and Treasure Data where he is co-founder and Chairman. Trained as a semiconductor chip designer, he holds a BSEE with Honors from University of Illinois and an MBA from Harvard. Operationally, he founded data center company iAsiaWorks (IPO via Goldman Sachs & Morgan Stanley) and networking protocol company IPinfusion (Tokyo:4813) as Chairman. He has served as Board Director of 7 publicly listed companies that grew from startups he funded at their formative stages. He is a catalyst and Board Advisor to Airswap and Power Ledger in the crypto segment and was among the earliest backers of Canva, Color Genomics, Tweetdeck/Twitter, Wish.com and  Zoom Video." },
	{ 'photo': Michael, 'name': 'MICHAEL NOVOGRATZ', 'position': 'CEO', 'bio': "CEO of Galaxy Investment Partners. He was formerly a principal and a member of the board of directors of Fortress Investment Group LLC and Chief Investment Officer of the Fortress Macro Fund. Mr. Novogratz joined Fortress in 2002 after spending 11 years at Goldman Sachs, where he was elected partner in 1998. Mr. Novogratz received an AB from Princeton University in Economics, and served as a helicopter pilot in the US Army." },
	{ 'photo': Jeffrey, 'name': 'MICHAEL NOVOGRATZ', 'position': 'CEO', 'bio': "20+ years’ experience in rapidly growing advanced mining environments as Corporate Secretary, Chief Financial Officer and Director for 20+ public mining companies with market capitalization of over $3 billion, covering projects in Canada, USA, Mexico, Colombia, RSA, and China. Holds a Bachelor of Commerce from the University of British Columbia and is a Chartered Accountant." },
	{ 'photo': Valery, 'name': 'VALERY VAVILOV', 'position': 'CEO', 'bio': "Original founding member of Bitfury. Assumed the role of Bitfury CEO in 2011. Seasoned entrepreneur with an eye for market opportunity and over 15 years of experience in information technology and business management. Proven track record in building successful companies and high-performing teams. Prior to that, held numerous technology and business leadership positions at 212.ua, Advideo.ua, Allroll and Uzdevumi. MS Riga Transport & Telecommunication University." },
	{ 'photo': Gerri, 'name': 'GERRI SINCLAIR', 'position': 'CEO', 'bio': "Kensington Managing Director where she serves as a member of the firm’s Investment Committee for the venture capital funds. She has served on several government and corporate boards including Telus Corporation, BC Telecom, and Ballard Power. Gerri holds a Ph.D. in Renaissance Drama as well as an honorary Doctor of Science in Computing Science from the University of British Columbia." },
	{ 'photo': Dennis, 'name': 'DENNIS MILLS', 'position': 'CEO', 'bio': "Dennis Mills is the Chief Executive Officer of Toronto Partners Inc. Previously, Mr. Mills served as Vice Chairman and Chief Executive Officer of MI Developments Inc. which is one the largest shareholder and operator of thoroughbred racetracks in the United States of America. Mr. Mills served as a Member of Parliament in Canada’s federal parliament from 1988 to 2004. While a Member of Parliament, Mr. Mills was Parliamentary Secretary to the Minister of Industry from 1993 to 1996, the Parliamentary Secretary to the Minister of Consumer and Corporate Affairs from 1993 to 1995 and the Chair of the Committee studying the Industry of sport in Canada." },
]


for (let i = 0; i < members.length; i++) {
  teamMembers.push (
		<Col lg={8} md={8} sm={24} xs={24} key={i}>
			<Fade bottom>
				<div className="member-thumbnail">
	  			<div className="photo">
	  				<img src={members[i].photo} className="photo-holder"/>
	  			</div>
	  			<div className="details">
	  				<h3 className="person">{ members[i].name }</h3>
	  				<div className="divider"></div>
	  				<div className="bio">
							{ members[i].bio }
	  				</div>
	  				<div className="divider"></div>
	  			</div>
	  		</div>
			</Fade>
		</Col>
	)
}


class Corporate extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.form.validateFields();
    this.initTextScramble()
  }

  initTextScramble() {
    const element = document.querySelector(".main-title-heading");
    const fx = new TextScramble(element)
    const phrases = [
      'Finance & Technology <br /> Industry Experts'
    ]
    let counter = 0
    
    fx.setText(phrases[counter]);
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
			    <h1 className="title main-title-heading"></h1>
			    <p className="sub-title">
			      Global Business, Technology and Financial Expertise.
			    </p>
			  </section>
        <section className="section-triangle">
          <div className="section-triangle-color" />
        </section>
			  <section className="what-is-hut8 plain-section">
			    <div className="container text-center">
			    	<Fade bottom>
				      <h1 className="title">What’s behind the name “Hut 8”?</h1>
				      <div className="title-divider align-center" />
				      <p className="fixed-paragraph-width">The name “Hut 8” refers to the building at Bletchley Park where Alan Turing created his world-changing Enigma decoding machine. His work saved millions of lives, transformed cryptography and laid the foundation for Blockchain.</p>
			    	</Fade>
			    </div>
			  </section>
			  <section className="blank-video dark-section">
			    <div className="container text-center">
			    </div>
			  </section>
			  <section className="about-hut8 plain-section">
			    <div className="container text-center">
			    	<Fade bottom>
				      <h1 className="title">About Hut 8 Mining Corp.</h1>
				      <div className="title-divider align-center" />
				      <p className="fixed-paragraph-width">Hut 8 Mining is a cryptocurrency mining and Blockchain infrastructure company established through an exclusive partnership with Bitfury, one of the world’s leading Blockchain technology companies. Hut8 Mining currently owns bitcoin mining datacenters representing 24.2 MW and 165 PH/s that are in operation or under construction, with a pipeline of acquisition and development opportunities across North America. Hut 8 Mining is led by a team of industry experts to provide investors with exposure to Blockchain processing infrastructure and technology along with underlying cryptocurrency rewards and revenue from transaction fees.</p>
			    	</Fade>
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
				  		<Col lg={8} md={8} sm={24} xs={24}>
				  			<h2>57 <br /> <small>Datacenter</small></h2>
				  		</Col>
				  		<Col lg={8} md={8} sm={24} xs={24}>
				  			<h2>62 <br /> <small>Megawatts</small></h2>
				  		</Col>
				  		<Col lg={8} md={8} sm={24} xs={24}>
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

			  <section className="executive-team plain-section">
		  	  <div className="container">
			      <h1 className="title text-center">Our Executive Team</h1>
			      <div className="title-divider align-center" />
				  	<Row type="flex" justify="center" align="top">
				  		<Fade bottom>
					  		<Col lg={12} md={12} sm={24} xs={24}>
					  			<div className="member-thumbnail">
						  			<div className="photo">
						  				<img src={Andrew} className="photo-holder"/>
						  			</div>
						  			<div className="details">
						  				<h3 className="person">ANDREW KIGUEL</h3>
						  				<p className="position">CEO</p>
						  				<div className="divider"></div>
						  				<div className="bio">
												Andrew joins Hut 8 from GMP Securities L.P., where he played an integral role for more than 18 years, including most recently as Managing Director, Investment Banking, as well as a key member of GMP’s Blockchain Investment Banking Group. He is a co-founder of Hut 8 and played a fundamental role in the formation, structure and financing of Hut 8.  Andrew has extensive experience in providing investment banking services to numerous public and private entities, including raising equity and debt capital in excess of C$3 billion over the last five years. He has also worked in an advisory role on numerous marquee M&A transactions.
						  				</div>
						  				<div className="divider"></div>
						  			</div>
						  		</div>
					  		</Col>
					  		<Col lg={12} md={12} sm={24} xs={24}>
					  			<div className="member-thumbnail">
						  			<div className="photo">
						  				<img src={Kyle} className="photo-holder"/>
						  			</div>
						  			<div className="details">
						  				<h3 className="person">KYLE APPLEBY</h3>
						  				<p className="position">CFO</p>
						  				<div className="divider"></div>
						  				<div className="bio">
												Since 2007, Kyle has been providing CFO services to a number of public and private companies both domestic and international. He has focused on assisting companies with financial reporting and controls, governance, operations, financing and regulatory compliance. Prior to 2007, Kyle worked for several public accounting firms in Canada. He is a member in good standing of the Chartered Professional Accountants of Canada and the Chartered Professional Accountants of Ontario.x
						  				</div>
						  				<div className="divider"></div>
						  			</div>
						  		</div>
					  		</Col>
				  		</Fade>
				  	</Row>
		  		</div>
			  </section>

			  <section className="board-of-directors plain-section">
		  	  <div className="container">
			      <h1 className="title text-center">Our Executive Team</h1>
			      <div className="title-divider align-center" />
				  	<Row type="flex" justify="center" align="top">
				  		{teamMembers}
				  	</Row>
		  		</div>
			  </section>

		    <section className="leadership-thoughts plain-section">
		      <div className="container text-center">
		        <h1 className="title">Leadership Thoughts:</h1>
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
		           	</Carousel>
		          </Col>
		        </Row>
		     	</div>
		    </section>

		    <section className="mission-vision plain-section">
		      <div className="container text-center">
		        <h1 className="title">Our Mission & Values</h1>
		        <Row gutter={48} type="flex" justify="center" align="center">
		          <Col lg={8} md={8} sm={24} xs={24}>
		          	<Icon type="rocket" />
		          	<h4 className="heading">OUR MISSION</h4>
		          	<p className="content">We provide cryptocurrency mining solutions to enhance blockchain development, while creating better technologies that benefit both our investors and the environment.</p>
		          </Col>
		          <Col lg={8} md={8} sm={24} xs={24}>
		          	<Icon type="eye" />
		          	<h4 className="heading">OUR VISION</h4>
		          	<p className="content">To make Hut 8 Mining the largest cryptocurrency mining company in the world through strong partnerships, innovation, and leadership.</p>
		          </Col>
		          <Col lg={8} md={8} sm={24} xs={24}>
		          	<Icon type="book" />
		          	<h4 className="heading">OUR VALUES</h4>
		          	<p className="content">Trust, the pillar we stand on. <br /> Respect for everyone. <br />Understanding and empathy. <br /> Sustainable development. <br /> Transparency in everything.</p>
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

export default Form.create()(Corporate)

