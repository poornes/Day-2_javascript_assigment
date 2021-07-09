for (p=1; p<=100; p++){
  a = p / 8;
  b = p / 15;
  c = p / 4;
  if (Number.isInteger(a)){
    console.log("FizzBuzz")
  }
  else if (Number.isInteger(b)){
    console.log("Fizz")
  }
  else if (Number.isInteger(c)){
    console.log("Buzz")
  }
  else{
    console.log(p)
  }
}