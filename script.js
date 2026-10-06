const Projecten = [
    {
        id: 1, 
        naam: "Project 1", 
        beschrijving: "Beschrijving van project 1", 
        populariteit: 8,
        afbeelding: "pictures\\project.jpg"
    },
    { 
        id: 2, 
        naam: "Project 2", 
        beschrijving: "Beschrijving van project 2", 
        populariteit: 6,
        afbeelding: "pictures\\project.jpg"
    },
    { 
        id: 3, 
        naam: "Project 3", 
        beschrijving: "Beschrijving van project 3", 
        populariteit: 3,
        afbeelding: "pictures\\project.jpg"  
    },  
    {
        id: 4, 
        naam: "Project 4", 
        beschrijving: "Beschrijving van project 4", 
        populariteit: 9,
        afbeelding: "pictures\\project.jpg"
    },
    {
        id: 5, 
        naam: "Project 5", 
        beschrijving: "Beschrijving van project 5",
        populariteit: 5,
        afbeelding: "pictures\\project.jpg"
    },
    {
        id: 6,
        naam: "Project 6", 
        beschrijving: "Beschrijving van project 6",
        populariteit: 7,
        afbeelding: "pictures\\project.jpg"
    }
];

const BlogPosts = [
    {
        id: 1,
        titel: "Blog Post 1",
        inhoud: "Inhoud van blog post 1",
        afbeelding: "pictures\\blog.jpg"
    },
    {
        id: 2,
        titel: "Blog Post 2",
        inhoud: "Inhoud van blog post 2",
        afbeelding: "pictures\\blog.jpg"
    },
    {
        id: 3,
        titel: "Blog Post 3",
        inhoud: "Inhoud van blog post 3",
        afbeelding: "pictures\\blog.jpg"
    },
    {
        id: 4,
        titel: "Blog Post 4",
        inhoud: "Inhoud van blog post 4",
        afbeelding: "pictures\\blog.jpg"
    },
    {
        id: 5,
        titel: "Blog Post 5",
        inhoud: "Inhoud van blog post 5",
        afbeelding: "pictures\\blog.jpg"
    },
    {
        id: 6,
        titel: "Blog Post 6",
        inhoud: "Inhoud van blog post 6",
        afbeelding: "pictures\\blog.jpg"
    }
];

const projectenLijst = document.querySelector("#projectenlijst");

function renderProjecten() {
    projectenLijst.innerHTML = "";
    
    Projecten.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.dataset.id = project.id;
        projectElement.dataset.populariteit = project.populariteit;

        const titel = document.createElement("h3");
        titel.textContent = project.naam;

        const beschrijving = document.createElement("p");
        beschrijving.textContent = project.beschrijving;

        const populariteit = document.createElement("p");
        populariteit.textContent = `Populariteit: ${project.populariteit}`;

        const afbeelding = document.createElement("img");
        afbeelding.src = project.afbeelding;
        afbeelding.alt = project.naam;

        projectElement.append(titel, beschrijving, populariteit, afbeelding);
        projectenLijst.appendChild(projectElement);
    });
}

function sorteerProjectenOpPopulariteit() {
    const projectElementen = Array.from(projectenLijst.querySelectorAll(".project"));
    projectElementen.sort((a, b) =>
        Number(b.dataset.populariteit) - Number(a.dataset.populariteit)
    );
    projectenLijst.append(...projectElementen);
}

function sorteerProjectenOpRecentheid() {
    const projectElementen = Array.from(projectenLijst.querySelectorAll(".project"));
    projectElementen.sort((a, b) =>
        Number(b.dataset.id) - Number(a.dataset.id)
    );
    projectenLijst.append(...projectElementen);
}

if (projectenLijst) {
    renderProjecten();
}

const blogLijst = document.querySelector("#bloglijst");

function renderBlogPosts() {
    blogLijst.innerHTML = "";

    BlogPosts.forEach(blogPost => {
        const blogPostElement = document.createElement("div");
        blogPostElement.classList.add("blog-post");

        const titel = document.createElement("h3");
        titel.textContent = blogPost.titel;

        const inhoud = document.createElement("p");
        inhoud.textContent = blogPost.inhoud;

        const afbeelding = document.createElement("img");
        afbeelding.src = blogPost.afbeelding;
        afbeelding.alt = blogPost.titel;

        blogPostElement.append(titel, inhoud, afbeelding);
        blogLijst.appendChild(blogPostElement);
    });
}

if (blogLijst) {
    renderBlogPosts();
}

const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Naam is vereist';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Geldig e-mailadres is vereist';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Geldig telefoonnummer is vereist';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Bericht is vereist';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

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