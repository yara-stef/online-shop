// 'use strict';

const btnSize = document.querySelector('.btn-size');
let index = 0;
const backgroundColors = ['black', 'rgb(231, 234, 238)'];
const colors = ['white', 'black'];

btnSize.addEventListener('click', function () {
    btnSize.style.backgroundColor = backgroundColors[index];
    btnSize.style.color = colors[index];
    
    index = index >= backgroundColors.length - 1 ? 0 : index + 1;
});
    

