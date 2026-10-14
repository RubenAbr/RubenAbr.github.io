const projectenLijst = document.querySelector("#projectenlijst");

function renderProjecten(projecten) {
    projectenLijst.innerHTML = "";
    
    projecten.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.dataset.id = project.id;
        projectElement.dataset.populariteit = project.populariteit;
        projectElement.dataset.zoektekst = `${project.naam} ${project.beschrijving}`.toLowerCase();

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

function zoekProjecten() {
    const zoekterm = document.querySelector("#zoekProjecten").value.trim().toLowerCase();
    const projectElementen = Array.from(projectenLijst.querySelectorAll(".project"));
    projectElementen.forEach(project => {
        project.style.display = project.dataset.zoektekst.includes(zoekterm) ? "" : "none";
    });
}

function wisZoekopdracht() {
    document.querySelector("#zoekProjecten").value = "";
    zoekProjecten();
}

function fetchProjecten() {
    fetch("projecten.json")
        .then(response => response.json())
        .then(projecten => {renderProjecten(projecten)})
        .catch(error => {
            console.error("Projecten konden niet worden geladen.", error);
            projectenLijst.textContent = "Projecten konden niet worden geladen.";
        });
}

if (projectenLijst) {
    fetchProjecten();
}
