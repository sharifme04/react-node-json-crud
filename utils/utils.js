const fs = require("fs");

const saveData = (dataPath, data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

const getData = (dataPath) => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

module.exports = { saveData, getData };
