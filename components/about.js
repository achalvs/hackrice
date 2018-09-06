import { Box, Flex, ButtonOutline } from 'rebass'
import { title, info, p1, p2, p3, button1, button2 } from '../content/about'
import colors from '../styles/colors.json'

const About = () => (
  <Flex mx={-2} mt={4} mb={5} flexWrap="wrap">
    <Box width={1} mx={4}>
      <h2 className="title">{title}</h2>
    </Box>
    <Box width={1} mx={4} mb={2}>
      <div className="blockquote" >
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <button>{button1}</button>
      <button>{button2}</button>
    </div>
    </Box>
    <style jsx>{`

      @import url('https://rsms.me/inter/inter-ui.css');

      p {
        font-family: 'Overpass Mono', sans-serif;
        font-weight: 300;
        font-size: 1em;
        line-height: 1.45em;
        letter-spacing: -0.35px;
      }

      .blockquote {
        border-left: 6px solid ${colors['white']};
        padding-left: 1.5em;
      }

      .title {
        display: inline-block;
        text-transform: uppercase;
        background: ${colors['gray'][1]};
        color: ${colors['base']};
        padding: 2px 10px;
        margin: unset;
        font-family: 'Overpass Mono', monospace;
      }

      button {
        background: none;
        border: 1px solid ${colors['gray'][1]};
        color: ${colors['gray'][1]};
        font-family: 'Overpass Mono', monospace;
        font-size: 1em;
        margin-top: 0.6em;
        margin-right: 1em;
        padding: 6px 10px;
        text-transform: uppercase;
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out;
      }

      button:hover {
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

    `}</style>
  </Flex>
)

export default About
