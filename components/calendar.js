import { Flex, Box } from 'rebass'
import { friday, saturday, sunday } from '../content/calendar'
import colors from '../styles/colors.json'

const Calendar = () => (
  <Box mt={2} mx={-2} bg={colors['gray'][1]} color={colors['base']}>
    <Box mx={4} pt={3}>
      <h1 className="calTitle">Schedule</h1>
    </Box>
    <Flex mt={1} mx={4}>
      <Box width={[1, 1/3]}>
        <h2>Friday</h2>
        <ul className="scheduleDay">
          {friday.map(({ key, title, time, detail }) => (
            <li className="scheduleItem">
              <span className="itemTitle">{title}</span>
              <span className="itemTime">{time}</span>
              <span className="itemDetail">{detail}</span>
            </li>
          ))}
        </ul>
      </Box>
      <Box width={[1, 1/3]}>
        <h2>Saturday</h2>
        <ul className="scheduleDay">
          {saturday.map(({ key, title, time, detail }) => (
            <li className="scheduleItem">
              <span className="itemTitle">{title}</span>
              <span className="itemTime">{time}</span>
              <span className="itemDetail">{detail}</span>
            </li>
          ))}
        </ul>
      </Box>
      <Box width={[1, 1/3]}>
        <h2>Sunday</h2>
        <ul className="scheduleDay">
          {sunday.map(({ key, title, time, detail }) => (
            <li className="scheduleItem">
              <span className="itemTitle">{title}</span>
              <span className="itemTime">{time}</span>
              <span className="itemDetail">{detail}</span>
            </li>
          ))}
        </ul>
      </Box>
    </Flex>
    <style jsx>{`

      h1, h2 {
        font-family: 'Overpass Mono', monospace;
      }

      .calTitle {
        display: inline-block;
        text-transform: uppercase;
        background: ${colors['base']};
        color: #fff;
        padding: 2px 10px;
      }

      .scheduleDay {
        display: inline-block;
        vertical-align: top;
        width: 48%;
        float: left;
        margin: 0px;
        list-style-type: none;
        padding: 0;
        width: 90%;
      }

      .scheduleItem {
        border: 1px solid ${colors['gray'][2]};
        padding: 8px 10px;
        transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        margin-bottom: 1em;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }

      .scheduleItem:hover {
        box-shadow: 0px 3px 5px 2px rgba(97, 100, 178, 0.05);
        transform: scale(1.1);
      }

      .scheduleDay ul li {
        justify-content: space-between;
        flex-flow: row wrap;
        align-content: center;
      }

      .itemTime {
        display: block;
        margin-top: 2px;
        font-size: 0.8em;
        font-family: 'Overpass Mono';
      }

      .itemTitle {
        margin-top: 5px;
        display: inline-block;
        font-size: 0.8em;
        font-weight: 400;
        font-family: 'Overpass Mono';
        background: rgba(97, 100, 178, 0.1);
        padding: 2px 5px;
      }

      .itemDetail {
        clear: both;
        display: block;
        flex: 1 1 100%;
        font-size: 0.8em;
        margin-top: 0.5em;
        opacity: 0.7;
      }

    `}</style>
  </Box>
)

export default Calendar
