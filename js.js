// const text = document.getElementById('color-value')
// const colorButton = document.getElementById('colorButton');
// const body = document.body;


// const colors = ['#fabfb7', '#fdf9c4', '#ffda9e', '#c5c6c8',
//                 '#b2e2f2', '#b0c2f2', '#ffe4e1'];


// function colorFondo() {
    
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const randomColor = colors[randomIndex];
    
//     body.style.backgroundColor = randomColor;
//     text.textContent = randomColor;
//     console.log("The new color is:", randomColor);
// }


// // cambiar 'click'por 'mouseover' o 'mouseenter'
// colorButton.addEventListener('mouseenter', colorFondo);


// REUSAR EL ID DE CAMBIO DE COLOR, CAMBIARLO A CLASS USARLO PARA QUE IMAGENES CAMBIEN 
//EL COLOR DEL FONDO


const pageBody = document.body;
const colorValueSpan = document.getElementById('color-value');
const colorTriggers = document.querySelectorAll('.color-trigger');


 const colors = ['#fabfb7', '#fdf9c4', '#ffda9e',
                '#b2e2f2', '#b0c2f2', '#ffe4e1'];


function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    
    pageBody.style.backgroundColor = randomColor;
    
   
    if (colorValueSpan) {
        colorValueSpan.textContent = randomColor;
    }
}


colorTriggers.forEach(trigger => {
    trigger.addEventListener('mouseover', changeColor);
});