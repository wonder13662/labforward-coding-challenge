import React from "react";
import SeriesDataListItem from "./SeriesDataListItem";
import "../../css/serice-data-set.css";

class SeriesDataList extends React.Component {
  render() {
    return (
      <div>
        <h3>SeriesDataList</h3>
        <ul>
          <SeriesDataListItem />
        </ul>
      </div>
    );
  }
}

export default SeriesDataList;
