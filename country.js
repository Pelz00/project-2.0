// const countriesList = document.getElementById('countriesList');
// const countryDetails = document.getElementById('countryDetails');
// const searchInput = document.getElementById('searchInput');

// // Function to display country details
// function showCountryDetails(country) {
//   countryDetails.innerHTML = `<h2>${country.name}</h2>
//                               <p>Capital: ${country.capital}</p>
//                               <p>Population: ${country.population}</p>
//                               <p>Region: ${country.region}</p>
//                               <img src="${country.flag}" alt="${country.name} Flag" width="100">`;
// }

// // Function to fetch and display countries
// async function fetchCountries() {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const countries = await response.json();
  
//   countriesList.innerHTML = '';
//   countries.forEach(country => {
//     const countryElement = document.createElement('div');
//     countryElement.classList.add('country');
//     countryElement.textContent = country.name.common;
//     countryElement.addEventListener('click', () => showCountryDetails(country));
//     countriesList.appendChild(countryElement);
//   });
// }

// fetchCountries();

// // Function to filter countries based on search input
// searchInput.addEventListener('input', () => {
//   const searchText = searchInput.value.toLowerCase();
//   const countryElements = countriesList.querySelectorAll('.country');

//   countryElements.forEach(element => {
//     const countryName = element.textContent.toLowerCase();
//     if (countryName.includes(searchText)) {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   });
// });







// const countriesList = document.getElementById('countriesList');
// const countryDetails = document.getElementById('countryDetails');
// const searchInput = document.getElementById('searchInput');

// // Function to display country details
// function showCountryDetails(country) {
//   countryDetails.innerHTML = `<h2>${country.name}</h2>
//                               <p>Capital: ${country.capital}</p>
//                               <p>Population: ${country.population}</p>
//                               <p>Region: ${country.region}</p>
//                               <img src="${country.flag}" alt="${country.name} Flag">`;
// }

// // Function to fetch and display countries
// async function fetchCountries() {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const countries = await response.json();
  
//   countriesList.innerHTML = '';
//   countries.forEach(country => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = `<h3>${country.name.common}</h3>
//                       <img src="${country.flags.png}" alt="${country.name.common} Flag">
//                       <div class="details"></div>`;
//     card.addEventListener('click', () => showCountryDetails(country));
//     countriesList.appendChild(card);
//   });
// }

// fetchCountries();

// // Function to filter countries based on search input
// searchInput.addEventListener('input', () => {
//   const searchText = searchInput.value.toLowerCase();
//   const cards = countriesList.querySelectorAll('.card');

//   cards.forEach(card => {
//     const countryName = card.querySelector('h3').textContent.toLowerCase();
//     if (countryName.includes(searchText)) {
//       card.style.display = 'block';
//     } else {
//       card.style.display = 'none';
//     }
//   });
// });




const countriesList = document.getElementById('countriesList');
const countryDetails = document.getElementById('countryDetails');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Function to display country details
function showCountryDetails(country) {
  countryDetails.innerHTML = `<div class="card">
                                <h2>${country.name.common}</h2>
                                <img src="${country.flags.png}" alt="${country.name.common} Flag">
                                <div class="details">
                                  <p>Capital: ${country.capital}</p>
                                  <p>Population: ${country.population}</p>
                                  <p>Region: ${country.region}</p>
                                </div>
                              </div>`;
}

// Function to fetch and display countries
async function fetchCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  
  countriesList.innerHTML = '';
  countries.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
                      <img src="${country.flags.png}" alt="${country.name.common} Flag">
                      <h3>${country.name.common}</h3>
                      <p>Capital: ${country.capital}</p>
                      <p>Population: ${country.population}</p>
                      <p>Region: ${country.region}</p>`;
    card.addEventListener('click', () => showCountryDetails(country));
    countriesList.appendChild(card);
  });
}

fetchCountries();

// Function to filter countries based on search input
function filterCountries(searchText) {
  const cards = countriesList.querySelectorAll('.card');

  cards.forEach(card => {
    const countryName = card.querySelector('h3').textContent.toLowerCase();
    if (countryName.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchForm.addEventListener('input', (event) => {
  event.preventDefault();
  const searchText = searchInput.value.toLowerCase();
  filterCountries(searchText);
});


const button = document.getElementById('buttonSub')
button.addEventListener('click', () => {
 
});