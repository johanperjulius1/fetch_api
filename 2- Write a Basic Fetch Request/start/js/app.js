const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');


// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => generateImage(data.message))

function generateImage(data) {
  const html = `
    <img src=${data} alt>
    <p>Click to view image of ${select.value}</p>
  `
  card.innerHTML = html;
}

fetch("https://dog.ceo/api/breeds/list")
  .then(response => response.json())
  .then(data => generateListItems(data.message))

  function generateListItems(data) {
    const items = data.map(item =>`
      <option value='${item}'>${item}</option>
      `
    )
    select.innerHTML = items
  }

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------

