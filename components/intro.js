import Link from "next/link"
import { Box, Container, Card, Flex, Image, theme } from 'rebass'
import colors from '../styles/colors.json'
import { bullets, cards } from '../content/intro'

const Intro = () => (
  <div>
    <Container>
      <Image src="../static/sallyport.svg" width={500}/>
    </Container>
    <Box px={3} pt={3} pb={4} color={colors['base']} bg={colors['gray'][1]}>
        <Box width='auto' px={2}>
          <h1 className="introText">The premier hackathon of the south.</h1>
          {bullets.map(({ key, href, button, note, icon }) => (
            <div className="introItem">
              <img className="icon" src={icon}></img>
              <a href={href} className="styledlink">
                {button}
              </a>
              <span className="spacer" />
              <span className="note">{note}</span>
            </div>
          ))}
        </Box>
        <Flex flexWrap="wrap" mx={-2} pt={2}>
          {cards.map(({ key, href, title, text, icon }) => (
            <Box className="cardContainer" width={[1, 1/2, 1/3, 1/6]}>
              <Link href={href}>
                <div className="card">
                  <h3>
                    <img src={icon} />
                    <span className="spacer" />
                    <span className="cardTitle">{title}</span>
                  </h3>
                  <p>{text}</p>
                </div>
              </Link>
            </Box>
          ))}
      </Flex>
    </Box>
    <style jsx>{`

      .introText {
        font-family: 'Overpass Mono';
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
      }

      .introItem {
        margin-bottom: 10px;
      }

      a.styledlink {
        color: #fff;
        text-decoration: none;
        background: rgba(97, 100, 178, 0.8);
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
        padding: 3px 5px;
        margin: 3px;
        text-transform: uppercase;
        font-size: 0.85em;
        font-weight: 500;
      }

      a.styledlink:hover {
        color: #fff;
        background: rgb(97, 100, 178, 1);
      }

      .icon {
        padding-right: 5px;
      }

      .note {
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 300;
        font-family: "Overpass Mono";
      }

      .spacer {
        margin-right: 5px;
      }

      .card {
        border: 1px solid ${colors['base']};
        color: ${colors['base']};
        margin: 10px;
        min-height: 110px !important;
        padding: 18px 18px 18px;
        text-align: left;
        text-decoration: none;
        transition: border-color 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out;
      }

      .cardTitle {
        text-transform: uppercase;
      }

      .card:hover {
        color: #fff;
        background: ${colors['base']};
      }

      .card h3 {
        margin: 0;
        font-size: 18px;
      }

      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
      }

      @media (max-width: 575px) {

        .note {
          display: block;
          margin-top: 1em;
        }

      }

    `}</style>
  </div>
)

export default Intro
