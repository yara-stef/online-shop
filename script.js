import {
    productList, sizes, sizeBtnXS, sizeBtnS, sizeBtnM, sizeBtnML,
    sizeBtnL, sizeBtnXL, sizeBtnXXL, cart
} from './shopping-list/shopping-list.js';

import { modal, selectedProducts } from './cart/cart.js';

const generateProductList = () => {
    productList.forEach(({ id, name, price, img, discount, size }, idx) => {
        
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

        const productSizes = document.createElement('div');
        productSizes.innerText = size;
        productSizes.classList.add('hidden');
        product.appendChild(productSizes);

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.classList.add('btn-item');
        product.appendChild(addToCartBtn);

        addToCartBtn.addEventListener('click', () => {
            addToCartBtn.classList.toggle('active');
            modalParagraph.classList.add('hidden');
            const elementId = product.dataset.id;
            const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
            selectedProducts.push(selectedProduct);
            console.log(selectedProducts);
            cartOutputElement.value = selectedProducts.length;
            totalItemsInCartOutput.value = selectedProducts.length;
            updateShoppingCart();
        }, false);

        products.appendChild(product);
        
       
        
    });
}

generateProductList();

sizeBtnXS.addEventListener('click', (event) => {
            sizeBtnXS.classList.toggle('active');
            const filteredProducts = productList.filter(size => size == Array.from(size).includes('s'));
    generateProductList(filteredProducts);
    console.log(filteredProducts);
        }, false);

// size buttons
sizeBtnXS.innerText = 'XS';
sizeBtnXS.classList.add('btn-size');
sizes.appendChild(sizeBtnXS);

sizeBtnS.innerText = 'S';
sizeBtnS.classList.add('btn-size');
sizes.appendChild(sizeBtnS);

sizeBtnM.innerText = 'M';
sizeBtnM.classList.add('btn-size');
sizes.appendChild(sizeBtnM);

sizeBtnML.innerText = 'ML';
sizeBtnML.classList.add('btn-size');
sizes.appendChild(sizeBtnML);

sizeBtnL.innerText = 'L';
sizeBtnL.classList.add('btn-size');
sizes.appendChild(sizeBtnL);

sizeBtnXL.innerText = 'XL';
sizeBtnXL.classList.add('btn-size');
sizes.appendChild(sizeBtnXL);

sizeBtnXXL.innerText = 'XXL';
sizeBtnXXL.classList.add('btn-size');
sizes.appendChild(sizeBtnXXL);


sizeBtnS.addEventListener('click', () => {
    sizeBtnS.classList.toggle('active');
}, false);

sizeBtnM.addEventListener('click', () => {
    sizeBtnM.classList.toggle('active');
}, false);

sizeBtnML.addEventListener('click', () => {
    sizeBtnML.classList.toggle('active');
}, false);

sizeBtnL.addEventListener('click', () => {
    sizeBtnL.classList.toggle('active');
}, false);

sizeBtnXL.addEventListener('click', () => {
    sizeBtnXL.classList.toggle('active');
}, false);

sizeBtnXXL.addEventListener('click', () => {
    sizeBtnXXL.classList.toggle('active');
}, false);



// cart-button
const cartBtn = document.createElement('button');
cartBtn.classList.add('shopping-bag');
const cartImg = document.createElement('img');
cartImg.src = './img/white-shopping-cart-icon.jpg';
cartImg.classList.add('shopping-bag-img');
cartBtn.appendChild(cartImg);
const cartOutput = document.createElement('div');
cartOutput.classList.add('total-items-in-cart');
cartBtn.appendChild(cartOutput);
const cartOutputElement = document.createElement('output');
cartOutputElement.dataset.id = 'countOfSelectedProductsOuter';
cartOutput.appendChild(cartOutputElement);
cart.appendChild(cartBtn);

cartBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('modal');
    modalWindow.classList.toggle('modal-hidden');
})

