const list = document.querySelector('ul');

fetch('./data.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  for (let i = 0; i < data.length; i++) {
    const category = data[i].category;
    const score = data[i].score;
    const icon = data[i].icon;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <img src="${icon}" alt="${category}" />
    <h2>${category}</h2>
    <p>${score}</p>`;
    list.appendChild(listItem);

    
  }
  })