"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
var signUpUser = function (name, email, isPaid) {
    return "name:".concat(name, " email: ").concat(email, " isPaid: ").concat(isPaid);
};
console.log(addTwo(5));
console.log(getUpper("mrityunjay"));
var userOne = signUpUser("mrityunjay", "mritunjayku99@gmail.com", true);
console.log(userOne);
