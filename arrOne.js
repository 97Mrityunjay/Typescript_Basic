"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [2, 3, 4, 6];
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(typeof arr);
var arr1 = new Array(2, 3, 4, 5);
console.log(typeof arr1);
console.log(arr1);
var arr2 = arr1;
arr2[4] = 6;
console.log(arr2);
console.log(arr1);
arr2.forEach(function (ele) {
    console.log(ele);
});
var x = 8;
{
    var x_1 = 5;
    console.log(x_1);
}
console.log(x);
fun();
function fun() {
    console.log("fun is called");
}
