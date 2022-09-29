function average(array) {
  let sum = 0;
  array.forEach(element => sum += element);
  console.log(sum/array.length);
}