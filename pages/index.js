import { Provider, Heading } from 'rebass'
import { injectGlobal } from 'styled-components'

import Head from '../components/head'
import Nav from '../components/nav'
import Intro from '../components/intro'
import Calendar from '../components/calendar'

// Ensure `grid-styled` Box and Flex components work properly.
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; color: #fff; }
  a {
      color: #fff;
      font-family: 'Overpass Mono';
      font-size: 0.9em !important;
      font-weight: 300;
      text-decoration: none;
      text-transform: uppercase;
    }
`

// Variables for <head>
let title = 'HackRice 8'
let url = 'https://hack.rice.edu'
let ogImage = '../static/og.png'
let description = 'The premier hackathon of the south.'

const Home = () => (
  <Provider theme={{
    fonts: {
      sans: "'Open Sans', sans-serif",
      mono: "'Overpass Mono', monospace",
    }
  }}>
    <Head title={title} description={description} url={url} ogImage={ogImage} />
    <Nav />
    <Intro />
    <Calendar />
  </Provider>
)

export default Home
