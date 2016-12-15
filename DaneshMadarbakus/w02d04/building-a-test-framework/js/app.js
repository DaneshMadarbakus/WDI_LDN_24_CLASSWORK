console.log('working');


function describe(description, callback) {
  console.log(description);
  callback();
}
function it(description, callback) {
  console.log(description);
  callback();
}
function expect(object) {
  function log(result){
    if (!!result) {
      console.log('%c' + 'pass', 'color: green');
    } else {
      console.log('%c' + 'fail', 'color:red');
    }
  }
  return {
    toBe: function(condition){
      return log(object === condition);
    },
    toBeDefined: function() {
      log(typeof object !== 'undefined');
    }
  };
}

var car = {};

describe('These are the specs for a car object' , function(){
  it('should exist', function(){
    expect(!!car).toBe(true);
  });
  it('should be defined', function(){
    expect(car).toBeDefined();
  });
});
