/*
You will find nothing interesting here
*/
window.onload=()=>{
const password = document.createElement("input")
const username = document.createElement("input")
const sub = document.createElement("button")
const form = document.createElement("form")
form.id="form"
sub.id="submit"
sub.innerText="Login"
password.id="password"
password.type="password"
username.id="username"
const body = document.getElementById("body")
body.append(document.createElement("h6").innerText="Username:")
body.append(username)
body.append(document.createElement("br"))
body.append(document.createElement("h6").innerText="Password:")
body.append(password)
body.append(document.createElement("br"))
body.append(sub)
const submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    const pass = document.getElementById("password").value
    const user = document.getElementById("username").value
    body.innerHTML="";
    if(user!=""){
        alert(`You logged in as ${user}\nNothing here yet.`)
    }

})
}
