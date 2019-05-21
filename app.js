
// const fs = require('fs');
// const validator = require('validator');
// // console.log(validator.isCreditCard('11111111111111111'));
// // console.log(validator.isEmail('ggg@gmail.com'));

// // const getName = require("./getTouch.js")
// // // fs.writeFileSync("text.txt",'hello');
// // getName('USK');





// let car = {
//     color: 'black',
//     brand: 'Lamborgini',
// }
// const data = JSON.stringify(car);

// console.log(car.color);
// console.log(data);

// let converted = JSON.parse(data);
// console.log(converted);



const fs = require('fs');
let car = {
    color: 'black',
    brand: 'Lamborgini',
}
const data = JSON.stringify(car);
fs.writeFileSync('car.json',data);
const revive = fs.redFileSync('car.json').toString();
console.log(revive);