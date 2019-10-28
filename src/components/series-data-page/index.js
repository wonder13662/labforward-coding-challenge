import React from "react";
import SeriesDataList from "../series-data-list";

class SeriesDataPage extends React.Component {
  render() {
    return (
      <div>
        <h3>SeriesDataPage</h3>
        <ul>
          <SeriesDataList />
        </ul>
      </div>
    );
  }
}

export default SeriesDataPage;
