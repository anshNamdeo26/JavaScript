const accountId = 123456;
let accountEmail = "abc@.com";
var accountPassword = "abc12345";
accountCity = "Bhopal";
let accountState;  // this will give undefined

/*
let is block scoped and var is a global scoped
var can be updated and re-declared within its scoped
let can be updated but not re-declared
*/

// accountId = 2
// console.log(accountId); this is not allowed with the constant 
// because constant can not be updated and re-declared.

accountEmail = "xyz@.com";
accountPassword = "qwert1234";
accountCity = "Indore";


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



