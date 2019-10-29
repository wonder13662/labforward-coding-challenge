import React from "react";
import { ResponsiveLine } from "@nivo/line";
import PropTypes from "prop-types";

export default function Line(props) {
  const { data, enableArea, colors, hasError } = props;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      colors={colors}
      borderColor={{ from: "color" }}
      enableArea={hasError ? false : enableArea}
      animate={false}
      pointSize={8}
      pointColor="#ffffff"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={!hasError}
      isInteractive={false}
      legends={[]}
    />
  );
}

Line.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.exact({
          x: PropTypes.number,
          y: PropTypes.number
        })
      )
    })
  ).isRequired,
  signals: PropTypes.arrayOf(PropTypes.number),
  colors: PropTypes.arrayOf(PropTypes.string),
  enableArea: PropTypes.bool,
  hasError: PropTypes.bool.isRequired
};
