/*
******************************************************
Primitive data type
|
there are 7 categories
String
Number
Boolean
null
undefined
Symbol
BigInt
*******************************************************
Non Primitive data type (Reference type)
|
Array
Objects
Functions
*******************************************************
JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE
*******************************************************
*/

// let a = undefined
// let b;
// // ye upar wale dono ki value undefined hi hogi (dono same chij hai) 
// console.log(a == b);

// let id = Symbol("123")
// let another_id = Symbol("123") // id and another_id ye dono alag alag cheeje hain
// console.log(id == another_id); // gives false because after using Symbol they became different even aftere giving the same values

const bigNumber = 95234523534534534534n
console.log(typeof bigNumber); // gives bigint