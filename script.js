import { productList, sizes } from './shopping-list/shopping-list.js';


    productList.forEach(({ id, name, price, img, discount }, idx) => {
        
        const products = document.getElementById('product-list');
        products.classList.add('grid-container');
        const product = document.createElement('li');
        product.classList.add(`product_${idx}`, 'product');
        product.dataset.id = id;

        const thumbnail = document.createElement('img');
        thumbnail.src = img;
        product.appendChild(thumbnail);

        const label = document.createElement('span');
        label.innerText = name;
        product.appendChild(label);

        const line = document.createElement('hr');
        line.classList.add('line');
        product.appendChild(line);

        const curency = document.createElement('span');
        curency.innerText = '$';
        product.appendChild(curency);

        const productPrice = document.createElement('span');
        productPrice.innerText = price;
        product.appendChild(productPrice);     
        
        const cheeper = document.createElement('div');
        cheeper.innerText = discount;
        product.appendChild(cheeper);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.classList.add('btn-item');
        product.appendChild(addToCartBtn);

        products.appendChild(product);
    });

const sizeBtnXS = document.createElement('button');
sizeBtnXS.innerText = 'XS';
sizeBtnXS.classList.add('btn-size');
sizes.appendChild(sizeBtnXS);

const sizeBtnS = document.createElement('button');
sizeBtnS.innerText = 'S';
sizeBtnS.classList.add('btn-size');
sizes.appendChild(sizeBtnS);

const sizeBtnM = document.createElement('button');
sizeBtnM.innerText = 'M';
sizeBtnM.classList.add('btn-size');
sizes.appendChild(sizeBtnM);

const sizeBtnML = document.createElement('button');
sizeBtnML.innerText = 'ML';
sizeBtnML.classList.add('btn-size');
sizes.appendChild(sizeBtnML);

const sizeBtnL = document.createElement('button');
sizeBtnL.innerText = 'L';
sizeBtnL.classList.add('btn-size');
sizes.appendChild(sizeBtnL);

const sizeBtnXL = document.createElement('button');
sizeBtnXL.innerText = 'XL';
sizeBtnXL.classList.add('btn-size');
sizes.appendChild(sizeBtnXL);

const sizeBtnXXL = document.createElement('button');
sizeBtnXXL.innerText = 'XXL';
sizeBtnXXL.classList.add('btn-size');
sizes.appendChild(sizeBtnXXL);



// 'use strict';

// const btnsSize = document.querySelectorAll('.btn-size');
// // let index = 0;
// // const backgroundColors = ['black', 'rgb(231, 234, 238)'];
// // const colors = ['white', 'black'];
// const btnsAddToCart = document.querySelectorAll('.btn-item');
// // const addToCartBackground = ['yellow', 'black'];
// // const addToCartColors = ['black', 'white'];
// const cropped = document.querySelector('.cropped-btn');
// const sweatshirt = document.querySelector('.sweatshirt-btn');
// const batman = document.querySelector('.batman-btn');
// const xs = document.querySelector('.btn-xs');
// const s = document.querySelector('.btn-s');
// const m = document.querySelector('.btn-m');
// const ml = document.querySelector('.btn-ml');
// const l = document.querySelector('.btn-l');
// const xl = document.querySelector('.btn-xl');
// const xxl = document.querySelector('.btn-xxl');
// let size = true;
// const itemsFound = document.querySelector('.items-number');

// //btnsSize - це node list, а btnSize - це його елемент. Перетворюємо node list в масив за допомогою Array.from(), 
// // і далі до нього застосовуємо метод масивів map(), який виконує ітерацію кожного елемента.

// Array.from(btnsSize).map(btnSize => {
//     btnSize.addEventListener('click', function () {
//         btnSize.classList.toggle('active');
//     }, false);
// })



// Array.from(btnsAddToCart).map(btnAddToCart => {
//     btnAddToCart.addEventListener('click', function () {
//         btnAddToCart.classList.toggle('active');
//     }, false);
// })

// // Switch the image from front view to back
// cropped.addEventListener('click', function () {
//     document.querySelector('.cropped').classList.remove('hidden');
//     document.querySelector('.cropped-front').classList.add('hidden');
// })
    
