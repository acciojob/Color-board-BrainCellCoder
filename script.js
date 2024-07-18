const container = document.querySelector('.container');
const numSquares = 800;
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = getRandomColor(); 
    });
    square.addEventListener('mouseleave', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#ddd';
        }, 1000);
    });
}
