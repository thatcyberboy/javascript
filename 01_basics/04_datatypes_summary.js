/*

* Primitive data type -- stored in stack
*
* there are 7 categories
* String
* Number
* Boolean
* null
* undefined
* Symbol
* BigInt


* Non Primitive data type (Reference type) -- stored in heap
* 
* Array
* Objects
* Functions

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

// const bigNumber = 95234523534534534534n
// console.log(typeof bigNumber); // gives bigint


// ----------------------------------------------------//
// ****************** STACK AND HEAP ******************//

/**
 * all the primitive type of data types are stored in stack
 * all the non-premitive or reference type of data types are stored in heap
 * 
 * jab koi primitive ka reference kisi dusre variable ko dete hain to waha uski direct value usko nahi milti
 * uski copy usko di jaati hai
 * lekin non-primitive type wale saare heap me jaate hain
 * to jo value heap me hota hai uska direct reference milta hai
 * agar dusre variable ko heap wale ka reference diya jaye
 * fir dusre variable ki value change ki jaye to pahle wala bhi change ho jata hai
 */

let name1 = "Akash"
let name2 = name1; // here copy of value of name1 is assigned to name2

name2 = "Sharma"
console.log(name1); // here the value of name1 will not change beacause its copy was given to name2
console.log(name2); // only value of name2 will change 



let user_one = {
    email : "user@google.com",
    upi: "user23@apl",
}
let user_two = user_one // here the same reference was assigned to user_two as of user_one

user_two.email = "akash@gmail.com"
console.log(user_one.email); // the email of user_one is also changed because the data was stored in heap and therefore directly referenced
console.log(user_two.email); 