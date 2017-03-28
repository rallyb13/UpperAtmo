describe('UpperAtmo', function() {
  var UpperAtmo = require('../UpperAtmo');
  var UA;
  var OtherObject;
  
  beforeEach(function(){
    UA = new UpperAtmo;
    RandomObject = {
      doSomething: function() {
        console.log('do something');
      },
      doNothing: function(){}
    }
  });
  
  describe('inflate', function() {
    it('should create a new object with all listener details and add it to balloons array', function() {
      UA.inflate('selectionMade', RandomObject.doSomething);
      expect(UA.balloons[0]).toEqual({
        signal: 'selectionMade',
        capsule: RandomObject.doSomething,
        once: false
      });
    });
    it('should not create an object if an agrument is missing', function() {
        UA.inflate('buttonPressed');
        UA.inflate('thingMajigged', RandomObject.doSomething);
        expect(UA.balloons[0].signal).toEqual('thingMajigged');
    });
  });
  // TODO: should there be a test to ensure capsule IS a bound function?
  
  describe('deflate', function() {
    it('should remove a specific object from the balloons array', function() {
      UA.inflate('pingPonged', RandomObject.doSomething);
      UA.inflate('marioJumped', RandomObject.doSomething);
      expect(UA.balloons.length).toEqual(2); // check setup assumptions
      
      UA.deflate('pingPonged', RandomObject.doSomething);
      expect(UA.balloons.length).toEqual(1);
      expect(UA.balloons[0].signal).toEqual('marioJumped');
    });
    it('should remove the correct object from the balloons array even if multiple objects are tied to the same signal', function() {
      UA.inflate('schrodCat', RandomObject.doSomething);
      UA.inflate('schrodCat', RandomObject.doNothing);
      expect(UA.balloons[0].signal).toEqual('schrodCat'); // check setup assumptions
      expect(UA.balloons[1].signal).toEqual('schrodCat');
      
      UA.deflate('schrodCat', RandomObject.doNothing);
      expect(UA.balloons.length).toEqual(1);
      expect(UA.balloons[0].capsule).toEqual(RandomObject.doSomething);
    });
    it('should not remove any object from an array if given insufficient args', function() {
      UA.inflate('boulderRolledUp', RandomObject.doSomething);
      UA.deflate('boulderRolledUp');
      expect(UA.balloons[0].signal).toEqual('boulderRolledUp');
    });
  });
});