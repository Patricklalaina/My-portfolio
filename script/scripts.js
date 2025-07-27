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

const citation = document.querySelector('.presentation');
let presentation = citation.innerText;
let fragPresentation = presentation.split(' ');
let count = 1;
let complet = fragPresentation[0];
citation.innerText = complet;


function display_frag_text() {
            if (count > fragPresentation.length){
                count = 1;
                complet = fragPresentation[0];
            }
            else {
                complet = fragPresentation.slice(0, count).join(' ');
                count++;
            }
            citation.innerHTML = complet;
			setTimeout(() => {
				display_frag_text();
			}, 700);
}

display_frag_text();
home.addEventListener('click', showHome);
about.addEventListener('click', showAbout);
Project.addEventListener('click', showProject);
Contact.addEventListener('click', showContact);