# Debug for Meteor

This [Meteor](https://www.meteor.com/) smart package provides support for
the [npm debug](https://www.npmjs.com/package/debug) package.


## Installation

    meteor add robodo:meteor-debug


## Usage, both server and client side



```javascript
var d = debug('orangewise');
d('a debug message');
```


## Server side debug messages

The DEBUG environment variable is then used to enable these based on space or comma-delimited names. Here are some examples:

    # log messages in the orangewise namespace
    DEBUG=orangewise* meteor

    # log all messages
    DEBUG=* meteor


## Client side debug messages

Debug works in the browser as well.

Type this in the console and refresh the page to log messages in the orangewise namespace:

    debug.enable('orangewise*')
    
This will remain until you disable with 

    debug.disable()


### License

MIT

