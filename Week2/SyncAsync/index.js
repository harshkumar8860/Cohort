
// function sum(a,b){
//   return a+b;
// }


// let ans = sum(2,4);
// console.log(ans);


// function sum(a,b){
//   return parseInt(a)+parseInt(b);
// }

// console.log(sum("5",8));

// let n = 10;
// let ans = n*(n+1)/2;
// console.log(ans);

// function loop(n){
//   let summ = 0;
//   for(let i = 1; i <= n; i++){
//     summ += i;
//    }
//   return summ;
// }

// console.log(loop(10));

// function fact(n){
//   let fac = 1
//   for(let i = n; i > 0; i-- ){
//     fac *= i;
//   }
//   return fac;
// }

// console.log(fact(5));



// function sum(a,b){
//     return a+b;
// }

// function subtract(a,b){
//     return a-b;
// }

// function divide(a,b){
//     return a/b;
// }
// function multiply(a,b){
//     return a*b;
// }

// console.log(sum(2,4));
// console.log(subtract(2,4));
// console.log(divide(2,4));
// console.log(multiply(2,4));

// // functional argument / functional programming
// function doOperation(a,b,op){
//     return op(a,b);
// }

// console.log(doOperation(2,4,sum));
// console.log(doOperation(2,4,subtract));
// console.log(doOperation(2,4,divide));
// console.log(doOperation(2,4,multiply));



// const fs = require('fs');

// const content1 = fs.readFile("a.txt","utf-8");
// const content2 = fs.readFileSync("b.txt","utf-8");
// console.log(content1);
// console.log(content2);



// Synchronous JS

// const fs = require('fs');

// const content1 = fs.readFile("a.txt","utf-8");
// const content2 = fs.readFileSync("b.txt","utf-8");
// console.log(content1);
// console.log(content2);


// Asynchronous JS

// const fs = require("fs");

// function print(err,data){
//     if (err) {
//         console.log("File not Found: ",err);    
//     }else{
//         console.log(data);
//     }
// }

// fs.readFile("a.txt","utf-8",print); // async

// fs.readFile("b.txt","utf-8",print); // async

// console.log("Done!!");

// // syntanx of readfile would be4
// function readfile(filePath, encoding, op){
//     // read file
//     op("Error!!", "hi there");
// }




// function timeout(){
//     console.log("click on the button");   
// }

// console.log("Hii");

// setTimeout(timeout,15000);

// console.log("Welcome to loupe");

// let c = 0;
// for(let i=0; i < 1000000000; i++){
//     c +=i;
// }

// console.log(c);
// console.log("expensive operation done");




// synchronous setTimeout

function setTimeOutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if (currentTime.getTime() - startTime.getTime() > timeout) {
            break;
        }
    }
}

setTimeOutSync(1000);

console.log("hi there");