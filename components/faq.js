import React from "react";
import Collapse, { Panel } from "rc-collapse";
import defaultCss from "rc-collapse/assets/index.css";
import customCss from "../styles/collapse.css";
import { Box, Flex } from "rebass";
import { title, questions } from "../content/faq";
import colors from "../styles/colors.json";
import { Element } from "react-scroll";

export default class Questions extends React.Component {
  state = {
    accordion: true,
    activeKey: null,
    questions: questions
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    let state = this.state;
    let shift = questions.length / 3;

    let cols = [];

    for (let i = 0; i < questions.length; i += shift) {
      cols.push(
        <Flex flexWrap="wrap" flexDirection="column" width={[1, 1 / 3]}>
          {questions.slice(i, i + shift).map(({ key, question, answer }) => (
            <Collapse
              key={key}
              accordion={false}
              onChange={this.onChange}
              activeKey={state.activeKey}
            >
              <Panel
                className="faqCard"
                key={key}
                header={question}
                headerClass="faqCardTitle"
              >
                <p>{answer}</p>
              </Panel>
            </Collapse>
          ))}
          <style jsx global>
            {defaultCss}
          </style>
          <style jsx global>
            {customCss}
          </style>
        </Flex>
      );
    }

    return (
      <Element name="faq">
        <Box mx={1} mt={4}>
          <h2 className="title">{title}</h2>
        </Box>
        <Flex flexDirection="row" flexWrap="wrap" mt={2} mb={4} pt={2}>
          {cols}
        </Flex>
        <style jsx>
          {`
            .title {
              display: inline-block;
              text-transform: uppercase;
              background: ${colors["base"]};
              border: 2px solid ${colors["white"]};
              padding: 5px 10px 2px 10px;
              box-sizing: content-box;
              margin: unset;
              height: 40px;
              font-family: "Overpass Mono", monospace;
            }
          `}
        </style>
      </Element>
    );
  }
}
