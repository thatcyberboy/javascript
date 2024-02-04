let score = null
let age = true
let marks = "123abc"

console.table([typeof score, typeof age, typeof marks])

let new_score = Number(score)
let new_age = Number(age)
let new_marks = Number(marks)

console.table([typeof new_score, typeof new_age, typeof new_marks])
console.table([new_score, new_age, new_marks])

/*

"33" => 33
"334agfd" => NaN
true => 0
false => 0
null => 0

*/


let is_logged_in = ""
is_logged_in = Boolean(is_logged_in)
console.log(typeof is_logged_in)
console.log(is_logged_in);  

/*

1 -> true
0 -> false
12345 -> true
"" -> false
"dfgfds" -> true

*/


let something = 342;
let something_string = String(something)
console.log(typeof something_string);