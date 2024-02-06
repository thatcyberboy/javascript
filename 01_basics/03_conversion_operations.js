// let score = null
// let age = true
// let marks = "123abc"

// console.table([typeof score, typeof age, typeof marks])

// let new_score = Number(score)
// let new_age = Number(age)
// let new_marks = Number(marks)

// console.table([typeof new_score, typeof new_age, typeof new_marks])
// console.table([new_score, new_age, new_marks])

/*

"33" => 33
"334agfd" => NaN
true => 0
false => 0
null => 0

*/


// let is_logged_in = ""
// is_logged_in = Boolean(is_logged_in)
// console.log(typeof is_logged_in)
// console.log(is_logged_in);  

/*

1 -> true
0 -> false
12345 -> true
"" -> false
"dfgfds" -> true

*/


// let something = 342;
// let something_string = String(something)
// console.log(typeof something_string);


// ************** OPERATIONS ***************** //

// let value = 5
// let neg_value = -value
// console.log(neg_value)

// console.log("1" + 3);
// console.log(1 + "3");
// console.log("1" + 2 + 2);  // gives 122
// console.log(1 + 2 + "3");  // gives 33

// console.log(+true); // gives 1
// console.log(+""); // gives 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

// let game_counter = 100
// game_counter++;
// ++game_counter;
// console.log(game_counter);

let x = 3;
const y = x++; // postfix increament

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // prefix 


console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
