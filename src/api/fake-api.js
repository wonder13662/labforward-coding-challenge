import actualData from "../mockup/actual-data";
import areaOfInterest from "../mockup/area-of-interest";

export default {
  fetchActualDataList: function() {
    return new Promise((resolve, reject) => {
      resolve({ data: actualData });
    });
  },
  fetchAreaOfInterestList: function() {
    return new Promise((resolve, reject) => {
      resolve({ data: areaOfInterest });
    });
  }
};
