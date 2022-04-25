window.onload=()=>{
    const username = prompt("Input username");
    const password = prompt("Input password");
    function readFile(file){
        const fs = new XMLHttpRequest();
        fs.open("GET",`https://polishkebab.github.io/files/${file}`,false)
        fs.send()
        return fs.responseText
    }
    const authInfo = readFile("text.json")
    console.log(authInfo)
}