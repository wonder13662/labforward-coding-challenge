import React from "react";
import PropTypes from "prop-types";
import SeriesDataListItem from "./SeriesDataListItem";
import "../../css/serice-data-set.css";

const COLORS = ["#1f78b4", "#e31a1c", "#f1e15b"];

class SeriesDataList extends React.Component {
  render() {
    const { actualDataList, areaOfInterestList, hasError } = this.props;

    const listItems = [];
    for (let i = 0; i < actualDataList.length; i++) {
      let key = `Series-${i + 1}`;
      listItems.push(
        <li key={key}>
          <h3>{`Series-${i + 1}`}</h3>
        </li>
      );

      const actualData = actualDataList[i];
      key = `actualData-${i + 1}`;
      listItems.push(
        <SeriesDataListItem
          key={key}
          color={COLORS[i]}
          name={key}
          data={actualData}
          enableArea={false}
          legendAxisLeft={"Data"}
          legendAxisBottom={"Time Series"}
          hasError={hasError}
        />
      );

      const areaOfInterest = areaOfInterestList[i];
      key = `areaOfInterest-${i + 1}`;
      listItems.push(
        <SeriesDataListItem
          key={key}
          color={COLORS[i]}
          name={key}
          data={areaOfInterest}
          enableArea={true}
          legendAxisLeft={"Signal"}
          legendAxisBottom={"Time Series"}
          hasError={hasError}
        />
      );
    }

    return (
      <div className={`series-data-list-box ${hasError ? "disabled" : ""}`}>
        <ul className="series-data-list">{listItems}</ul>
      </div>
    );
  }
}

SeriesDataList.propTypes = {
  actualDataList: PropTypes.arrayOf(PropTypes.array).isRequired,
  areaOfInterestList: PropTypes.arrayOf(PropTypes.array).isRequired,
  hasError: PropTypes.bool.isRequired
};

export default SeriesDataList;
