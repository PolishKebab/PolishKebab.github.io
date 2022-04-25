window.onload=()=>{
    const username = prompt("Input username");
    const password = prompt("Input password");
    function readFile(path){
        const fs = new XMLHttpRequest();
        fs.open("GET",path,false)
        fs.send()
        return fs.responseText
    }
    console.log(readFile("test.txt"))
}