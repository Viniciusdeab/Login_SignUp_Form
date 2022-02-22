let switchCtn = document.querySelector('#switch-cnt');
let switchC1 = document.querySelector('#switch-c1');
let switchC2 = document.querySelector('#switch-c2');
let switchCircle = document.querySelectorAll('.switch__circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let aContainer = document.querySelectorAll('#a-container');
let bContainer = document.querySelectorAll('#b-container');
const allButtons = document.querySelectorAll('.submit');

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    switchBtn.classList.add('is-gx');
}

let mainF = (e) => {
    for(var i = 0; i < allButtons.length; i++) allButtons[i].addEventListener('click', getButtons);
    for(var i = 0; i < switchBtn.length; i++) switchBtn[i].addEventListener('click', changeForm)
};

window.addEvnetListener('load', mainF)