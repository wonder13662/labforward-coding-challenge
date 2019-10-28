import React from "react";
import ActualDataGraph from "../actual-data-graph";
import AreaOfInterestGraph from "../area-of-interest-graph";

class SeriesDataListItem extends React.Component {
  render() {
    const { actualData, areaOfInterest } = this.props;

    return (
      <li>
        <h3>SeriesDataListItem</h3>
        <ActualDataGraph actualData={actualData}></ActualDataGraph>
        <AreaOfInterestGraph
          areaOfInterest={areaOfInterest}
        ></AreaOfInterestGraph>
      </li>
    );
  }
}

export default SeriesDataListItem;
