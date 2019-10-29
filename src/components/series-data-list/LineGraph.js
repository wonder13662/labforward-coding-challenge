import React from "react";
import { ResponsiveLine } from "@nivo/line";
import PropTypes from "prop-types";

export default function Line(props) {
  const {
    data,
    enableArea,
    legendAxisLeft,
    legendAxisBottom,
    colors,
    hasError
  } = props;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendAxisBottom,
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legendAxisLeft,
        legendOffset: -40,
        legendPosition: "middle"
      }}
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
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
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
  legendAxisLeft: PropTypes.string.isRequired,
  legendAxisBottom: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};
