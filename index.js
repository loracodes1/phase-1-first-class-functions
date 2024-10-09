function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  function returnsANamedFunction() {
    // Define the named function
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction; // Return the named function itself
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  