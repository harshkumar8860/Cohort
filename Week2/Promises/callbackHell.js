function callback() {
    console.log("hi");

}


// console.log("start")
// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//         console.log("hello");
//         setTimeout(function () {
//             console.log("hello there");
//         }, 5000)
//     }, 3000)
// }, 1000);

// console.log("end")



// alternate



// function one(){
//     console.log("Hi");
//     setTimeout(two,3000);
// }

// function two(){
//     console.log("Hello");
//     setTimeout(three,5000);
// }

// function three(){
//     console.log("Hello, There!");

// }

// setTimeout(one,1000);




// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// setTimeoutPromisified(1000).then(function () {
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(function () {
//         console.log("Hello");
//         setTimeoutPromisified(5000).then(function () {
//             console.log("Hello There!");
//         })
//     })
// })


//promise chaining
// setTimeoutPromisified(1000).then(function () {
//     console.log("Hi")
//     return setTimeoutPromisified(3000);
// }).then(function () {
//     console.log("Hello");
//     return setTimeoutPromisified(5000);
// }).then(function () {
//     console.log("Hello There!");
// });



// ASYNC AWAIT


// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("Hi");
//     await setTimeoutPromisified(3000);
//     console.log("Hello");
//     await setTimeoutPromisified(5000);
//     console.log("Hello There");

// }

// solve();
// console.log("Out side the callback hell");


let fs = require('fs')

function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            if (err) {
                reject("File not found");
            } else {
                resolve(data.trim());
            }
        })
    })
}

readFileAsync()
    .then(function (x) {
        console.log("Files has been read " + x);
    }).catch(function (e) {
        console.log(e);
    })