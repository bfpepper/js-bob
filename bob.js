//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input === input.toUpperCase() && input.match(/[a-zA-Z]+/)){
    return 'Whoa, chill out!'
  }else if (input.includes("?", input.length-1)){
    return "Sure."
  }else if (!input || !input.match(/[\S]+/)){
    return 'Fine. Be that way!'
  }else{
    return 'Whatever.'
  }
};

module.exports = Bob;
