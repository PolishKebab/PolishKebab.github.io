window.onload=()=>{
    const username = prompt("Input username");
    const password = prompt("Input password");
    function readFile(file){
        const fs = new XMLHttpRequest();
        fs.open("GET",`https://polishkebab.github.io/files/${file}`,false)
        fs.send()
        if(!fs.responseText.includes("<!DOCTYPE html>")){return fs.responseText}else return "Invalid file"
    }
    const authInfo = readFile("text.json")
}