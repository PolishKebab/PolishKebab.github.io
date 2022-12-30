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

  // Dodaj obsługę zdarzenia zmiany wyboru w menu wyboru
  select.addEventListener("change", (event) => {
    // Pobierz wartość wybranej opcji
    const repoName = event.target.value;
    // Pobierz plik README z wybranego repozytorium
    fetch(`https://api.github.com/repos/polishkebab/${repoName}/contents/README.md`)
      .then((response) => response.json())
      .then((data) => {
        // Wyświetl zawartość pliku README w elemencie div o klasie "select-box"
        const readme = document.querySelector(".select-box");
        readme.innerHTML = atob(data.content);
      });
  });

  const selectBox = document.querySelector(".select-box");
  selectBox.insertBefore(select, selectBox.firstChild);
  select.style.position = "fixed";
});
