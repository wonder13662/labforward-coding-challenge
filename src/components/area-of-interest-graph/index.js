import React from "react";
import "../../css/area-of-interest-graph.css";

class AreaOfInterestGraph extends React.Component {
  render() {
    const { areaOfInterest } = this.props;

    return <div>AreaOfInterestGraph:{areaOfInterest.length}</div>;
  }
}

export default AreaOfInterestGraph;
