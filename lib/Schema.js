//const validators = Object.entries(schema)
// .map(([key, object]) => new Validator(key, object)
// )
// console.log(validators) // -> our schema needs to iterate through these validators
// validators.forEach(validator => {
//   validator.validate(dog);
// })

const { Validator } = require('./Validator.js');

class Schema {
  constructor(schemaDefinition) {
    this.schemaDefinition = schemaDefinition;
  }

  validateSchemaMethod(obj) {
    const validate = Object.entries(schema)
      .map(([key, object]) => new Validator(key, object));

}}




module.exports = {
  Schema
};
