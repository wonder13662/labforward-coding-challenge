import React from "react";
import SeriesDataList from "../series-data-list";
import {
  fetchActualDataList,
  fetchAreaOfInterestList,
  fetchActualDataListDatabaseError,
  fetchActualDataListUnknowError
} from "../../api/fake-api";
import { DatabaseError } from "../../error";
import { Button, Loader } from "semantic-ui-react";

class SeriesDataPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actualDataList: [],
      areaOfInterestList: [],
      isFetching: false,
      hasError: false
    };

    this.fetchSeriesData = this.fetchSeriesData.bind(this);
    this.getPromiseseSuccess = this.getPromiseseSuccess.bind(this);
    this.getPromiseseError = this.getPromiseseDatabaseError.bind(this);
    this.getPromiseseNotValid = this.getPromiseseUnknownError.bind(this);

    this.handleOnClickSuccess = this.handleOnClickSuccess.bind(this);
    this.handleOnClickErrorDatabase = this.handleOnClickErrorDatabase.bind(
      this
    );
    this.handleOnClickErrorUnknown = this.handleOnClickErrorUnknown.bind(this);
  }

  getPromiseseSuccess() {
    return [fetchActualDataList(), fetchAreaOfInterestList()];
  }

  getPromiseseDatabaseError() {
    return [fetchActualDataListDatabaseError(), fetchAreaOfInterestList()];
  }

  getPromiseseUnknownError() {
    return [fetchActualDataListUnknowError(), fetchAreaOfInterestList()];
  }

  fetchSeriesData(promises) {
    this.setState({ isFetching: true });

    Promise.all(promises)
      .then(responses => {
        const actualDataList = responses[0].data.actualData;
        const areaOfInterestList = responses[1].data.areaOfInterest;
        this.setState({
          actualDataList,
          areaOfInterestList,
          isFetching: false,
          hasError: false
        });
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
          isFetching: false,
          hasError: true
        });
      });
  }

  handleOnClickSuccess() {
    this.fetchSeriesData(this.getPromiseseSuccess());
  }

  handleOnClickErrorDatabase() {
    this.fetchSeriesData(this.getPromiseseDatabaseError());
  }

  handleOnClickErrorUnknown() {
    this.fetchSeriesData(this.getPromiseseUnknownError());
  }

  componentDidMount() {
    this.fetchSeriesData(this.getPromiseseSuccess());
  }

  render() {
    const {
      actualDataList,
      areaOfInterestList,
      hasError,
      isFetching
    } = this.state;

    let btnAttrs = {};
    if (isFetching) {
      btnAttrs["disabled"] = true;
    }

    return (
      <div className="series-data-page">
        {isFetching ? (
          <div className="page-loader">
            <Loader active inline="centered">
              Loading
            </Loader>
          </div>
        ) : null}
        <div className="page-gutter"></div>
        <div className="page-content">
          <div>
            <Button
              onClick={this.handleOnClickSuccess}
              color="green"
              {...btnAttrs}
            >
              Success
            </Button>
            <Button
              onClick={this.handleOnClickErrorDatabase}
              color="red"
              {...btnAttrs}
            >
              Error - Database
            </Button>
            <Button
              onClick={this.handleOnClickErrorUnknown}
              color="red"
              {...btnAttrs}
            >
              Error - Unknown
            </Button>
          </div>
          {!isFetching ? (
            <SeriesDataList
              actualDataList={actualDataList}
              areaOfInterestList={areaOfInterestList}
              hasError={hasError}
            />
          ) : null}
        </div>
        <div className="page-gutter"></div>
      </div>
    );
  }
}

export default SeriesDataPage;
