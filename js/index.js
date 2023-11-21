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
        <p class="summary-category">${category}</p>
        <p class="summary-score">${score}<span class="summary-score-total"> / 100</span></p>
      `;

      // On ajoute l'élément HTML à la liste
      list.appendChild(listItem);

      // On sélectionne le paragraphe avec la classe "summary-category" et on lui ajoute la classe de réaction
      const categoryParagraph = listItem.querySelector(".summary-category");
      categoryParagraph.classList.add(`summary-category--${category.toLowerCase()}`);
    });
  });
