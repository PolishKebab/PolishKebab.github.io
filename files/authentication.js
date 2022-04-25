
window.onload=()=>{
    const button = document.getElementById("subButton")
    const res = document.getElementById("r")
    button.addEventListener("click",function(){
        const username = document.getElementById("username")
        const password = document.getElementById("password")
        console.log(username.value,password.value)
        const usr=login(username.value,password.value)
        console.log(usr)
        if(usr){
            localStorage.setItem("accessLvl",usr)
            res.innerText=`Welcome ${username}, this is the admin portal`
        }else{
            res.innerText="Access Denied"
        }
        username.remove()
        password.remove()
        button.remove()
    })
    function login(name,password){
        const authInfo = JSON.parse(readFile("data.json"))
            for(let user in authInfo){
                const member = authInfo[user]
                if(member.username==name&&member.password==password){
                    console.log(member)
                    return member.accessLevel
                }
            }
            return null
    }
    function readFile(file){
        const fs = new XMLHttpRequest();
        fs.open("GET",`https://polishkebab.github.io/files/${file}`,false)
            fs.send()
        if(fs.responseText.includes("<!DOCTYPE"))return `File at https://polishkebab.github.io/files/${file} not found.`
        return fs.responseText
    }
}