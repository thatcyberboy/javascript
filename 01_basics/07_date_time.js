//dates

let my_date = new Date()
console.log(my_date.toString())
console.log(my_date.toDateString())
console.log(my_date.toJSON())
console.log(typeof my_date);

// let myCreatedDate1 = new Date(2024, 05, 02) //months start from zero
// let myCreatedDate2 = new Date(2024, 05, 02, 12, 04) // yaha time bhi leta hai
// let myCreatedDate3 = new Date("12-06-2002") //ye MM/DD/YYYY se leta hai
// console.log(myCreatedDate1.toString())
// console.log(myCreatedDate2.toString())
// console.log(myCreatedDate3.toString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);