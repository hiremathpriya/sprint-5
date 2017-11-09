//First solution

var hash = '#';
for(var i = 0; i <= 7; i++){

    console.log(hash);
hash += '#';
}

var number = 0;
for(var number = 1; number <= 7; number += 1)
console.log(number);


// second solution
for(var i = 1; i <= 100; i++){
  console.log(i);
  if(i % 3 == 0){
    console.log("Fizz");
  }
    else if (i % 5 == 0){
      console.log("Buzz");
    }
  if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
}


  //  Third solution

  var string = "# # # #\n # # # #\n# # # # \n # # # #\n# # # #\n # # # #\n# # # # \n # # # #"
console.log(string);  
