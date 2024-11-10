const fs = require("fs");
const path = require("path");
const dbpath = path.join(__dirname, "../db.json");
const readData = () => {
  const data = fs.existsSync(dbpath) ? fs.readFileSync(dbpath) : "[]";
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dbpath, JSON.stringify(data, null, 2));
};
module.exports = { readData, writeData };
