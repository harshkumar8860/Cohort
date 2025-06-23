// function waitFor3S(resolve){   // resolve == main
//     console.log(resolve);
//     setTimeout(resolve,3000);
// }

// function main(){
//     console.log("Hii");

// }

// waitFor3S(main);

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
//     // return "Harsh";
// }

// function callback(){
//     console.log("5 seconds have passed")
// }

// setTimeoutPromisified(5000).then(callback);

// let p = setTimeoutPromisified(5000);
// console.log(p); // return the instance of promise class






// function waitFor3S(resolve) {   // resolve == main
//     console.log(resolve);
//     setTimeout(resolve, 3000);
// }

// function setTimeoutPromisified(ms) {
//     return new Promise(waitFor3S);
// }

// function main() {
//     console.log("main is called");

// }

// setTimeoutPromisified(waitFor3S).then(main); // promise based approach

// setTimeout(3000, callback)  // callback based approach






// function random(resolve){ // resolve is also a function
//     // resolve();
//     setTimeout(resolve,3000);
// }

// let p = new Promise(random); // supposed to return you something eventually




// // using the eventual value returned by the promise
// function callback(){
//     console.log("Promise succeded");

// }
// p.then(callback);
// console.log(p);





// PROMISIFIED FS.READ
const fs = require('fs');

// sync

// const content1 = fs.readFileSync("a.txt","utf-8");
// console.log(content1.trim());

// Async

// function print(err, data) {
//     if (err) {
//         console.log("File not found", err);
//     } else {
//         console.log(data.trim());

//     }
// }

// fs.readFile("a.txt", "utf-8", print);


// promise

// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("a.txt", "utf-8", function(err,data){
//         sendTheFinalValueHere(data.trim());
//     })
// }

// function readFile(fileName){
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents){
//     console.log(contents);

// }

// p.then(callback);




// PROMISIFIED SETTIMEOUT

// console.log("start of the file");

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function () {
//         console.log("callback based setTimeout completed");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called");
//     return new Promise(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("timer is done");

// }

// p.then(callback);

// console.log("end of the file");



//ANOTHER EXAMPLE OF PROMISIFIED PROMISE

// console.log("start of the file");

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function () {
//         console.log("callback based setTimeout completed");
//         resolve();
//     }, 3000);
// }

// class Promise2{
//     constructor(fn){
//         this.fn = fn;
//         this.fn(()=>{
//             this.resolve();
//         })
//     }
//     then(callback) {
//         this.resolve = callback;
//     }
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called");
//     return new Promise2(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("callback has been called");

// }

// p.then(callback);

// console.log("end of the file");