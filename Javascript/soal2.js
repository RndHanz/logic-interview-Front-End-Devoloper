// Membalik nilai string menggunakan for loop

function holla(str) {
  let holla = "";
  for (let i = str.length - 1; i >= 0; i--) {
    holla += str[i];
  }
  return holla;
}

console.log(reverseString("hello")); // Output: "olleh"
