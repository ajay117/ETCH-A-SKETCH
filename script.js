let container = document.querySelector('.container');
let grid = document.querySelector('input[type="range"]');
let times = Number(prompt('How many boxes you want? (Minimum 1 Maximum 100'));
let resetbutton = document.querySelector('button');


resetbutton.addEventListener('click',reset)
while (!times) {
    alert('You must insert a number between 1 and 100');
    times = Number(prompt('How many boxes you want? (Minimum 1 Maximum 100'));
}
createDivTimes(times);
draw();


//Function Declarations...
function reset() {    
    let allBox = document.querySelectorAll('.box');
    allBox.forEach(item => {
        item.parentElement.removeChild(item);
    });
    times = prompt('How many boxes you want? (Minimum 1 Maximum 100');
    while (!times) {
        alert('You must insert a number between 1 and 100');
        times = Number(prompt('How many boxes you want? (Minimum 1 Maximum 100'));        
    }
    createDivTimes(times);
    draw();
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
        div.style.width = '' + (500 / times) + 'px';
        div.style.height = ''+ (500 / times) + 'px';
        div.setAttribute('class', 'box');
        div.style.boxSizing = 'border-box';
       //  div.style.border = '1px solid black';    
        container.appendChild(div)//;
       }
    }
}
