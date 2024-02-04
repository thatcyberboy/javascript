const account_id = 1244553
let account_email = "akash@google.com"
var account_passwd = "1234@asdf"
account_city = "Varanasi"
let account_state;

// account_id = 3 // const wali cheeje change nahi hoti

account_email = "sharma@gmail.com"
account_passwd = "1111@1111"
account_city = "mumbai"

console.log(account_id)

/*
prefer not to use var
bacause of the issue caused by the var in block scope 
*/


console.table([account_email, account_passwd, account_id, account_city, account_state])