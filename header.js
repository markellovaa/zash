const changeBox = document.getElementById("changeBox");
const city = document.getElementById("city");
let rect = city.getBoundingClientRect(); 

let WIDTH = rect.right - rect.left; //Получить координаты поля город
let myX = rect.left + (WIDTH/2);
let myY = rect.bottom;
changeBox.style.left = `${myX+10}px`; //Расположить по оси x окошко выбора (Да / Изменить)
changeBox.style.top = `${myY+10}px`; //Расположить по оси y окошко выбора (Да / Изменить)
changeBox.style.transform = 'translateX(-50%)';

const changeBoxYes = document.getElementById("changeBoxYes"); //Ваш город?: Да
const changeBoxChange = document.getElementById("changeBoxChange"); //Ваш город?: Сменить

let cityList = ['Москва', 'Санкт-Петербург', 'Владивосток', 
'Волгоград', 'Воронеж', 'Екатеринбург', 'Казань', 
'Красноярск', 'Нижний Новгород', 'Новосибирск', 'Орск', 
'Пермь', 'Ростов-на-Дону', 'Самара', 'Саратов', 'Уфа', 'Хабаровск', 
'Челябинск'];
const popUp = document.getElementById("popUp"); //Блок-меню городов
const popUpClose = document.getElementById("popUpClose"); //Кнопка закрыть
const writingCity = document.getElementById("writingCity"); //Поле города
const foundCity = document.getElementById("foundCity"); // Поле найденных городов

writingCity.addEventListener('input', ()=>{
	let currentCityStr = "";
	cityList.forEach((ct)=>{
		if(ct.toLowerCase().indexOf(writingCity.value.toLowerCase()) != -1 && writingCity.value != ""){
			currentCityStr += `<a href="#">${ct}</a>`;
		}
	});
	foundCity.innerHTML = currentCityStr;
	foundCity.style.display = "flex";
	if(writingCity.value == ""){foundCity.style.display = "none";}
	else{
		let foundLinks = document.querySelectorAll('#foundCity>a'); //Выпадающий список городов
		foundLinks.forEach((e)=>{ //По нажатию на город из выпадающего меню устанавливается город
			e.addEventListener('click', ()=>{
				popUp.style.display = 'none';
				document.getElementById("cityP").innerHTML = e.innerHTML;
				document.getElementById("cityPTablet").innerHTML = e.innerHTML;
			});
		});
	}
});

let innerPopUpA = document.querySelectorAll(".inner-popUp>a"); //Меню городов

innerPopUpA.forEach((e)=>{ //По нажатию на город из статичного меню устанавливается город
	e.addEventListener('click', ()=>{
		popUp.style.display = 'none';
		document.getElementById("cityP").innerHTML = e.innerHTML;
		document.getElementById("cityPTablet").innerHTML = e.innerHTML;
	});
});

popUpClose.addEventListener('click', ()=>{ //Кнопка закрыть меню городов
	popUp.style.display = 'none';
});



changeBoxYes.addEventListener('click', ()=>{ //Оставить город
	changeBox.style.display = 'none';
});
changeBoxChange.addEventListener('click', ()=>{ //Сменить город
	changeBox.style.display = 'none';
	popUp.style.display = 'flex';
});
document.getElementById("cityP").addEventListener('click', ()=>{ //Сменить город из desktop
	changeBox.style.display = 'none';
	popUp.style.display = 'flex';
});
document.getElementById("cityPTablet").addEventListener('click', ()=>{ //Сменить город из tablet
	changeBox.style.display = 'none';
	popUp.style.display = 'flex';
	popUpTablet.classList.remove('opened');
	tabletHamburger.classList.remove('open');
});
const catalogLink = document.getElementById("catalogLink");
const catalogList = document.getElementById("catalogList");
catalogLink.addEventListener('mouseover', ()=>{
	catalogList.style.display = "flex";
});
catalogLink.addEventListener('mouseout', ()=>{
	catalogList.style.display = "none";
});
catalogList.addEventListener('mouseover', ()=>{
		catalogList.style.display = "flex";
});
catalogList.addEventListener('mouseout', ()=>{
		catalogList.style.display = "none";
});
const catalogLinkTablet = document.getElementById('catalogLinkTablet');
const imageCatalogLinkTablet = document.querySelector('#catalogLinkTablet img');
const catalogListTablet = document.getElementById('catalogListTablet');
let down = true;
catalogLinkTablet.addEventListener('click', ()=>{
	catalogListTablet.classList.toggle('opened');
	if(down){
		imageCatalogLinkTablet.setAttribute('src', "up-arrow.png");
		down = false;
	}else{
		imageCatalogLinkTablet.setAttribute('src', "down-arrow.png");
		down = true;
	}
});
function open(){
	document.querySelector('.tabletHamburger').classList.toggle('open');
}
const tabletHamburger = document.querySelector(".tabletHamburger");
const popUpTablet = document.getElementById("popUpTablet");
const closeTablet = document.getElementById("closeTablet");

tabletHamburger.addEventListener('click', ()=>{
	popUpTablet.classList.toggle('opened');
});
closeTablet.addEventListener('click', ()=>{
	popUpTablet.classList.remove('opened');
	tabletHamburger.classList.remove('open');
});

const header = document.getElementById('header');
const headerTablet = document.getElementById('header-tablet');
window.addEventListener('resize', ()=>{ //При изменении масштабов блок выбора двигается
	rect = city.getBoundingClientRect();
	WIDTH = rect.right - rect.left;
	myX = rect.left + (WIDTH/2);
	myY = rect.bottom;
	changeBox.style.left = `${myX+10}px`;
	changeBox.style.top = `${myY+10}px`;
	
	if(window.innerWidth < 1024){
		changeBox.style.display = 'none';
		popUp.style.display = 'none';
		header.style.display = 'none';
		headerTablet.style.display = 'flex';
		
	}
	else{
		header.style.display = 'block';
		headerTablet.style.display = 'none';
		
		popUpTablet.classList.remove('opened');
		tabletHamburger.classList.remove('open');
	}
});
if(window.innerWidth < 1024){
		changeBox.style.display = 'none';
		popUp.style.display = 'none';
		header.style.display = 'none';
		headerTablet.style.display = 'flex';
		
}else{
		header.style.display = 'block';
		headerTablet.style.display = 'none';
		
		popUpTablet.classList.remove('opened');
		tabletHamburger.classList.remove('open');
}