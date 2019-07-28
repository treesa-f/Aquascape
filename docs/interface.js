AOS.init(); 
AOS.init({
	easing: 'ease-in-out',
	duration: 900,
	once: true,
	delay: 200,
});

const ham = document.getElementById('hamburger');
function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
    ham.style.display = 'none';
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
    ham.style.display = 'block';
}

function padZeros(string){
    if (string.toString().length != 2){
        return "0" + string;
    }
    return string;
}
const output = document.getElementById('time');
const date = document.getElementById('date');
let time = new Date();

output.innerText = padZeros(time.getHours()) + ":" + padZeros(time.getMinutes());
console.log(time.getDate());
setInterval(() => {
    time = new Date();
    output.innerText = padZeros(time.getHours()) + ":" + padZeros(time.getMinutes());
}, 60000);

function closeMap(){
    mapHolder.style.display = 'none';
}

const toggleMap = () => {
    mapHolder.style.display = 'block';
}
const mapHolder = document.getElementById('mapHolder');
const showMap = document.getElementById('showMap');
showMap.addEventListener('click', toggleMap);

function closeCust(){
    customiser.style.display = 'none';
}

const toggleCust = () => {
    customiser.style.display = 'block';
}
const customiser = document.getElementById('customiser');
const showCust = document.getElementById('showCust');
showCust.addEventListener('click', toggleCust);


const handleFormChange = (event) => {
    switch (event.target.type){
        case 'color':
            output.style.color = event.target.value;
            date.style.color = event.target.value;
            break;
        case 'radio':
            if (event.target.value == 'yes'){
                date.style.display = 'block';
            } else {
                date.style.display = 'none';
            }
            break;
    }
    console.log(event.target.type);
};
const form = document.getElementById('form');
form.addEventListener('change', handleFormChange);

