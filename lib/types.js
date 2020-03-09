//comment
const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean';
const isItArray = val => Array.isArray(val);
const isObject = val => typeof val === 'object' && val !== null;
const isFunction = val => typeof val === 'function';

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};

const castToString = val => {
  if(isString(val)) return val;
  const string = String(val);
  if(typeof val === 'object' || !string) throw new CastError(String, val);
  return string;
};

const castToBoolean = val => {
  if(isBoolean(val)) return val;
  if(val === 'false' || val === 0) return false;
  if(val === 'true' || val === 1) return true;
  throw new CastError(Boolean, val);
  
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  Boolean: castToBoolean,
  String: castToString,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};


module.exports = {
  isNumber,
  CastError,
  getCaster,
  castToNumber,
  isString,
  castToString,
  isBoolean,
  isItArray,
  isObject,
  isFunction,
  castToBoolean,
};
