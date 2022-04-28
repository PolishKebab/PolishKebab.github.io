
window.onload=async()=>{
    const button = document.getElementById("subButton")
    const res = document.getElementById("r")
    button.addEventListener("click",async function(){
        const username = document.getElementById("username")
        const password = document.getElementById("password")
        const usr=await login(username.value,password.value)
        if(!usr){
            res.innerText="Access Denied"
        }
        username.remove()
        password.remove()
        button.remove()
    })
    async function login(name,password){
        const authInfo = [...JSON.parse(readFile("data.json"))]
        const usr=authInfo.filter(r=>(r.username==name&&r.password==password))[0]
        if(usr){
            const userFiles = await loadFiles(name)
            const container = document.getElementById("files")
            container.append(document.createElement("span").innerText=userFiles)
            return usr.accessLevel
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
    async function loadFiles(user){
        const response = await fetch(`https://api.github.com/repos/polishkebab/polishkebab.github.io/contents/files/${user}`,{method:"GET"})
        if(response.status=="404"){
            return "No user folder found, contact the administrator, if you think this is an error"
        }
        const files = JSON.parse(await response.text())
        if(files.lenght==0){
            return "No files uploaded"
        }
        return files.filter(r=>r.path.startsWith(`files/${user}`)).map(r=>r.path.replace(`files/${user}`,""))
    }
}