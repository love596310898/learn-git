// const arr = [1, 2, 3, 3, [5, 3, 6, 6, 7, [8]]]

// const myFlat = function (arr, res) {
//   arr.forEach(i => {
//     if (Array.isArray(i)) {
//       myFlat(i, res);
//     } else {
//       res.push(i);
//     }
//   });
//   return res;
// }

// const res = [];
// console.log(myFlat(arr, res));

// const mySettled = function(ps) {

//   const p  = new Promise((res,rej) => {

//   })
// }
// class Bus{
//   on(eventName,callback){
//       if(this.eventName) {
//         this.eventName.push(callback);
//       } else {
//         this.eventName = new Array(callback);
//       }
//   }
//   emit(eventName,data){

//   }
//   off(eventName,callback){

//   }
// } 

// function ajax() {
//   return new Promise((resolve, reject) => {
//     reject();
//   });
// }
// ajax().then(() => {
//   console.log(1);
// }).catch(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).catch(() => {
//   console.log(4);
// })