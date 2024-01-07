function addTwo(num:number):number{
   
   return num+2;
}
function getUpper(val:string):string{
   return val.toUpperCase();
}
let signUpUser = (name:string, email:string, isPaid:boolean):string => {
    return `name:${name} email: ${email} isPaid: ${isPaid}`;
}
console.log(addTwo(5));
console.log(getUpper("mrityunjay"));
let userOne = signUpUser("mrityunjay", "mritunjayku99@gmail.com", true);
console.log(userOne);

export{}