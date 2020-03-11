const fs = require('fs').promises;
const { 
  mkdirp,
  writeJSON,
  readJSON,
  // readDirectoryJSON,
  // updateJSON,
  // deleteFile,

} = require('./FileSystems.js');

jest.mock('fs', () => ({
  promises: { 
    writeFile: jest.fn(() => Promise.resolve()),
    mkdir: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve('{"name": "spot"')),
    readdir: jest.fn(() => Promise.resolve)
  }
  
}));

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve())
    
  }  
}));

describe('FileSystems.js', () => {

  it('writeJSON writes an object into a file', () => {
    //call write json function 
    return writeJSON('./FileSystems.js', dog)
      
    //stringy: object is result
      .then(result => {
        expect(result).toEqual({ 'stringy': 'object' });
      });
  });

  it('Mkdirp makes a directory and all parent directories', () => {
    return mkdirp('./fsFile.js/newfile')
      .then(() => {
        expect(fs.mkdir)
          .toHaveBeenCalledWith('./fsFile.js/newfile', { recursive: true });
      });
  });
  it('can rean an object from a file', () => {
    return readJSON('./FileSystems.js')
      .then (data => {
          expect(fs.) 
      })
  })
});



// it('mkdirp makes a directory and all parent directories', () => {
//   expect(mkdirp(fileParent, file)).toEqual({

//   });
//   it('writes an object to a file', () => {