// modal window
const modalWindow = document.createElement('div');
modalWindow.classList.add('modal-hidden');
modalWindow.id = 'cart';
modal.appendChild(modalWindow);
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modalWindow.appendChild(modalContent);
const modalHeader = document.createElement('div');
modalHeader.classList.add('modal-header');
modalContent.appendChild(modalHeader);
const modalHeaderImg = document.createElement('img');
modalHeaderImg.src = './img/white-shopping-cart-icon.jpg';
modalHeaderImg.classList.add('shopping-bag-img');
modalHeaderImg.id = 'numberOfSelectedProducts';
modalHeader.appendChild(modalHeaderImg);
const totalItemsInCart = document.createElement('div');
totalItemsInCart.classList.add('total-items-in-cart');
modalHeader.appendChild(totalItemsInCart);
const totalItemsInCartOutput = document.createElement('output');
totalItemsInCartOutput.id = 'countOfSelectedProducts';
totalItemsInCart.appendChild(totalItemsInCartOutput);
const modalTitle = document.createElement('h3');
modalTitle.classList.add('modal-title');
modalTitle.id = 'cart-title';
modalTitle.innerText = 'Cart';
modalHeader.appendChild(modalTitle);
const closeModal = document.createElement('img');
closeModal.classList.add('close');
closeModal.src = './img/close-btn.png';
modalHeader.appendChild(closeModal);
const modalBody = document.createElement('div');
modalBody.classList.add('modal-body');
modalContent.appendChild(modalBody);
const productsElement = document.createElement('ul');
productsElement.id = 'products';
modalBody.appendChild(productsElement);
const modalParagraph = document.createElement('div');
modalParagraph.classList.add('add-products');
modalParagraph.innerText = 'Add some products in the cart :)';
modalBody.appendChild(modalParagraph);
const subtotal = document.createElement('div');
subtotal.innerText = 'Subtotal $';
modalBody.appendChild(subtotal);
const totalCart = document.createElement('span');
totalCart.classList.add('total-cart');
subtotal.appendChild(totalCart);
const modalFooter = document.createElement('div');
modalFooter.classList.add('modal-footer');
modalContent.appendChild(modalFooter);
const checkout = document.createElement('button');
checkout.classList.add('btn-primary');
checkout.innerText = 'CHECKOUT';
modalFooter.appendChild(checkout);

closeModal.addEventListener('click', () => {
    modalWindow.classList.toggle('modal');
    modalWindow.classList.toggle('modal-hidden');
}, false);

window.addEventListener('click', function (event) {
    if (event.target == modalWindow) {
        modalWindow.classList.toggle('modal');
        modalWindow.classList.toggle('modal-hidden');
    }
}, false);

const updateShoppingCart = () => {
    const productsToBuy = document.getElementById('products');
    productsToBuy.innerHTML = '';
    selectedProducts.forEach(({ id, name, price, img }, idx) => {
        const product = document.createElement('li');
        product.classList.add(`product_${idx}`, 'product', 'cartProduct');
        product.dataset.id = id;

        const thumbnail = document.createElement('img');
        thumbnail.src = img;
        thumbnail.classList.add('productImg');
        product.appendChild(thumbnail);

        const label = document.createElement('span');
        label.innerText = name;
        label.classList.add('name');
        product.appendChild(label);

        const curencyCart = document.createElement('span');
        curencyCart.innerText = '$';
        curencyCart.classList.add('productPrice');
        product.appendChild(curencyCart);

        const productPrice = document.createElement('span');
        productPrice.innerText = price;
        productPrice.classList.add('productPrice');
        product.appendChild(productPrice);

        const removeProduct = document.createElement('button');
        removeProduct.innerText = '-';
        removeProduct.classList.add('cartBtns');
        product.appendChild(removeProduct); 
        
        const addProduct = document.createElement('button');
        addProduct.innerText = '+';
        addProduct.classList.add('cartBtns');
        product.appendChild(addProduct);
        
        removeProduct.addEventListener('click', () => {
            const elementId = Number(product.dataset.id);
            const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
            selectedProducts.pop(selectedProduct);
            countOfSelectedProducts.value = selectedProducts.length;
            countOfSelectedProductsOuter.value = selectedProducts.length;
        }, false);

        addProduct.addEventListener('click', () => {
            const elementId = Number(product.dataset.id);
            const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
            selectedProducts.push(selectedProduct);
            countOfSelectedProducts.value = selectedProducts.length;
            countOfSelectedProductsOuter.value = selectedProducts.length;
        }, false);
        productsToBuy.appendChild(product);
    });
}


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
    







