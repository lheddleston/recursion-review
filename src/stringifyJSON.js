// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // stringify should take any type of object
  // take object and return string
  // ignore functions

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'function') { return '{}'; }
  if (Array.isArray(obj)) {
    var result = [];
    if (obj.length === 0) { return '[]'; } else {
      for (i = 0; i < obj.length; i++) {
        result.push(stringifyJSON(obj[i]));
      }
      return '[' + result + ']';
    }
  }

  if (typeof obj === 'object') {
    if ((Object.keys(obj).length === 0)) { return '{}'; }
    var result = [];
    for (var key in obj) {
      if (obj[key] === undefined) { return '{}'; }
      if ( typeof obj[key] !== 'function' ) {
        var value = stringifyJSON(obj[key]);
        var stringKey = stringifyJSON(key);
        result.push(stringKey + ':' + value);
      }
    }
    return '{' + result + '}';
  }

};
