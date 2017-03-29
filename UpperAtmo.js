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

/*
* handles identifying all balloons watching for signal and passes them to response fn
* also collects args into array and removes one-time-use balloons from array
* @param {string} signal - name of event that has occurred
* @param {undefined} content - arg(s), can be any type depending on what callback accepts
*/
UpperAtmo.prototype.signal = function(signalName, content) {
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
    if(balloons[i].signal === signalName) {
      this.respond(balloons[i].capsule, args);
      if (balloons[i].once === true) {
        toRemoves.push(i);
      }
    }
  }

  // handle removing single-use balloons
  if (toRemoves.length > 0) {
    toRemoves.reverse(); // use indexes back to front so they don't change
    for (var k=0; k < toRemoves.length; k++) {
      balloons.splice(toRemoves[k], 1);
    }
  }
};

/*** private ***/

/*
* sole purpose fn for calling callback (applying args if given)
* @param {function} capsule - bound callback
* @param {array} args - array of arguments for callback (empty array if none)
*/
UpperAtmo.prototype.respond = function(capsule, args) {
  if (args.length === 0) {
    capsule()
  } else {
    capsule.apply(this, args);
  }
};

module.exports = UpperAtmo;