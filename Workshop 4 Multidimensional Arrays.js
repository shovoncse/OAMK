/*==============================
 Title: Workshop 4: Arrays – Multidimensional Arrays
 Author: Shovan Das
 Date: 30 Sept 2022
*==============================/

/******************************************************************************
  4.6 Task 6: Battleship
 *******************************************************************************/

  let battleField = [
    ['*','','','','*'],
    ['','','','*',''],
    ['','','*','',''],
    ['*','','','*',''],
    ['','*','','','*'],
  ];

  let shipsLeft = 9;
  let count = 0;
  process.stdout.write("Enter x and y coordinates seperated by space: ");

  process.stdin.on('data', userinput => {
    let temp = userinput.toString().trim().split(' ');
    if(battleField[temp[0]][temp[1]] === "*"){
      process.stdout.write("You hit a ship!\n");
      shipsLeft--;
      battleField[temp[0]][temp[1]] = "";
    }else{
      process.stdout.write("Miss!\n");
    }
    if(shipsLeft === 0){
      process.exit();
    }else{
      process.stdout.write(`All ships are sunk! You needed ${count} shots.`);
    }
    count++;
  })
