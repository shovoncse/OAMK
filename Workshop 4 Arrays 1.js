/*==============================
 Title: Workshop 4: Arrays 1 (Basics)
 Author: Shovan Das
 Date: 29 Sept 2022
*==============================/

/******************************************************************************
  4.1 Task 1: Creating and Looping Through an Array
 *******************************************************************************/

  let intArr = [5,7,32,31,8];
  let dblArr = [12.4,-13.55,67.44];
  let strArr = ["Helsinki","Lissabon","New York","Shanghai"];

  // “The value in the index number 3 is: “ and the value from the string array.
  console.log(`The value in the index number 3 is: ${strArr[3]}`);
  //“The fourth item in the int array is: “ and the value from the int array.
  console.log(`The fourth item in the int array is: ${intArr[3]}`);
  //“In the double array there are xx items” where xx is the size of the array.
  console.log(`In the double array there are ${dblArr.length} items`);
  //The whole content of the integer array with a loop.
  console.log("Integer Array contents");
  intArr.forEach(item => console.log(item));
  //The whole content of the double array from the last item to the first.
  console.log("Double Array contents last to first");
  dblArr.reverse().forEach(item => console.log(item))
  //Lastly, in a loop go through the string array and set all the values to be “empty” and print it out as acomma separated string.
  console.log("New String Array "+strArr.map((item,index) => item[index] = "empty").toString());

/******************************************************************************
  4.2 Task 2: Reverse
 *******************************************************************************/
  process.stdout.write("0 Enter a number: ");
  let count = 0;
  let myArray = [];
  let revStr = "";
  do {
    process.stdin.on('data', userinput => {
      if(Number(userinput.toString().trim()) !== 0){
        count++;
        myArray.push(userinput.toString().trim());
        process.stdout.write(count+" Enter a number: ");
      }else{
        myArray.push(userinput.toString().trim());
        for (let i = myArray.length-1; i >= 0; i--) {
          i?revStr += myArray[i]+ " ":revStr += myArray[i]
        }
        process.stdout.write("Reverse order: "+ revStr);    
        process.exit();
      }
    })
  } while (revStr!=="");
  
 /******************************************************************************
 4.3 Task 3: Average
 *******************************************************************************/
 process.stdout.write("Enter a number: ");
 let count = 0;
 let sum = 0;
 do {
   process.stdin.on('data', userinput => {
     if(isNaN(userinput)){
       a = false;
       process.stdout.write("The average is: "+ (sum/count).toFixed(2));
       sum = 0;
       process.exit();
     }else{
       process.stdout.write("Enter a number: ");
       count++;
       sum += Number(userinput);
     }
   })
 } while (sum > 0);
/******************************************************************************
 4.4 Task 4: Linear Search
 *******************************************************************************/
 let myArr = [55, 23, 6456, 324, 21, 234, 72, 21];
 process.stdout.write("I'm Seraching for: ");
 process.stdin.on('data', userinput => {
   let a = myArr.indexOf(Number(userinput));
   a>=0?console.log("Found in the position: "+a):console.log("Not found");;
   process.exit();
 })
 
 /******************************************************************************
4.5 Task 5: Smallest and Largest with Random Numbers
 *******************************************************************************/
let arr = [];
for (let i = 0; i <=1000; i++) {
  arr.push(Math.round(Math.random() * 1000));
}
console.table(arr);
console.log("Smallest: "+arr.reduce((temp, current) => temp < current?temp:current,arr[0]));
console.log("Largest: "+arr.reduce((temp, current) => temp < current?current:temp,arr[0]));