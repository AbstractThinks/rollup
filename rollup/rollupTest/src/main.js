(function () {
  
  const addArray = arr => {
    const result = arr.reduce((a, b) => a + b, 0);

    return result;
  };

  function foo () {
    console.log( 'this function was included!' );
  }

  function bar () {
    console.log( 'this function was not' );
    baz();
  }

  function baz () {
    console.log( 'neither was this' );
  }
  const result2 = addArray([1, 2, 3, 4]);
  foo();
})();