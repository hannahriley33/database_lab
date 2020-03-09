
const {
  isNumber,
  castToNumber,
  getCaster,
  isString,
  castToString,
  isBoolean,
  isItArray,
  isObject,
  isFunction,
  castToBoolean,

} = require('../lib/types.js');
  
describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString(3)).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(3)).toBeFalsy();
    });
    it('properly tells if a value is an array', () => {
      expect(isItArray('hi')).toBeFalsy();
      expect(isItArray([1, 2])).toBeTruthy();
    });
    it('properly tells if a value is an object', () => {
      expect(isObject('hi')).toBeFalsy();
      expect(isObject({ name: 'hannah' })).toBeTruthy;
      expect(isObject([1, 2, 3])).toBeFalsy;
    });
    it('properly tells if a value is a function', () => {
      expect(isFunction('hi')).toBeFalsy;
      expect(isFunction(3)).toBeFalsy;
      expect(isFunction(() => {}));
    });
  });


  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
  
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });
  
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(Promise)).toBeNull();
  });

  describe('casters', () => {
    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString('3')).toEqual('3');
      expect(castToString(true)).toEqual('true');
    
    });
    it('throws if value is not castable to string', () => {
      expect(() => castToString([])).toThrowErrorMatchingSnapshot();
      expect(() => castToString({})).toThrowErrorMatchingSnapshot();
    });
  });
  
  describe('casters', () => {
    it('can cast values to a boolean', () => {
      expect(castToBoolean(1)).toEqual(true);
      expect(castToBoolean(0)).toEqual(false);
      expect(castToBoolean(true)).toEqual(true);
    
    });
    it('throws if value is not castable to boolean', () => {
      expect(() => castToBoolean([])).toThrowErrorMatchingSnapshot();
      expect(() => castToBoolean(null)).toThrowErrorMatchingSnapshot();
      

    });
  });
});
