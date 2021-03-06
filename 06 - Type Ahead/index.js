const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))

function fetchCities(wordToMatch, cities) {
    const regex = new RegExp(wordToMatch, 'gi');

    return cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex)
    })  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayResults(){
    const matchingResults = fetchCities(this.value, cities)

    const html = matchingResults.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        const Formattedpopulation = numberWithCommas(place.population)
        return `
            <li>
                <span>${cityName}, ${stateName}</span>
                <span>${Formattedpopulation}</span>
            </li>
        `
    }).join('')

    suggestions.innerHTML = html
}

searchInput.addEventListener('change', displayResults)
searchInput.addEventListener('keyup', displayResults)