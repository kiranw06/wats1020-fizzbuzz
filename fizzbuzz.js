// Place your FizzBuzz code here. 

//count numbers 1 through 20 and see if numbers are divisible by 3, 5 or both.

//for each number do the following check:
for( i= 1; i<=100; i++) {
  
  //See if it's divisible by 3
  var fizz = 'Fizz';
  if( i % 3 === 0 ) {
    //If so, see if it's also divisible by 5
    var buzz = 'Buzz';
    if( i % 5 === 0 ) {
      //If divisible by BOTH 3 & 5 print "Fizz-Buzz"
      console.log( fizz + buzz );
    } else {
        // If divisible by ONLY 3 print "Fizz"
        console.log( fizz );
      }
  //See if it's divisible by 5
  } else if( i % 5 === 0 ) {
      //If divisible by 5, print "Buzz."
      console.log( buzz );
  //See if it's NOT divisible by 3 or 5
  } else {
    //If so print number
    console.log( i );
  }
}

