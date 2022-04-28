Parse.serverURL = "https://parseapi.back4app.com";

Parse.initialize(
    "1AaxZcCbLvYRIpcTKv2CgjLu5cJYOR1FrWpF7XEU",
    "LwxhH5Dm6vwB7snWBV8myPAQYX7sdf4lUUcDcSIL"
);

const list = document.getElementById("list");
let movies = [];

function showList () {
    list.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        const bulletPt = document.createElement("li");
        
        const film = document.createTextNode(`Filme: ${movies[i].name} (${movies[i].year}) dir. ${movies[i].dir} `);

        if (movies[i].watched) {
            const strikeThrough = document.createElement("s");
            strikeThrough.appendChild(film);
            bulletPt.appendChild(strikeThrough);
        } else {
            bulletPt.appendChild(film);
        }

        list.appendChild(bulletPt);
    }
}

const fetchFilms = async () => {
    const Film = Parse.Object.extend("Films");
    const query = new Parse.Query(Film);

    try {
        const results = await query.find();
        movies = [];

        for (const object of results) {
            const name = object.get("name");
            const dir = object.get("director");
            const year = object.get("releaseYear");
            const watched = object.get("watched");

            movies.push({name,dir, year, watched});
        }

        showList();
    } catch (error) {
        console.error("Error while fetching Films", error);
    }
};

fetchFilms();