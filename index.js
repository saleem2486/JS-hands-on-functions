// Q1:
function sum(){
    console.log(10+20);
}
sum();

// Q2:
function sum1(a,b){
    const result=a+b;
    console.log(`${a}+${b}=${result}`)
}
sum1(3,4);

// Q3:

let hello = "";

        hello = () => {
        return "Hello World!";
                       }
// Q4:
var x = 21;
        var girl = function () {
            console.log(x);
            var x = 20;
        };
        girl ();

//   Q5:      

var x = 21;
    girl ();
    console.log(x)
    function girl() {
        console.log(x);
        var x = 20;
    };
// Q6:
var x = 21;
    a();
    b();
    
      function a() {
        
       x = 20;
      console.log(x);
    };
     function b() {
        
        x = 40;
       console.log(x);
    };
// Q7:
function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));
// Q8:
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));


// Q9:


// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }


// Q10:

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();


// Q11:
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")