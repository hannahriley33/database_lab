//const validators = Object.entries(schema)
// .map(([key, object]) => new Validator(key, object)
// )
// console.log(validators) // -> our schema needs to iterate through these validators
// validators.forEach(validator => {
//   validator.validate(dog);
// })

const  Validator  = require('./Validator.js');

module.exports = class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
    this.validators = Object.entries(schemaDefinition).map(([key, object]) => new Validator(key, object));
  }

  validateSchemaMethod(obj) {
    const newObject = {};
    this.validators.forEach(validator => {
      newObject[validator.key] = validator.validate(obj);
    });
    return newObject;
  }
}

// module.exports = {
//   Schema
// };
