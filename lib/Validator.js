const { getCaster } = require('./types');

module.exports = class Validator {
  // Validator takes two properties
  // field - which is the field we are going to validate
  // object - which gives us info about how to validate
  constructor(key, object) {
    this.key = key;
    this.object = object;
  }

  // obj - is the object we want to run through validation
  validate(obj) {
    // if key is required and missing
    if(this.object.required && !(this.key in obj)) {
      throw new Error(`Missing required key >>${this.key}<<`);
    }

    // if not required and missing
    if(!this.object.required && !(this.key in obj)) {
      return null;
    }
    // getCaster(String) -> castToString
    // getCaster(Number) -> castToNumber
    // getCaster(Boolean) -> castToBoolean
    const caster = getCaster(this.object.type);
    return caster(obj[this.key]);
  }
};

//RYANS CODE DOWN HERE:

//const { getCaster } = require('./types');
// module.exports = class Validator {
//   constructor(field, { type, required }) {
//     this.field = field;
//     this.type = type;
//     this.required = required;
//     this.caster = getCaster(type);
//   }

//   validate(obj) {
//     const val = obj[this.field];
//     if(this.required && !val) throw new Error(`${this.field} is required`);
//     if(!this.required && !val) return null;

//     return this.caster(val);
//   }
// };
