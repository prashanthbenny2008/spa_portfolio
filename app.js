const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const resumeDownloadButton = document.querySelector('.downloadResume');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgba(31, 8, 10, 0.9)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

resumeDownloadButton.addEventListener('click', () => {
	try{
		var link = document.createElement("a");
		link.download = 'PrashanthBennyKoryar.pdf'; //Downloaded file name
		link.href = './resources/Resume.pdf'; //Name of the file in the resources folder
		link.target = '_blank'
		link.click();
	}
	catch(ex){ console.error(ex); }
});
