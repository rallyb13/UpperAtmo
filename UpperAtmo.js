function UpperAtmo() {
  this.balloons = [];
}

/****************** BALLOON (event-awaiter) HANDLERS *******************/

/*
* adds an event-awaiter object to an array (event-awaiter/listener is a balloon in this extended metaphor)
* @param {string} signal - name that identifies unique event
* @param {function} capsule - the callback (bound to the object it's called on)
*/
UpperAtmo.prototype.inflate = function(signal, capsule) {
  var balloons = this.balloons;
  if (typeof signal === 'string' && typeof capsule === 'function') {
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

/*
* adds an event-awaiter object to an array for one-time use
* note: could have re-used inflate fn (with additional arg), but want separate fn for clarity (and in case of further divergence)
* @param {string} signal - name that identifies unique event
* @param {function} capsule - the callback (bound to the object it's called on)
*/
UpperAtmo.prototype.liftOnce = function(signal, capsule) {
  var balloons = this.balloons;
  if (typeof signal === 'string' && typeof capsule === 'function') {
    balloons.push({
      signal: signal,
      capsule: capsule,
      once: true
    });
  }
};

/*
* basic clearing fn to reset balloons to empty array (thus removing ALL event-awaiters)
* TODO: possible future improvement would be to clear by source (maybe as diff fn)
*/
UpperAtmo.prototype.clearSky = function() {
  this.balloons = [];
};


/*********************** SIGNAL & RESPONSE HANDLING ******************/

UpperAtmo.prototype.signal = function(signal, content) {
  var balloons = this.balloons,
    toRemoves = [],
    args = [];
  
  if (content !== null && typeof content !== "undefined") {
    if (arguments.length > 1){
      for (var j=1; j < arguments.length; j++) {
        args.push(arguments[j]);
      }
    }
  }
  
  for (var i=0; i < balloons.length; i++) {
    if(balloons[i].signal === signal) {
      this.respond(balloons[i].capsule, args);
    }
  }

  // TODO: should handle deflate(s) if once: true, AFTER respond fns  
};

/*** private ***/

UpperAtmo.prototype.respond = function(capsule, args) {
  // respond to event (use callback)
  // should be able to respond to multiple listeners

};

module.exports = UpperAtmo;