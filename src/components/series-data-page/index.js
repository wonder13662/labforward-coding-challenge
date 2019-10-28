import React from "react";
import SeriesDataList from "../series-data-list";
import fakeApi from "../../api/fake-api";

class SeriesDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualDataList: [],
      areaOfInterestList: []
    };
  }
  componentDidMount() {
    Promise.all([
      fakeApi.fetchActualDataList(),
      fakeApi.fetchAreaOfInterestList()
    ])
      .then(responses => {
        console.log("responses:", responses);
        const actualDataList = responses[0].data.actualData;
        const areaOfInterestList = responses[1].data.areaOfInterest;
        this.setState({ actualDataList, areaOfInterestList });
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  render() {
    const { actualDataList, areaOfInterestList } = this.state;
    return (
      <div>
        <h3>SeriesDataPage</h3>
        <ul>
          <SeriesDataList
            actualDataList={actualDataList}
            areaOfInterestList={areaOfInterestList}
          />
        </ul>
      </div>
    );
  }
}

export default SeriesDataPage;
