function UpperAtmo() {
  // var balloons; // object or array!?
}
  
UpperAtmo.prototype.inflate = function(register, capsule, passengers) {
  if (register !== null) {
    return true
  }
  // create/add listener "balloon"
  // ?? multiple balloons can listen for same event, so can't actually use register as key ??
};

UpperAtmo.prototype.deflate = function(register, capsule, passengers) {
  // destroy/remove listener "balloon"
};

UpperAtmo.prototype.signal = function(register, content) {
  // trigger event
};

UpperAtmo.prototype.respond = function(register, content) {
  // respond to event
  // should be able to respond to multiple listeners
  // should handle flare vs. signal
};

UpperAtmo.prototype.liftOnce = function(register, capsule, passengers) {
  // create/add listener "balloon" for one-time use
};

UpperAtmo.prototype.flare = function(register, content) {
  // trigger event that tears down listener after use
};

UpperAtmo.prototype.clearSky = function() {
  // remove ALL listeners
};

module.exports = UpperAtmo;