// console.log(2 == 4);
// console.log(2 >= 4);
// console.log(2 < 4);
// console.log(2 != 4);
// console.log(2 >! 4);


// console.log("2" > 1); // works fine (automatically converts "2" to 2 and then compaires it with 1)
// console.log("04" < 2); // works the same way as above line


// console.log(null > 0); // here null is firstly converted to 0 then comparison has be done
// console.log(null == 0); // "==" dont converts the values thats why gives false
// console.log(null >= 0); // yaha value conversion hota hai
// console.log(null <= 0) // here null is firstly converted to 0 then comparison has be done

// console.log(undefined >= 0); // gives false

/*

in javascript equality check and comparisons works differently
'==' does not convert the values
but other comparisons like '>' , '<' , '>=' , '<=' convert the value then compare it

*/

console.log("4 " == 4); // here it converts "4 " to 4 then compares
console.log("4" === 4); // this is called strict check