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
        console.log(this);
        const area = this.width * this.height;
        return area;
    }

    paint() {
        // console.log(`Painting with color ${this.color}`);
        console.log("Painting with " + this.color);
        
    }
}

const rect = new Rectangle(2, 4, "red"); // instance/object of the rectangle class
const area = rect.area();
// const paint = rect.paint();
console.log(area);
// console.log(paint);
rect.paint()

