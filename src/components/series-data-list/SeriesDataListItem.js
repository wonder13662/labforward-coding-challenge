import React from "react";
import ActualDataGraph from "../actual-data-graph";
import AreaOfInterestGraph from "../area-of-interest-graph";

class SeriesDataListItem extends React.Component {
  render() {
    return (
      <li>
        <h3>SeriesDataListItem</h3>
        <ActualDataGraph></ActualDataGraph>
        <AreaOfInterestGraph></AreaOfInterestGraph>
      </li>
    );
  }
}

export default SeriesDataListItem;
