document.addEventListener("DOMContentLoaded", () => {
    const select = document.createElement("select");
    select.classList.add("select");
    const selectOption = document.createElement("option");
    selectOption.innerText = "Wybierz repozytorium";
    selectOption.disabled = true;
    selectOption.selected = true;
    select.append(selectOption);
    // Pobierz opcje z API i dodaj je do menu wyboru
    fetch("https://api.github.com/users/polishkebab/repos")
      .then((response) => response.json())
      .then((repos) => {
        repos.forEach((repo) => {
          const option = document.createElement("option");
          option.innerText = repo.name;
          option.value = repo.name;
          select.append(option);
        });
      });
    select.addEventListener("change", (event) => {
      const repoName = event.target.value;
      fetch(`https://api.github.com/repos/polishkebab/${repoName}/contents/README.md`)
        .then((response) => response.json())
        .then((data) => {
          const readme = document.querySelector(".selected");
          readme.innerHTML = atob(data.content);
        });
    });
    const selectBox = document.querySelector(".select-box");
    selectBox.style.color = "white";
    selectBox.append(select)
    // Ustaw kolor tekstu w elemencie div o klasie "select-box" na biały
  });
