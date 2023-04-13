// On utilise document.querySelector() pour sélectionner l'élément HTML par son ID
const list = document.querySelector("ul");

// On utilise fetch() pour récupérer le document JSON et travailler avec les données
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // On utilise forEach() pour parcourir chaque objet dans le document JSON
    data.forEach((item) => {
      const category = item.category;
      const score = item.score;
      const icon = item.icon;

      // On crée un élément HTML pour afficher les données
      const listItem = document.createElement("li");
      listItem.classList.add("summary-item", `summary-item--${category.toLowerCase()}`);
      listItem.innerHTML = `
        <img src="${icon}" alt="${category} icon">
        <h2 class="summary-category">${category}</h2>
        <p class="summary-score">${score}<span>/100</span></p>
      `;

      // On ajoute l'élément HTML à la liste
      list.appendChild(listItem);
    });
  });
