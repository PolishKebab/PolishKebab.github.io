  window.onload=()=>{
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");
  const descriptions = document.querySelector(".descriptions")
  descriptions.style.display="none"
  const optionContent = document.querySelectorAll(".radio")
  descriptions.style.display="none;"
  selected.addEventListener("click", (e) => {
    optionsContainer.classList.toggle("active");
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      descriptions.style.display="block"
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      const x = document.querySelectorAll(".description")
      let selectedOption;
      for(let x of optionContent){
        if(o.contains(x))selectedOption=x
      }
      if(!selectedOption)return;
      const description = document.querySelectorAll(`#${selectedOption.id}`)[1]
      x.forEach(element=>{
        element.style.display="none"
      })
      description.style.display="block"
    });
  });
}
const http = new XMLHttpRequest()
http.open("GET","https://api.github.com/users/polishkebab/repos")
http.onloadend=(e)=>{
    try{
        if(http.responseText.length>0){
            JSON.parse(http.responseText).forEach(async(repo,index)=>{
                const repoName = document.createElement("h1")
                repoName.innerText = repo.name
                const desc = document.createElement("div")
                const gitLink = document.createElement("a")
                gitLink.innerText="Github link"
                gitLink.href=repo.html_url
                gitLink.target="_blank"
                const descText = document.createElement("div")
                descText.append(gitLink)
                desc.append(repoName)
                const http2 = new XMLHttpRequest()
                http2.open("GET",`https://api.github.com/repos/polishkebab/${repo.name}/contents/README.md`)
                http2.onloadend=(e)=>{
                const out = JSON.parse(http2.responseText)
                const descTxt = document.createElement("div")
                if(!out.message){
                  descTxt.innerText = (atob(out.content))
                }else{
                  descTxt.innerText=""
                }
                descText.append(descTxt)
                }
                http2.send()
                desc.classList.add("description")
                desc.id=`bot_${index+1}`
                desc.append(descText)
                document.getElementsByClassName("descriptions")[0].append(desc)
                // desc end
                const option = document.createElement("div")
                option.classList.add("option")
                const input = document.createElement("input")
                input.type="radio"
                input.classList.add("radio")
                input.id=`bot_${index+1}`
                input.name="category"
                const label = document.createElement("label")
                label.for = `bot_${index+1}`
                label.innerText = repo.name
                option.append(input)
                option.append(label)
                document.getElementsByClassName("options-container")[0].append(option)
            }
        )
    }
    }catch(e){
        console.log(e)
    }
    console.log("Stopped loading")

}
http.send()
