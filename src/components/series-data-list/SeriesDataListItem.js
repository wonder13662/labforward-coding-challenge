import React from "react";
import { ResponsiveLine } from "@nivo/line";

class SeriesDataListItem extends React.Component {
  getLineChart({
    data,
    enableArea = false,
    legendAxisLeft,
    legendAxisBottom,
    color,
    hasError
  }) {
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
        colors={[color]}
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

  render() {
    const {
      data,
      name,
      color,
      enableArea,
      legendAxisLeft,
      legendAxisBottom,
      hasError
    } = this.props;

    const graphData = {
      id: name,
      data: data.map((value, idx) => ({ x: `${idx}`, y: `${value}` }))
    };

    const lineChart = this.getLineChart({
      data: [graphData],
      enableArea,
      legendAxisLeft,
      legendAxisBottom,
      color: !!hasError ? "#999999" : color,
      hasError
    });

    return <li className="item-box">{lineChart}</li>;
  }
}

export default SeriesDataListItem;

// TODO Proptypes
