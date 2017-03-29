### UpperAtmo: An Event Emitter Above All Others

I suppose you could say it came to me out of the blue.  
We talk about "listeners," "handlers," and "subscribers," but I prefer a visual metaphor.  
<br />
Consider your event-awaiting object as a balloon.  
You can raise and lower the balloon over the rest of your application,
from which vantage it can watch for signals from below.

<h5>Functions:</h5>
* ``` inflate ``` creates your event-awaiting balloon, taking the (string) event name and (function) bound callback function that should be applied at the time of that event.

* ``` deflate ``` removes your event-awaiting balloon when you're done, taking the same two arguments of event name and bound callback function.

* ``` liftOnce ``` is a special way to inflate a balloon for a single use; it removes itself after the event has occurred once. It also takes the event and bound callback as arguments.

* ``` clearSky ``` can be used to remove ALL balloons, eradicating all listeners.
(If there's interest, I'm considering adding functionality to clear out a set of listeners, by class/source, so that you wouldn't have to remove each listener separately if you wanted to remove all listeners set up within a given "this".)

* Finally, use ``` signal ``` to notify the balloons that an event has taken place. The only required argument is the (string) event name that the balloon(s) is/are watching for. Additional arguments (any number of them) can be passed in with it.