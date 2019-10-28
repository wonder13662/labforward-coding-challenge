# LabForward coding challenge

## How to run this project?

```
$ npm run start
```

## User Story

- As a researcher, I would like to identify sudden peaks in my continuous time series data, so that I can focus on important changes.

## Concepts

- A data point is considered a peak in a time series when the moving z-score is beyond a given threshold.

## Definition of Done

- Accomplished the MVP Task: Simple react app that satisfied the User story
- Implementations
  - The upper chart shows the actual data
  - The lower chart shows the area of interest
  - Scalable structure. If you add more data, it shows more lists
  - Using mock data but fetching pipeline could be replace with REST API
- (TODO)Error handling
  - Data validation

## Skill Set

- Javascript(ES6)
- React Framework

## Component Structure

- SeriesDataPage
  - SeriesDataList
    - SeriesDataListItem
      - ActualDataGraph
      - AreaOfInterestGraph

## Using libraries

- [Create react app](https://github.com/facebook/create-react-app)
- [Nivo](https://nivo.rocks/line)
- [React Semantic UI](https://react.semantic-ui.com/usage)
