const showDock = document.querySelector('.show');
const navBar = document.querySelector('.navbar');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');
const content = document.querySelector('.content');
const homeInnerHTML = '<div class="homeContainer"> \
			<div class="photo"> \
				<img src="./assets/fidrandr.jpg" alt="profile" id="profile"> \
			</div> \
			<div class="bio"> \
				<h1>Patrick Randriamanambola</h1> \
				<div class="description"> \
					<div class="line"></div> \
					<div class="paragraph"> \
						<div><i class="fa-solid fa-desktop"></i>Desktop Developer</div> \
						<div><i class="fa-solid fa-gamepad"></i>Game Developer</div> \
						<div><i class="fa-solid fa-globe"></i>Web Developer</div>\
					</div>\
				</div>\
				<div class="link">\
					<div class="linkedin netbtn"><i class="fa-brands fa-linkedin"></i> Linkedin</div>\
					<div class="github netbtn"><i class="fa-brands fa-github"></i> Github</div>\
				</div>\
			</div>\
		</div>';
let isActive = false;
const clss = "navbar-active";
const inactiveShow = "<i class=\"fa-solid fa-o\"></i>";
const activeShow = "<i class=\"fa-solid fa-xmark\"></i>";

content.innerHTML = homeInnerHTML;
showDock.addEventListener('click', ()=>{
	isActive = !isActive;
	showDock.innerHTML = ((isActive) ? activeShow: inactiveShow);
	if (isActive)
		navBar.classList.add(clss);
	else
		navBar.classList.remove(clss);
})

home.addEventListener('click', ()=>{
	content.innerHTML = homeInnerHTML;
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

/* Reseau sociaux */
function openLink(url) {
	window.open(url, '_blank');
}
const linkedin = [document.querySelector('.linkedin'), "https://www.linkedin.com/in/patrick-randriamanambola"];
const github = [document.querySelector(".github"), "https://github.com/Patricklalaina"];

linkedin[0].addEventListener('click', ()=>{
	openLink(linkedin[1]);
})

github[0].addEventListener('click', ()=>{
	openLink(github[1]);
})
