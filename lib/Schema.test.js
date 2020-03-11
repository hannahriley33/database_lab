// Test that validate method returns the object with all fields cast

// Test that validate method throws an error if the object doesn't follow the schema

const Schema = require('./Schema.js');



describe('Schema', () => {
  it('correctly checks the entire object to see if it fits the schema', () => {
  
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    
    const schema = {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    };

    const dogSchema = new Schema(schema);

    expect(dogSchema.validateSchemaMethod(dog)).toEqual(dog);
  });

  it('throws an error if the object does not correctly follow the given schema', () => {
    
    const dog = {
      name: 45,
      age: 'age',
      weight: 20
    };
    
    const schema = {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      weight: {
        type: String
      }
    };
    const dogBad = new Schema(schema);
  
    expect(() => dogBad.validateSchemaMethod(dog)).toThrowErrorMatchingSnapshot();
  });

});

