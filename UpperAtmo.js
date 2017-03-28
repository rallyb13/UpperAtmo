function UpperAtmo() {
  this.balloons = [];
}

/*
* adds an event-awaiter object to an array (event-awaiter/listener is a balloon in this extended metaphor)
* @param {string} signal - name that identifies unique event
* @param {function} capsule - the callback (bound to the object it's called on)
*/
UpperAtmo.prototype.inflate = function(signal, capsule) {
  var balloons = this.balloons;
  if (signal !== null && typeof signal !== 'undefined' && capsule !== null && typeof capsule !== 'undefined') {
    balloons.push({
      signal: signal,
      capsule: capsule,
      once: false
    });
  }
};

/*
* removes event-awaiter (balloon) from array
* @param {string} signal - name that identifies unique event
* @param {function} capsule - the callback (bound to the object it's called on)
*/
UpperAtmo.prototype.deflate = function(signal, capsule) {
  var balloons = this.balloons;
  for (var i=0; i<balloons.length; i++) {
    if (balloons[i].signal === signal && balloons[i].capsule === capsule) {
      balloons.splice(i, 1);
    }
  }
};

UpperAtmo.prototype.liftOnce = function(register, capsule, passengers) {
  // create/add listener "balloon" for one-time use
};

UpperAtmo.prototype.clearSky = function() {
  // remove ALL listeners
};

UpperAtmo.prototype.signal = function(register, content) {
  // trigger event
};

UpperAtmo.prototype.respond = function(register, content) {
  // respond to event (use callback)
  // should be able to respond to multiple listeners
  // should handle deflate if balloon listed as one-timer
};

module.exports = UpperAtmo;