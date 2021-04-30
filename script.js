let container = document.querySelector('.container');
let grid = document.querySelector('input[type="range"]');
let times = prompt('How many boxes you want?');
let resetbutton = document.querySelector('button');

createDivTimes(times);
draw();


resetbutton.addEventListener('click',reset);

function reset() {
    let allBox = document.querySelectorAll('.box');
    allBox.forEach(item => {
        item.style.backgroundColor = '#ffffff';
    });
}
function draw() {
    let allBox = document.querySelectorAll('.box');
    let colorInput = document.querySelector('input[type="color"]');
    let pencilColor = colorInput.value;
    let draw = false;
    colorInput.addEventListener('change', () => {
        pencilColor = colorInput.value;
    });
    allBox.forEach(item => {  
        item.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = pencilColor;
            draw = true;    
        });
        item.addEventListener('mousemove', (e) => {
            if(draw) {
                e.target.style.backgroundColor = pencilColor;        
            }
        });
        item.addEventListener('mouseup', (e) => {
            if(draw) {
                draw = false;       
            }
        });    
    });
}
function createDivTimes(times) {
    if(times > 100) {
        alert('Cannot select more than 100.');
        return;
    } else {
    //Create 10 * 10 grid first at 650px container..
    for(let i = 0; i < times ** 2; i++) {
        let div = document.createElement('div');
        div.style.width = ''+(650 / times) + 'px';
        div.style.height = ''+(650 / times) + 'px';
        div.setAttribute('class', 'box');
        div.style.boxSizing = 'border-box';
       //  div.style.border = '1px solid black';    
        container.appendChild(div)//;
       }
    }
}
