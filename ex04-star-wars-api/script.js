const starWarsTable = document.getElementById("table");
const btFetch = document.getElementById("fetch");
const btPrevious = document.getElementById("previous");
const btNext = document.getElementById("next");

let people = [{name: "×××××", species: "×××××", birth_year: "×××××", homeworld: "×××××", height: "×××××", gender: "×××××", eye_color: "×××××"}]
let currentPage = "https://swapi.dev/api/people";
let nextPage = null;
let previousPage = null;

let fieldsTranslation = {
    name: "Nome",
    species: "Espécie",
    birth_year: "Ano de Nascimento",
    homeworld: "Planeta Natal",
    height: "Altura",
    gender: "Gênero",
    eye_color: "Cor dos Olhos"
};

const fetchStarWars = () => {
    fetch(currentPage)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        people = data.results;
        nextPage = data.next;
        previousPage = data.previous;
        showStarWarsTable();
    })
    .catch((err) => {
        console.log("Erro recebido: ", err);
    });
};

function showStarWarsTable () {
    btNext.disabled = nextPage == null;
    btPrevious.disabled = previousPage == null;

    starWarsTable.innerHTML = "";

    showStarWarsTable.innerHTML += `<thead><tr>`;

    for (let field in fieldsTranslation) {
        starWarsTable.innerHTML += `<th>${fieldsTranslation[field]}</th>`
    }

    showStarWarsTable.innerHTML += `</tr></thead><tbody>`;

    for (let i = 0; i < people.length; i++) {
        starWarsTable.innerHTML += `<tr>`;

        for (let field in people[i]) {
            starWarsTable.innerHTML += `<td>${people[field]}</td>`
        }

        starWarsTable.innerHTML += `</tr>`;
    }

    starWarsTable.innerHTML += `</tbody>`;
}

const fetchNext = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWars();
};

const fetchPrevious = () => {
    currentPage = previousPage;
    previousPage = null;
    fetchStarWars();
}

btFetch.onclick = fetchStarWars;
btNext.onclick = fetchNext;
btPrevious.onclick = fetchPrevious;