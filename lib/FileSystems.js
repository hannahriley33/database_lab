const fs = require('fs').promises;
// const request = require('superagent');

const dog = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};
// write JSON function
function writeJSON(path, dog) {
  return fs.writeFile(path, JSON.stringify(dog));
}

// read JSON function
function readJSON(path, obj) {
  return fs.readFile(path, JSON.parse(obj));
}

// make directory & parents function
const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

module.exports = {
  writeJSON,
  readJSON,
  mkdirp
};


