
window.onload=()=>{
    const name = prompt("Input username");
    const pass = prompt("Input password");
    function login(name,password){
        const authInfo = JSON.parse(readFile("data.json"))
            for(let user in authInfo){
                const member = authInfo[user]
                if(member.username==name&&member.password==password){
                    return true
                }
            }
            return false
    }
    function readFile(file){
        const fs = new XMLHttpRequest();
        fs.open("GET",`https://polishkebab.github.io/files/${file}`,false)
            fs.send()
        if(fs.responseText.includes("<!DOCTYPE"))return `File at https://polishkebab.github.io/files/${file} not found.`
        return fs.responseText
    }
    const res = document.getElementById("r")
    if(login(name,pass)){
        res.innerText=`Welcome ${name},\nThis site is still in progress`
    }else{
        res.innerText=`Access denied`
    }
}