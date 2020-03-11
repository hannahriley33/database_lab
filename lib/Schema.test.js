// Test that validate method returns the object with all fields cast
// Test that validate method throws an error if the object doesn't follow the schema

const Schema = require('./Schema');

const dog = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

describe('Schema', () => {
  const schema = new Schema({
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
  });


  // // before each test
  // beforeEach(() => {
  //   nameValidator = new Validator('name', {
  //     type: String,
  //     required: true
  //   });
  // });



  it('correctly checks the entire object to see if it fits the schema', () => {
    expect(dog).toEqual({
      
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
    });
  });
});
