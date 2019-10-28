import React from "react";
import SeriesDataListItem from "./SeriesDataListItem";
import "../../css/serice-data-set.css";

const COLORS = ["#1f78b4", "#e31a1c", "#f1e15b"];

class SeriesDataList extends React.Component {
  render() {
    const { actualDataList, areaOfInterestList } = this.props;

    const listItems = [];
    for (let i = 0; i < actualDataList.length; i++) {
      listItems.push(
        <li>
          <h3>{`Series-${i + 1}`}</h3>
        </li>
      );

      const actualData = actualDataList[i];
      let key = `actualData-${i + 1}`;
      listItems.push(
        <SeriesDataListItem
          key={key}
          color={COLORS[i]}
          name={key}
          data={actualData}
          enableArea={false}
          legendAxisLeft={"Data"}
          legendAxisBottom={"Time Series"}
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
        />
      );
    }

    console.log("listItems.length:", listItems.length);

    return (
      <div className="series-data-list-box">
        <ul className="series-data-list">{listItems}</ul>
      </div>
    );
  }
}

export default SeriesDataList;
