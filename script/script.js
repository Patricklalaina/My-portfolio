const showDock = document.querySelector('.show');
const navBar = document.querySelector('.navbar');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');
const content = document.querySelector('.content');

let isActive = false;
const clss = "navbar-active";
const inactiveShow = "<i class=\"fa-solid fa-o\"></i>";
const activeShow = "<i class=\"fa-solid fa-xmark\"></i>";

showDock.addEventListener('click', ()=>{
	isActive = !isActive;
	showDock.innerHTML = ((isActive) ? activeShow: inactiveShow);
	if (isActive)
		navBar.classList.add(clss);
	else
		navBar.classList.remove(clss);
})

home.addEventListener('click', ()=>{
	content.innerHTML = "<h2>Home here!</h2>"
	document.title = 'Mon Portfolio';
})

about.addEventListener('click', ()=>{
	content.innerHTML = "<h2>about here!</h2>"
	document.title = 'A propos de moi';
})

project.addEventListener('click', ()=>{
	content.innerHTML = "<h2>project here!</h2>"
	document.title = 'Mes Projets';
})

contact.addEventListener('click', ()=>{
	content.innerHTML = "<h2>contact here!</h2>"
	document.title = 'Me contacter';
})
