const select = document.getElementById("breeds");
const card = document.querySelector(".card");
const form = document.querySelector("form");

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
  return fetch(url)
    .then(res => res.join());
}

fetchData("https://dog.ceo/api/breeds/list").then((data) =>
  generateListItems(data.message)
);

fetchData("https://dog.ceo/api/breeds/image/random").then((data) =>
  generateImage(data.message)
);

function generateListItems(data) {
  const items = data
    .map(
      (item) => `
      <option value='${item}'>${item}</option>
         `).join("");
  select.innerHTML = items;
}


function generateImage(data) {
  const html = `
    <img src=${data} alt>
    <p>Click to view image of ${select.value}</p>
  `;
  card.innerHTML = html;
}

function fetchBreedImage() {
  const breed = select.value;
  const img = card.querySelector("img");
  const p = card.querySelector("p");

  fetchData(`https://dog.ceo/api/breed/${breed}/images/random`).then((data) => {
    img.src = data.message;
    img.alt = "breed";
    p.textContent = `Click to view more ${breed}s`
  });
}

select.addEventListener('change', fetchBreedImage)
card.addEventListener('click', fetchBreedImage)

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// ------------------------------------------
//  POST DATA
// ------------------------------------------
