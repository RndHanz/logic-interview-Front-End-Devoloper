// memperbaiki doble array

function removeDuplicates(arr) {
  // kode di sini
  var arr = [1, 2, 2, 3, 4, 4, 5];
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
