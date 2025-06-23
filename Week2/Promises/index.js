// const { log } = require("console");

// const rect = {
//     width : 2,
//     height : 3,
//     color : "red"
// }

// function area(rect){
//     return rect.width * rect. height;
// }

// console.log(area(rect));



// by using class

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    area() {
        // console.log(this);
        const area = this.width * this.height;
        const area2 = () =>{
            return this.width * this.height;
        }
        console.log("area2",area2());
        
        return area;
    }

    paint() {
        // console.log(`Painting with color ${this.color}`);
        console.log("Painting with " + this.color);
        
    }
}

const rect = new Rectangle(2, 4, "red"); // instance/object of the rectangle class
// const area = rect.area();
// const paint = rect.paint();
// console.log(area);
// console.log(paint);
// rect.paint()





const now = new Date(); // new obj of date class
console.log(now.getUTCFullYear()); // called a fn on the object
console.log(now.getTime());
console.log(now.getDate());
console.log(now.getDay());


// let user = {
//     name: "harsh",
//     age: "24"
// }

// console.log(user.name);
// user.name = "Honey";
// console.log(user.name);


const map = new Map(); // js provided class
map.set('name','harsh');
map.set('age',24);
console.log(map.get('name'));
console.log(typeof map.get('age'));

var str = "Vishal";
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