// sweatshirt.addEventListener('click', function () {
//     document.querySelector('.sweatshirt-back').classList.remove('hidden');
//     document.querySelector('.sweatshirt-front').classList.add('hidden');
// })

// batman.addEventListener('click', function () {
//     document.querySelector('.batman-back').classList.remove('hidden');
//     document.querySelector('.batman-front').classList.add('hidden');
// })

// // Filter the sizes
// function sizeXS() { 
//     size = !size;
//     const a = document.querySelector('.item1');
//     const b = document.querySelector('.item2');
//     const e = document.querySelector('.item5');
//     const h = document.querySelector('.item8');
//     if (size) { 
//         a.style.display = 'block';
//         b.style.display = 'block';
//         e.style.display = 'block';
//         h.style.display = 'block';
//     } else { 
//         a.style.display = 'none';
//         b.style.display = 'none';
//         e.style.display = 'none';
//         h.style.display = 'none';
//     } 
//     itemsFound.textContent = `5 Product(s) found`;
// }

// function sizeS() { 
//     size = !size;
//     const c = document.querySelector('.item3');
//     const d = document.querySelector('.item4');
//     const g = document.querySelector('.item7');
//     if (size) { 
//         c.style.display = 'block'; 
//         d.style.display = 'block'; 
//         g.style.display = 'block'; 
//     } else { 
//         c.style.display = 'none';
//         d.style.display = 'none';
//         g.style.display = 'none';
//     }      
//     itemsFound.textContent = `6 Product(s) found`;
// }

// function sizeM() { 
//     size = !size;
//     const d = document.querySelector('.item4');
//     const e = document.querySelector('.item5');
//     const f = document.querySelector('.item6');
//     const i = document.querySelector('.item9');
//     if (size) { 
//         d.style.display = 'block';
//         e.style.display = 'block';
//         f.style.display = 'block';
//         i.style.display = 'block';
//     } else { 
//         d.style.display = 'none';
//         e.style.display = 'none';
//         f.style.display = 'none';
//         i.style.display = 'none';
//     } 
//     itemsFound.textContent = `5 Product(s) found`;
// }


// function sizeML() { 
//     size = !size;
//     const a = document.querySelector('.item1');
//     const d = document.querySelector('.item4');
//     const g = document.querySelector('.item7');
//     if (size) { 
//         a.style.display = 'block'; 
//         d.style.display = 'block'; 
//         g.style.display = 'block'; 
//     } else { 
//         a.style.display = 'none';
//         d.style.display = 'none';
//         g.style.display = 'none';
//     } 
//     itemsFound.textContent = `6 Product(s) found`;
// }

// function sizeL() { 
//     size = !size;
//     const d = document.querySelector('.item4');
//     const e = document.querySelector('.item5');
//     const f = document.querySelector('.item6');
//     const i = document.querySelector('.item9');
//     if (size) { 
//         d.style.display = 'block';
//         e.style.display = 'block';
//         f.style.display = 'block';
//         i.style.display = 'block';
//     } else { 
//         d.style.display = 'none';
//         e.style.display = 'none';
//         f.style.display = 'none';
//         i.style.display = 'none';
//     } 
//     itemsFound.textContent = `5 Product(s) found`;
// }

// function sizeXL() { 
//     size = !size;
//     const c = document.querySelector('.item3');
//     const d = document.querySelector('.item4');
//     const g = document.querySelector('.item7');
//     if (size) { 
//         c.style.display = 'block'; 
//         d.style.display = 'block'; 
//         g.style.display = 'block'; 
//     } else { 
//         c.style.display = 'none';
//         d.style.display = 'none';
//         g.style.display = 'none';
//     } 
//     itemsFound.textContent = `6 Product(s) found`;
// }

// function sizeXXL() { 
//     size = !size;
//     const a = document.querySelector('.item1');
//     const d = document.querySelector('.item4');
//     const i = document.querySelector('.item9');
//     if (size) { 
//         a.style.display = 'block'; 
//         d.style.display = 'block'; 
//         i.style.display = 'block'; 
//     } else { 
//         a.style.display = 'none';
//         d.style.display = 'none';
//         i.style.display = 'none';
//     } 
//     itemsFound.textContent = `6 Product(s) found`;
// }

