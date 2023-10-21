const title = document.querySelector('.title');
const btn = document.querySelector('#btn');

function bgChange() {

        const red = Math.floor(Math.random() * 250);
        const green = Math.floor(Math.random() * 250);
        const blue = Math.floor(Math.random() * 250);
        
        const bgColor = `rgb(${red},${green},${blue})`
        title.innerHTML = `Background Color: ${bgColor}`

        document.body.style.backgroundColor = bgColor;
}

bgChange()
btn.addEventListener('click', bgChange);
document.body.addEventListener('DOMContentLoaded', bgChange);

