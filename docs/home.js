AOS.init(); 
AOS.init({
	easing: 'ease-in-out',
	duration: 900,
	once: true,
	delay: 200,
});

const login = document.getElementById("login");
const loginScreen = document.getElementById("loginScreen");
const cancel = document.getElementById('cancel');
const form = document.getElementById('form');
const toggleLogin = () => {
    loginScreen.classList.toggle('display');
};
login.addEventListener('click', toggleLogin);

cancel.addEventListener('click', toggleLogin);
