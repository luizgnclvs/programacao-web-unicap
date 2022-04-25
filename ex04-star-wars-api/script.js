const body = document.getElementsByTagName("body");
const starWarsTable = document.getElementById("table");
const btFetch = document.getElementById("fetch");
const btPrevious = document.getElementById("previous");
const btNext = document.getElementById("next");

let people = [{name: "", species: "", birth_year: "", homeworld: "", height: "", gender: "", eye_color: ""}]
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
            console.log("Fetch executado com sucesso");
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

    let head = document.createElement("thead");
    let headRow = document.createElement("tr");

    for (let field in fieldsTranslation) {
        let headCell = document.createElement("th");

        let headStr = `${fieldsTranslation[field]}`;
        console.log(headStr);
        let headText = document.createTextNode(headStr);

        headCell.appendChild(headText);
        headRow.appendChild(headCell);
    }

    starWarsTable.appendChild(head);

    let body = document.createElement("tbody");

    for (let i = 0; i < people.length; i++) {
        let row = document.createElement("tr");

        for (let field in people[i]) {
            let cell = document.createElement("td");

            let str = `${people[field]}`;
            console.log(str);

            let cellText = document.createTextNode(str);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        body.appendChild(row);
    }

    starWarsTable.appendChild(body);

    starWarsTable.setAttribute("border", "2");
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