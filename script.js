'use strict';

const btnsSize = document.querySelectorAll('.btn-size');
let index = 0;
const backgroundColors = ['black', 'rgb(231, 234, 238)'];
const colors = ['white', 'black'];
const btnsAddToCart = document.querySelectorAll('.btn-item');
const addToCartBackground = ['yellow', 'black'];
const addToCartColors = ['black', 'white'];
const cropped = document.querySelector('.cropped-btn');
const sweatshirt = document.querySelector('.sweatshirt-btn');
let cart = [];

//btnsSize - це node list, а btnSize - це його елемент. Перетворюємо node list в масив за допомогою Array.from(), 
// і далі до нього застосовуємо метод масивів map(), який виконує ітерацію кожного елемента.

Array.from(btnsSize).map(btnSize => {
    btnSize.addEventListener('click', function () {
    btnSize.style.backgroundColor = backgroundColors[index];
    btnSize.style.color = colors[index];
    
    index = index >= backgroundColors.length - 1 ? 0 : index + 1;
    
});
})



Array.from(btnsAddToCart).map(btnAddToCart => {
    btnAddToCart.addEventListener('click', function () {
    btnAddToCart.style.backgroundColor = addToCartBackground[index];
    btnAddToCart.style.color = addToCartColors[index];

    index = index >= addToCartBackground.length - 1 ? 0 : index + 1;
});
})

cropped.addEventListener('click', function () {
    document.querySelector('.cropped').classList.remove('hidden');
    document.querySelector('.cropped-front').classList.add('hidden');
})
    
sweatshirt.addEventListener('click', function () {
    document.querySelector('.sweatshirt-back').classList.remove('hidden');
    document.querySelector('.sweatshirt-front').classList.add('hidden');
})
