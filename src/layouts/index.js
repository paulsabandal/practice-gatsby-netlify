import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from 'antd'
import Navbar from '../components/navbar'
import HeroBackground from '../components/hero-background'
import './index.css'
import './layout.scss';

const { Footer, Sider, Content, Header } = Layout;

const App = ({ children, data }) => (   
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Layout>

      <Header className="main-header">
        <Navbar />
      </Header>
      <Content>
        <HeroBackground />
        <Layout>
          <Content className="container main-content">
            {children()} 
          </Content>
        </Layout>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
)

App.propTypes = {
  children: PropTypes.func,
}

export default App

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
