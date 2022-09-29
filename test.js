let arr = [];
for (let i = 0; i <=1000; i++) {
  arr.push(Math.round(Math.random() * 1000));
}
console.table(arr);
console.log("Smallest: "+arr.reduce((temp, current) => temp < current?temp:current,arr[0]));
console.log("Largest: "+arr.reduce((temp, current) => temp < current?current:temp,arr[0]));