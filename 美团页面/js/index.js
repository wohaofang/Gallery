var aDrop = document.getElementsByClassName('dropdown');
var aDropMenu = document.getElementsByClassName('dropdown-menu');
for(var i=0; i<aDrop.length; i++){
	aDrop[i].index = i;
	aDrop[i].onmouseover = function (){
		for(var i=0; i<aDrop.length; i++){
			aDrop[i].classList.remove('dropdown-open');
			aDropMenu[i].style.display = 'none';
		}
		this.classList.add('dropdown-open');
		aDropMenu[this.index].style.display = 'block';
	};
	aDrop[i].onmouseout = function (){
		this.classList.remove('dropdown-open');
		for(var i=0; i<aDrop.length; i++){
			aDropMenu[i].style.display = 'none';
		}
	};
	aDropMenu[i].onmouseout = function (){
		this.style.display = 'none';
	};
}
