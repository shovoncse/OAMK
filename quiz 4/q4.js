function printReversedArray(array) {
  let str = "";
  for (let i = array.length-1; i >= 0; i--) {
    i?str += array[i]+ " ":str += array[i]
  }
  console.log(str);
}