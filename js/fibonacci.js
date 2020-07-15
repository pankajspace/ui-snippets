function fib(n) {
  var start = 0;
  var next = 1;
  var final = start + next;
  var fibArr = [];

  fibArr.push(start);
  fibArr.push(next);
  while (n >= 0) {
    start = next;
    next = final;
    final = start + next;
    n--;
    fibArr.push(final);
    // console.log(fibArr);
  }
  console.log(fibArr);
  return fibArr;
}

fib(5);
