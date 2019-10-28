import React from "react";
import ActualDataGraph from "../actual-data-graph";
import AreaOfInterestGraph from "../area-of-interest-graph";
import "../../css/serice-data-set.css";

class SeriesDataSet extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <ActualDataGraph></ActualDataGraph>
          <AreaOfInterestGraph></AreaOfInterestGraph>
        </h3>
      </div>
    );
  }
}

export default SeriesDataSet;
