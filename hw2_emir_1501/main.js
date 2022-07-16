// LESSON 2
// ASYNK
// SET TIMEOUT

// console.log("ok");
//
// const hi = () => {
//   console.log("hi");
// };
// setTimeout(hi, 2000);

// () => {} анонимная функция

// setTimeout(() => {
//   console.log("he-he");
// }, 3000);

// 1000 = 1 секунда

// SET INTERVAL

// setInterval(() => {
//   console.log("interval");
// }, 2000);

// const sayHi = () => {
//   console.log("hi, dude");
// };
//
// const interval = setInterval(sayHi, 1000);
// // clearInterval(interval);
//
// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// ========

// const init = () => {
//   let name = "OK";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// };
// init();

const func = (num) => {
    const culk = () => {
      console.log(1000 * num);
    };
    culk();
};

func(24);

const funk = (n) => {
    return function (num) {
      return n + num;
    };
};

const addOne = funk(1);
const addTen = funk(10);

console.log(addOne(10));
console.log(addTen(3));

const block = document.querySelector(".block");

let positionX = 0;
let PositionY = 0;

const move = function () {
    let rad = {
        radius : 180,
        speed : 20
    }
    let f = 0;
    let s = 2 * Math.PI / 180
    setInterval(function (){
        f += s;
        block.style.left = 180 + rad.radius * Math.sin(f) + 'px';
        block.style.top = 180 + rad.radius * Math.cos(f) + 'px';
    }, rad.speed)
}

let counter = 0

// const incCounter = setInterval(() => {
//   counter += 1
//   console.log(counter+' Секунд')
// },1000)

function myinterval(){
  counter++;
  console.log(counter +' секунд');
  if( counter >= 30) {
    clearInterval(ctop);
  }}

ctop = setInterval(myinterval,1000);


// const clear = clearInterval(incCounter)

requestAnimationFrame(move)