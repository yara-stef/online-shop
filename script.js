// 'use strict';

const btnSize = document.querySelector('.btn-size');
let index = 0;
const backgroundColors = ['black', 'rgb(231, 234, 238)'];
const colors = ['white', 'black'];
const btnAddToCart = document.querySelector('.btn-item');
const addToCartBackground = ['yellow', 'black'];
const addToCartColors = ['black', 'white'];
let cart = [];

btnSize.addEventListener('click', function () {
    btnSize.style.backgroundColor = backgroundColors[index];
    btnSize.style.color = colors[index];
    
    index = index >= backgroundColors.length - 1 ? 0 : index + 1;
});

btnAddToCart.addEventListener('click', function () {
    btnAddToCart.style.backgroundColor = addToCartBackground[index];
    btnAddToCart.style.color = addToCartColors[index];

    index = index >= addToCartBackground.length - 1 ? 0 : index + 1;
});
    

