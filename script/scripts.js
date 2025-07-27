let nameBtn = [
    "Accueil",
    "A propos",
    "Mes Projets",
    "Contact"
]

let home = document.querySelector(".home");
let about = document.querySelector(".about");
let Project = document.querySelector(".projects");
let Contact = document.querySelector(".contact");
let content = document.querySelector(".content");
let homePage = document.querySelector(".homePage");
let aboutPage = document.querySelector(".aboutPage");
let projectsPage = document.querySelector(".projectsPage");
let contactPage = document.querySelector(".contactPage");
let objectHTML = [home, about, Project, Contact];
let allSection = [homePage, aboutPage, projectsPage, contactPage];

for (let i = 0; i < nameBtn.length ; i++){
    objectHTML[i].innerHTML = nameBtn[i];
    if (i == 0)
        allSection[i].style.display = 'flex';
    else
        allSection[i].style.display = 'none';
}

function showHome(){
    for (let i=0; i < objectHTML.length; i++){
        if (i != 0)
            allSection[i].style.display = 'none';
        else
            allSection[i].style.display = 'flex';
    }
}

function showAbout(){
        for (let i=0; i < objectHTML.length; i++){
        if (i != 1)
            allSection[i].style.display = 'none';
        else
            allSection[i].style.display = 'flex';
    }
}

function showProject(){
        for (let i=0; i < objectHTML.length; i++){
        if (i != 2)
            allSection[i].style.display = 'none';
        else
            allSection[i].style.display = 'flex';
    }
}

function showContact(){
        for (let i=0; i < objectHTML.length; i++){
        if (i != 3)
            allSection[i].style.display = 'none';
        else
            allSection[i].style.display = 'flex';
    }
}

home.addEventListener('click', showHome);
about.addEventListener('click', showAbout);
Project.addEventListener('click', showProject);
Contact.addEventListener('click', showContact);