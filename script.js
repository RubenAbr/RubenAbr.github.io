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

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});