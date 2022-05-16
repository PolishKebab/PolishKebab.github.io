const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const desc = document.querySelector(".selected-description")
desc.style.display="none"
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    desc.style.display="block"
    desc.innerHTML=`Nothing written about ${selected.innerText.bold()} yet`
  });
});