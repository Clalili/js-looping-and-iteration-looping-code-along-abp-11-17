// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names){
  for(let i=0; i < printBadges.length; i++ ){
    console.log(`Welcome ${names[i]}! You are employee ${i+1}`);
  }
  return names;
}

printBadges(names);
