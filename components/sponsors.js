import Link from "next/link";
import { Box, Flex, Image, Tooltip, Text } from "rebass";
import colors from "../styles/colors.json";
import { title, files } from "../content/sponsors";
import styled from "styled-components";

const CustomTooltip = styled(Tooltip)`
  &::before {
    white-space: normal;
    width: 350px;
    padding: 1.5em;
  }
`;

const Sponsors = () => (
  <Flex flexWrap="wrap" width={1} my={2}>
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      width={1}
      mx={5}
      my={5}
    >
      <h2 className="title">{title}</h2>
      {files.map(
        ({ name, height, link, blurb }) =>
          blurb === undefined ? (
            <a href={link}>
              <Image
                style={{ margin: "2em 1em", height: `${height}` }}
                src={`../static/sponsors/${name}`}
              />
            </a>
          ) : (
            <CustomTooltip text={blurb} className="tooltip">
              <a href={link}>
                <Image
                  style={{ margin: "2em 1em", height: `${height}` }}
                  src={`../static/sponsors/${name}`}
                />
              </a>
            </CustomTooltip>
          )
      )}
    </Flex>
    <style jsx>
      {`
        .title {
          display: inline-block;
          text-transform: uppercase;
          color: ${colors["base"]};
          background: ${colors["white"]};
          padding: 2px 10px;
          margin: unset;
          height: 40px;
          font-family: "Overpass Mono", monospace;
        }

        .tooltip {
          width: 100px !important;
        }
      `}
    </style>
  </Flex>
);

export default Sponsors;
