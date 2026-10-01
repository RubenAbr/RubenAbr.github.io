const Projecten = [
    {
        id: 1, 
        naam: "Project 1", 
        beschrijving: "Beschrijving van project 1", 
        afbeelding: "pictures\\project.jpg"
    },
    { 
        id: 2, 
        naam: "Project 2", 
        beschrijving: "Beschrijving van project 2", 
        afbeelding: "pictures\\project.jpg"
    },
    { 
        id: 3, 
        naam: "Project 3", 
        beschrijving: "Beschrijving van project 3", 
        afbeelding: "pictures\\project.jpg"  
    },  
    {
        id: 4, 
        naam: "Project 4", 
        beschrijving: "Beschrijving van project 4", 
        afbeelding: "pictures\\project.jpg"
    },
    {
        id: 5, 
        naam: "Project 5", 
        beschrijving: "Beschrijving van project 5",
        afbeelding: "pictures\\project.jpg"
    },
    {
        id: 6,
        naam: "Project 6", 
        beschrijving: "Beschrijving van project 6",
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

        const titel = document.createElement("h3");
        titel.textContent = project.naam;

        const beschrijving = document.createElement("p");
        beschrijving.textContent = project.beschrijving;

        const afbeelding = document.createElement("img");
        afbeelding.src = project.afbeelding;
        afbeelding.alt = project.naam;

        projectElement.append(titel, beschrijving, afbeelding);
        projectenLijst.appendChild(projectElement);
    });
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