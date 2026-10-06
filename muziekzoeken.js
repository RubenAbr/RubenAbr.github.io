const zoekFormulier = document.querySelector("#zoekFormulier");
const zoekterm = document.querySelector("#zoekterm");
const resultaten = document.querySelector("#resultaten");

function formatteerDuur(duurInMillis) {
    const seconden = Math.floor(duurInMillis / 1000);
    const minuten = Math.floor(seconden / 60);
    const resterendeSeconden = seconden % 60;
    return `${minuten}:${resterendeSeconden.toString().padStart(2, '0')}`;
}

if (zoekFormulier && zoekterm && resultaten) {
    zoekFormulier.addEventListener("submit", function(event) {
        event.preventDefault();

        const zoektermInhoud = zoekterm.value.trim();

        if (zoektermInhoud === "") {
            resultaten.textContent = "Vul een nummer of artiest in.";
            return;
        }

        resultaten.textContent = "Zoeken...";

        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(zoektermInhoud)}&entity=song&limit=10`;
        fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("Zoeken is niet gelukt.");
                }
                return response.json();
            })
            .then(function(data) {
                const nummers = data.results;
                resultaten.replaceChildren();

                if (nummers.length === 0) {
                    resultaten.textContent = "Geen resultaten gevonden.";
                    return;
                }

                nummers.forEach(nummer => {
                    const nummerElement = document.createElement("div");
                    nummerElement.classList.add("nummer");

                    const cover = document.createElement("img");
                    cover.src = nummer.artworkUrl100;
                    cover.alt = `Cover van ${nummer.trackName}`;

                    const titel = document.createElement("h3");
                    titel.textContent = nummer.trackName;

                    const artiest = document.createElement("p");
                    artiest.textContent = `Artiest: ${nummer.artistName}`;

                    const album = document.createElement("p");
                    album.textContent = `Album: ${nummer.collectionName}`;

                    const duur = document.createElement("p");
                    duur.textContent = `Duur: ${formatteerDuur(nummer.trackTimeMillis)}`;

                    nummerElement.append(cover, titel, artiest, album, duur);
                    resultaten.appendChild(nummerElement);
                });
            })
            .catch(function(error) {
                resultaten.textContent = error.message;
            });
    });
}
