
const colorButton = document.getElementById('colorButton');
const body = document.body;


const colors = ['#fabfb7', '#fdf9c4', '#ffda9e', '#c5c6c8',
                '#b2e2f2', '#b0c2f2', '#ffe4e1'];


function colorFondo() {
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    body.style.backgroundColor = randomColor;
    console.log("The new color is:", randomColor);
}


// cambiar 'click'por 'mouseover' o 'mouseenter'
colorButton.addEventListener('mouseenter', colorFondo);