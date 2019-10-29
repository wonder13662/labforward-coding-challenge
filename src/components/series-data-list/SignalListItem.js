import React from "react";
import PropTypes from "prop-types";
import LineGraphSignal from "./LineGraphSignal";
import { GRAY } from "../../const";

class SeriesDataListItem extends React.Component {
  render() {
    const { data, name, colors, enableArea, hasError } = this.props;

    const graphData = {
      id: name,
      data: data.map((value, idx) => ({ x: idx, y: value }))
    };

    return (
      <LineGraphSignal
        data={[graphData]}
        enableArea={enableArea}
        colors={!!hasError ? [GRAY] : colors}
        hasError={hasError}
      ></LineGraphSignal>
    );
  }
}

SeriesDataListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  signals: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  enableArea: PropTypes.bool,
  hasError: PropTypes.bool.isRequired
};

export default SeriesDataListItem;
