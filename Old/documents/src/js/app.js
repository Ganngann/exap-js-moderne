"use strict"

let
	liens_du_menu = document.querySelectorAll('.slider-menu a'),
	slide = document.querySelector('.slides ul'),
	previous = document.querySelector('.navigation .previous'),
	pause_button = document.querySelector('.navigation .stop'),
	play_button = document.querySelector('.navigation .play'),
	next = document.querySelector('.navigation .next'),
	link_icon = document.querySelectorAll('.icon.icon-info'),
	info_icon = document.querySelectorAll('.icon.icon-info .material-icons'),
	img_figcaption = document.querySelectorAll('figcaption'),
	position = 0,
	play_is_active = false,
	titles = document.querySelectorAll('.slide img'),
	is_running = false;


function display_slide() {
	slide.style.left = '-' + position + '00%';
	document.querySelector('.slider-menu h1').innerText = titles[position].alt;
}

function open_text(i) {
	if (img_figcaption[i].style.right == "0px") {
		img_figcaption[i].style.right = "-20%";
		info_icon[i].innerHTML = "add_circle";
	} else {
		img_figcaption[i].style.right = "0px";
		info_icon[i].innerHTML = "remove_circle";
	}
}

for (let i = 0; i < liens_du_menu.length; i++) {
	link_icon[i].addEventListener('click', function() {
		open_text(i);
	});
	liens_du_menu[i].addEventListener('click', function() {
		position = (i);
		display_slide();
	});
}

previous.addEventListener('click', function() {
	if (position > 0) {
		position = position - 1;
	} else {
		position = (liens_du_menu.length - 1);
	}
	display_slide();
});

function switchtheclass() {
	if (play_is_active) {
		play_button.classList.add('active');
		pause_button.classList.remove('active');
	} else {
		play_button.classList.remove('active');
		pause_button.classList.add('active');
	}
}

function nextslide() {
	if (position < (liens_du_menu.length - 1)) {
		position = position + 1;
	} else {
		position = 0;
	}
	display_slide();
}

function playtheslide() {
	if (play_is_active) {
		is_running = true;
		nextslide();
		setTimeout(function() {
			playtheslide();
		}, 2000);
	} else {
		is_running = false;
	}
}

next.addEventListener('click', function() {
	nextslide();
});

function play() {
	if (play_is_active) {
		play_is_active = false;
	} else if (!is_running) {
		play_is_active = true;
		playtheslide();
	}
	switchtheclass();
}

play_button.addEventListener('click', function() {
	if (!play_is_active) {
		play();
	}
});

pause_button.addEventListener('click', function() {
	if (play_is_active) {
		play();
	}
});

document.onkeydown = function(e) {
	if (e.keyCode == 32) {
		play();
	}
}

display_slide();
