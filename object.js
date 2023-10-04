const myObject = {
    b: 2,
    a: 1,
    c: 3
  };
  
  for (const key in myObject) {
    console.log(key); // The order of output is not guaranteed: b, a, c or a, b, c or c, b, a
  }
