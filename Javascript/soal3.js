//jumlah angka dalam array

function sumArray(arr) {
  // kode di sini
  let total = 0;
  let numbers = [1, 2, 3, 4, 5];

  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
