describe('UpperAtmo', function() {
  var UpperAtmo = require('../UpperAtmo');
  var UA;
  
  beforeEach(function(){
    UA = new UpperAtmo;
    console.log(UA);
  });
  
  describe('inflate', function() {
    it('should return true when passed at least one argument', function() {
      var boolean = UA.inflate('anything');
      expect(boolean).toEqual(true);
    })
  });
});