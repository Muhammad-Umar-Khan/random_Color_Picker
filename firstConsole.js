//this is a random color picker;
const buttons = document.querySelectorAll('button');
const H1s = document.querySelectorAll('h1');

const randomColors = () =>{
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;       
}

for(let button of buttons){
    button.addEventListener('click', () =>{
        button.style.backgroundColor = randomColors();
    })
}

for(let H1 of H1s){
    H1.addEventListener('click', () =>{
        H1.style.backgroundColor = randomColors();
    })
}