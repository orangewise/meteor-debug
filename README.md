# Debug for Meteor

This [Meteor](https://www.meteor.com/) smart package provides support for
the [npm debug](https://www.npmjs.com/package/debug) package.


## Installation

    meteor add robodo:meteor-debug


## Usage client side

```javascript
var d = debug('orangewise');
d('server side debug, use debug, not debug ;)');
```


## Usage server side

```javascript
var d = debugs('orangewise');
d('server side debug, use debugs, not debug ;)');
```


### License

This code is published under the [MIT license](LICENSE).

