// Code your solutions in this file
function printBadges(nam){
  for(let i=0; i < nam.length; i++ ){
    console.log(`Welcome ${nam[i]}! You are employee #${i+1}.`);
  }
  return nam;
}

printBadges(names);
