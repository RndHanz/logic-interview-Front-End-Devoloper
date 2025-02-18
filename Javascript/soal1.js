function test() {
  var a = 1;
  var b = 2;

  console.log("Hasil a = ", a);
  console.log("Hasil b = ", b);

  a = b;
  b -= a + -1;

  console.log("Final a = ", a);
  console.log("Final b = ", b);
}

test();
