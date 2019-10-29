import React from "react";
import PropTypes from "prop-types";
import LineGraph from "./LineGraph";
import { GRAY } from "../../const";

class SeriesDataListItem extends React.Component {
  render() {
    const {
      data,
      name,
      colors,
      enableArea,
      legendAxisLeft,
      legendAxisBottom,
      hasError
    } = this.props;

    const graphData = {
      id: name,
      data: data.map((value, idx) => ({ x: idx, y: value }))
    };

    return (
      <LineGraph
        data={[graphData]}
        enableArea={enableArea}
        legendAxisLeft={legendAxisLeft}
        legendAxisBottom={legendAxisBottom}
        colors={!!hasError ? [GRAY] : colors}
        hasError={hasError}
      ></LineGraph>
    );
  }
}

SeriesDataListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  signals: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  enableArea: PropTypes.bool,
  legendAxisLeft: PropTypes.string.isRequired,
  legendAxisBottom: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
};

export default SeriesDataListItem;
