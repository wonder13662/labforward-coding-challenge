import actualData from "../mockup/actual-data";
import areaOfInterest from "../mockup/area-of-interest";
import { DatabaseError } from "../error";

const fetchActualDataList = function() {
  return new Promise((resolve, reject) => {
    resolve({ data: actualData });
  });
};

const fetchAreaOfInterestList = function() {
  return new Promise((resolve, reject) => {
    resolve({ data: areaOfInterest });
  });
};

const fetchActualDataListUnknowError = function() {
  return new Promise((resolve, reject) => {
    reject(new Error("Unknown error occured!"));
  });
};

const fetchActualDataListDatabaseError = function() {
  return new Promise((resolve, reject) => {
    reject(new DatabaseError("Fail to fetch the data from server!"));
  });
};

export {
  fetchActualDataList,
  fetchAreaOfInterestList,
  fetchActualDataListUnknowError,
  fetchActualDataListDatabaseError
};
