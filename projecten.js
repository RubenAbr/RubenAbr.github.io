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
