import React from "react";
import ActualDataGraph from "../actual-data-graph";
import AreaOfInterestGraph from "../area-of-interest-graph";

class SeriesDataListItem extends React.Component {
  render() {
    const { actualData, areaOfInterest } = this.props;

    return (
      <li>
        <div className="item-box">
          <div className="item-box--actual-data-graph">
            <ActualDataGraph actualData={actualData}></ActualDataGraph>
          </div>
          <div className="item-box--area-of-intereset-graph">
            <AreaOfInterestGraph
              areaOfInterest={areaOfInterest}
            ></AreaOfInterestGraph>
          </div>
        </div>
      </li>
    );
  }
}

export default SeriesDataListItem;
