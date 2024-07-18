const container = document.querySelector('.container');
const numSquares = 800;
for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = '#3498db'; 
    });
    square.addEventListener('mouseleave', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#ddd';
        }, 1000);
    });
}
