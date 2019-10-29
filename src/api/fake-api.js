import actualData from "../mockup/actual-data";
import areaOfInterest from "../mockup/area-of-interest";
import { DatabaseError } from "../error";

const fetchActualDataList = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: actualData });
    }, 3000);
  });
};

const fetchAreaOfInterestList = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: areaOfInterest });
    }, 3000);
  });
};

const fetchActualDataListUnknowError = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Unknown error occured!"));
    }, 3000);
  });
};

const fetchActualDataListDatabaseError = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new DatabaseError("Fail to fetch the data from server!"));
    }, 3000);
  });
};

export {
  fetchActualDataList,
  fetchAreaOfInterestList,
  fetchActualDataListUnknowError,
  fetchActualDataListDatabaseError
};
