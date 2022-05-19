
window.onload=()=>{
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  const optionsList = document.querySelectorAll(".option");
  const descriptions = document.querySelector(".descriptions")
  descriptions.style.display="none"
  const optionContent = document.querySelectorAll(".radio")
  descriptions.style.display="none;"
  selected.addEventListener("click", () => {
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

