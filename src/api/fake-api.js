import actualData from "../mockup/actual-data";
import areaOfInterest from "../mockup/area-of-interest";

export default {
  fetchActualDataList: function() {
    return new Promise((resolve, reject) => {
      resolve(actualData);
    });
  },
  fetchAreaOfInterestList: function() {
    return new Promise((resolve, reject) => {
      resolve(areaOfInterest);
    });
  }
};
