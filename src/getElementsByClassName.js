// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  //should return a result array of all elements that contains a specific 'className'
  //takes in a className
  //check if element contains that classname
  //need to check if element children have classname as well
  var result = [];

  var classNameDetector = function(element) {

    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }

    if (element.childNodes !== undefined) {
      for (var i = 0; i < element.childNodes.length; i++) {
        classNameDetector(element.childNodes[i]);
      }
    }
  };
  classNameDetector(document.body);
  return result;
};
