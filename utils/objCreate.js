exports.userSummaryObj = (objArray) => {
  result = {};
  for (let key in objArray) {
    let obj = objArray[key];
    result[obj.weekDay] = obj.Sum;
  }

  return result;
};

exports.adminSummaryObj = (objArray) => {
  console.log("Array is ", objArray);
  result = {};
  for (const property in objArray) {
    result[objArray[property]] = objArray[property];
    console.log(objArray[property]);
    console.log("------------------------------");
    console.log(result);
  }

  return result;
};
