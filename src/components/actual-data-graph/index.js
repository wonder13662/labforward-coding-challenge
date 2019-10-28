import React from "react";
import "../../css/actual-data-graph.css";

class ActualDataGraph extends React.Component {
  render() {
    const { actualData } = this.props;
    return <div>ActualDataGraph:{actualData.length}</div>;
  }
}

export default ActualDataGraph;
