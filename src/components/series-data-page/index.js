import React from "react";
import SeriesDataList from "../series-data-list";
import {
  fetchActualDataList,
  fetchAreaOfInterestList,
  fetchActualDataListDatabaseError,
  fetchAreaOfInterestListDatabaseError,
  fetchActualDataListUnknowError,
  fetchAreaOfInterestListUnknownError
} from "../../api/fake-api";
import { DatabaseError } from "../../error";

class SeriesDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualDataList: [],
      areaOfInterestList: [],
      hasError: false
    };

    this.fetchSeriesData = this.fetchSeriesData.bind(this);
    this.getPromiseseSuccess = this.getPromiseseSuccess.bind(this);
    this.getPromiseseError = this.getPromiseseError.bind(this);
    this.getPromiseseNotValid = this.getPromiseseNotValid.bind(this);
  }

  getPromiseseSuccess() {
    return [fetchActualDataList(), fetchAreaOfInterestList()];
  }

  getPromiseseError() {
    return [
      fetchActualDataListDatabaseError(),
      fetchAreaOfInterestListDatabaseError()
    ];
  }

  getPromiseseNotValid() {
    return [
      fetchActualDataListUnknowError(),
      fetchAreaOfInterestListUnknownError()
    ];
  }

  fetchSeriesData(promises) {
    Promise.all(promises)
      .then(responses => {
        const actualDataList = responses[0].data.actualData;
        const areaOfInterestList = responses[1].data.areaOfInterest;
        this.setState({ actualDataList, areaOfInterestList, hasError: false });
      })
      .catch(error => {
        if (error instanceof DatabaseError) {
          alert(error.message);
        } else {
          alert("Unknown error occurred!");
        }

        this.setState({
          actualDataList: [new Array(50).fill(0)],
          areaOfInterestList: [new Array(50).fill(0)],
          hasError: true
        });
      });
  }

  componentDidMount() {
    this.fetchSeriesData(this.getPromiseseError());
  }

  render() {
    const { actualDataList, areaOfInterestList, hasError } = this.state;
    return (
      <div className="series-data-page">
        <div className="page-gutter"></div>
        <SeriesDataList
          actualDataList={actualDataList}
          areaOfInterestList={areaOfInterestList}
          hasError={hasError}
        />
        <div className="page-gutter"></div>
      </div>
    );
  }
}

export default SeriesDataPage;