// // Modal
// const modal = document.getElementById('cart');
// const cartBtn = document.querySelector('.shopping-bag');
// const closeModal = document.querySelector('.close');

// cartBtn.addEventListener('click', function () {
//     modal.style.display = 'block';
// }, false);

// closeModal.addEventListener('click', function () {
//     modal.style.display = 'none';
// }, false);

// window.addEventListener('click', function (event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }, false);



// // cart js
// const countOfSelectedProducts = document.getElementById('countOfSelectedProducts');
// const countOfSelectedProductsOuter = document.getElementById('countOfSelectedProductsOuter');
// const addProducts = document.querySelector('.add-products');

// const productList = [
//     {
//         id: 'cropped',
//         name: 'Cropped Stay Groovy off white',
//         price: 10.90,
//         img: "./img/cropped-front.png"
//     },
//     {
//         id: 'cactus',
//         name: 'Basic Cactus White T-shirt',
//         price: 13.25,
//         img: "./img/basic-cactus-front.png"
//     },
//     {
//        id: 'Skater',
//         name: 'Skater Black Sweatshirt',
//         price: 25.90,
//         img: "./img/scater-front.png" 
//     },
//     {
//        id: 'tule',
//         name: 'Black Tule Oversized',
//         price: 29.45,
//         img: "./img/black-tule-front.png" 
//     },
//     {
//        id: 'batman',
//         name: 'Black Batman T-shirt',
//         price: 10.90,
//         img: "./img/black-batman-front.png" 
//     },
//     {
//        id: 'blue',
//         name: 'Blue T-shirt',
//         price: 10.90,
//         img: "./img/blue-front.png" 
//     },
//     {
//        id: 'loose',
//         name: 'Loose Black T-shirt',
//         price: 10.90,
//         img: "./img/loose-front.png" 
//     },
//     {
//        id: 'ringer',
//         name: 'Ringer Hall Pass',
//         price: 10.90,
//         img: "./img/ringer-front.png" 
//     },
//     {
//        id: 'sweatshirt',
//         name: 'Blue Sweatshirt',
//         price: 22.50,
//         img: "./img/blue-sweatshirt-front.png" 
//     }
// ];



// const selectedProducts = [];
// let products, product, productPrice, label, thumbnail, removeProduct, addProduct;


// const shoppingCart = function () {
//     selectedProducts.forEach(({ id, name, price, img }, idx) => {
        
//         products = document.getElementById('products');
//         product = document.createElement('li');
//         product.classList.add(`product_${idx}`, 'product');
//         product.dataset.id = id;

//         productPrice = document.createElement('span');
//         productPrice.innerText = price;
//         product.appendChild(productPrice);

//         label = document.createElement('span');
//         label.innerText = name;
//         product.appendChild(label);

//         thumbnail = document.createElement('img');
//         thumbnail.src = img;
//         product.appendChild(thumbnail);

//         removeProduct = document.createElement('button');
//         removeProduct.innerText = '-';
//         product.appendChild(removeProduct);
    
//         addProduct = document.createElement('button');
//         addProduct.innerText = '+';
//         product.appendChild(addProduct);

//         const elementId = product.dataset.id;

//         const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
     
//         removeProduct.addEventListener('click', () => {
//             const elementId = Number(product.dataset.id);
//             const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
//             selectedProducts.pop(selectedProduct);
//             countOfSelectedProducts.value = selectedProducts.length;
//             countOfSelectedProductsOuter.value = selectedProducts.length;
//         }, false);

//         addProduct.addEventListener('click', () => {
//             const elementId = Number(product.dataset.id);
//             const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
//             selectedProducts.push(selectedProduct);
//             countOfSelectedProducts.value = selectedProducts.length;
//             countOfSelectedProductsOuter.value = selectedProducts.length;
//         }, false);

//         products.appendChild(product);
//     });
// }


// Array.from(btnsAddToCart).map(btnAddToCart => {
//     btnAddToCart.addEventListener('click', function (event) { 
//         const elementId = event.target.parentElement.id;
//         const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
//         selectedProducts.push(selectedProduct);
        
//             shoppingCart();
//             countOfSelectedProducts.value = selectedProducts.length;
//             countOfSelectedProductsOuter.value = selectedProducts.length;
//             addProducts.classList.add('hidden');
//         }, false);
// });
    







