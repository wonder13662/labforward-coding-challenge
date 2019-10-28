import React from "react";
import SeriesDataListItem from "./SeriesDataListItem";
import "../../css/serice-data-set.css";

class SeriesDataList extends React.Component {
  render() {
    const { actualDataList, areaOfInterestList } = this.props;

    const listItems = actualDataList.map((actualData, idx) => {
      return (
        <SeriesDataListItem
          key={idx}
          actualData={actualData}
          areaOfInterest={areaOfInterestList[idx]}
        />
      );
    });

    return (
      <div className="series-data-list-box">
        <ul className="series-data-list">{listItems}</ul>
      </div>
    );
  }
}

export default SeriesDataList;
