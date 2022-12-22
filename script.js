'use strict';

const btnsSize = document.querySelectorAll('.btn-size');
// let index = 0;
// const backgroundColors = ['black', 'rgb(231, 234, 238)'];
// const colors = ['white', 'black'];
const btnsAddToCart = document.querySelectorAll('.btn-item');
// const addToCartBackground = ['yellow', 'black'];
// const addToCartColors = ['black', 'white'];
const cropped = document.querySelector('.cropped-btn');
const sweatshirt = document.querySelector('.sweatshirt-btn');
const batman = document.querySelector('.batman-btn');
const xs = document.querySelector('.btn-xs');
const s = document.querySelector('.btn-s');
const m = document.querySelector('.btn-m');
const ml = document.querySelector('.btn-ml');
const l = document.querySelector('.btn-l');
const xl = document.querySelector('.btn-xl');
const xxl = document.querySelector('.btn-xxl');
let size = true;
const itemsFound = document.querySelector('.items-number');

//btnsSize - це node list, а btnSize - це його елемент. Перетворюємо node list в масив за допомогою Array.from(), 
// і далі до нього застосовуємо метод масивів map(), який виконує ітерацію кожного елемента.

Array.from(btnsSize).map(btnSize => {
    btnSize.addEventListener('click', function () {
        btnSize.classList.toggle('active');
    // btnSize.style.backgroundColor = backgroundColors[index];
    // btnSize.style.color = colors[index];
    
    // index = index >= backgroundColors.length - 1 ? 0 : index + 1;
    
}, false);
})



Array.from(btnsAddToCart).map(btnAddToCart => {
    btnAddToCart.addEventListener('click', function () {
        btnAddToCart.classList.toggle('active');
    // btnAddToCart.style.backgroundColor = addToCartBackground[index];
    // btnAddToCart.style.color = addToCartColors[index];

    // index = index >= addToCartBackground.length - 1 ? 0 : index + 1;
}, false);
})

cropped.addEventListener('click', function () {
    document.querySelector('.cropped').classList.remove('hidden');
    document.querySelector('.cropped-front').classList.add('hidden');
})
    
sweatshirt.addEventListener('click', function () {
    document.querySelector('.sweatshirt-back').classList.remove('hidden');
    document.querySelector('.sweatshirt-front').classList.add('hidden');
})

batman.addEventListener('click', function () {
    document.querySelector('.batman-back').classList.remove('hidden');
    document.querySelector('.batman-front').classList.add('hidden');
})

// xs.addEventListener('click', function () {
//     if (size) {
//         const item1 = document.querySelector('.item1');
//         const item3 = document.querySelector('.item3');
//         item1.classList.add('hidden');
//         item3.style.display = 'block';
//     } else {
//         item1.classList.remove('hidden');
//         itme3.style.display = 'none';
//     }
// })

// s.addEventListener('click', function () {
//     document.querySelector('.item1').classList.add('hidden');
//     document.querySelector('.item3').classList.add('hidden');
//     document.querySelector('.item4').classList.add('hidden');
//     document.querySelector('.item5').classList.add('hidden');
//     document.querySelector('.item7').classList.add('hidden');
// })

// m.addEventListener('click', function () {
//     document.querySelector('.item1').classList.add('hidden');
//     document.querySelector('.item3').classList.add('hidden');
//     document.querySelector('.item4').classList.add('hidden');
//     document.querySelector('.item7').classList.add('hidden');
// })

function sizeXS() { 
    size = !size;
    const a = document.querySelector('.item1');
    const b = document.querySelector('.item2');
    const e = document.querySelector('.item5');
    const h = document.querySelector('.item8');
    if (size) { 
        a.style.display = 'block';
        b.style.display = 'block';
        e.style.display = 'block';
        h.style.display = 'block';
    } else { 
        a.style.display = 'none';
        b.style.display = 'none';
        e.style.display = 'none';
        h.style.display = 'none';
    } 
    itemsFound.textContent = `5 Product(s) found`;
}

function sizeS() { 
    size = !size;
    const c = document.querySelector('.item3');
    const d = document.querySelector('.item4');
    const g = document.querySelector('.item7');
    if (size) { 
        c.style.display = 'block'; 
        d.style.display = 'block'; 
        g.style.display = 'block'; 
    } else { 
        c.style.display = 'none';
        d.style.display = 'none';
        g.style.display = 'none';
    }      
    itemsFound.textContent = `6 Product(s) found`;
}

function sizeM() { 
    size = !size;
    const d = document.querySelector('.item4');
    const e = document.querySelector('.item5');
    const f = document.querySelector('.item6');
    const i = document.querySelector('.item9');
    if (size) { 
        d.style.display = 'block';
        e.style.display = 'block';
        f.style.display = 'block';
        i.style.display = 'block';
    } else { 
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        i.style.display = 'none';
    } 
    itemsFound.textContent = `5 Product(s) found`;
}


function sizeML() { 
    size = !size;
    const a = document.querySelector('.item1');
    const d = document.querySelector('.item4');
    const g = document.querySelector('.item7');
    if (size) { 
        a.style.display = 'block'; 
        d.style.display = 'block'; 
        g.style.display = 'block'; 
    } else { 
        a.style.display = 'none';
        d.style.display = 'none';
        g.style.display = 'none';
    } 
    itemsFound.textContent = `6 Product(s) found`;
}

function sizeL() { 
    size = !size;
    const d = document.querySelector('.item4');
    const e = document.querySelector('.item5');
    const f = document.querySelector('.item6');
    const i = document.querySelector('.item9');
    if (size) { 
        d.style.display = 'block';
        e.style.display = 'block';
        f.style.display = 'block';
        i.style.display = 'block';
    } else { 
        d.style.display = 'none';
        e.style.display = 'none';
        f.style.display = 'none';
        i.style.display = 'none';
    } 
    itemsFound.textContent = `5 Product(s) found`;
}

function sizeXL() { 
    size = !size;
    const c = document.querySelector('.item3');
    const d = document.querySelector('.item4');
    const g = document.querySelector('.item7');
    if (size) { 
        c.style.display = 'block'; 
        d.style.display = 'block'; 
        g.style.display = 'block'; 
    } else { 
        c.style.display = 'none';
        d.style.display = 'none';
        g.style.display = 'none';
    } 
    itemsFound.textContent = `6 Product(s) found`;
}

function sizeXXL() { 
    size = !size;
    const a = document.querySelector('.item1');
    const d = document.querySelector('.item4');
    const i = document.querySelector('.item9');
    if (size) { 
        a.style.display = 'block'; 
        d.style.display = 'block'; 
        i.style.display = 'block'; 
    } else { 
        a.style.display = 'none';
        d.style.display = 'none';
        i.style.display = 'none';
    } 
    itemsFound.textContent = `6 Product(s) found`;
}

// cart js
const countOfSelectedProducts = document.getElementById('countOfSelectedProducts');

const productList = [
    {
        id: 'cropped',
        name: 'Cropped Stay Groovy off white',
        price: 10.90,
        img: "./img/cropped-front.png"
    },
    {
        id: 'cactus',
        name: 'Basic Cactus White T-shirt',
        price: 13.25,
        img: "./img/basic-cactus-front.png"
    }
];

const selectedProducts = [];

productList.forEach(({id, name, price, img}, idx) => {
    const products = document.getElementById('products');
    const product = document.createElement('li');
    product.classList.add(`product_${idx}`, 'product');
    product.dataset.id = id;
    const productPrice = document.createElement('span');
    productPrice.innerText = price;
    product.appendChild(productPrice);

    const label = document.createElement('span');
    label.innerText = name;
    product.appendChild(label);

    const thumbnail = document.createElement('img');
    thumbnail.src = img;
    product.appendChild(thumbnail);

    btnsAddToCart.addEventListener('click', function () {
        const elementId = product.dataset.id;
        const selectedProduct = productList.find((productToSelect) => productToSelect.id === elementId);
        selectedProducts.push(selectedProduct);
        countOfSelectedProducts.value = selectedProducts.length;
    }, false);

    products.appendChild(product);
})




// // Cart jQuery

// const shoppingCart = (function () {
//     cart = [];

//     // Constructor
//     function Item(name, price, count) {
//         this.name = name;
//         this.price = price;
//         this.count = count
//     }

//     // Save cart
//     function saveCart() {
//         sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//     }

//     // Load cart
//     function loadCart() {
//         cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//     }
//     if (sessionStorage.getItem != null) {
//         loadCart();
//     }

//     const obj = {};

//     // Add to cart
//     obj.addItemToCart = function (name, price, count) {
//         for (const item in cart) {
//             if (cart[item].name === name) {
//                 cart[item].count++;
//                 saveCart();
//                 return;
//             }
//         }
//         const item = new Item(name, price, count);
//         cart.push(item);
//         saveCart();
//     }

//     // Set count for item
//     obj.setCountForItem = function (name, count) {
//         for (const i in cart) {
//             if (cart[i].name === name) {
//                 cart[i].count = count;
//                 break;
//             }
//         }
//     };

//     // Remove item fron cart
//     obj.removeItemFromCart = function (name) {
//         for (const item in cart) {
//             if (cart[item].name === name) {
//                 cart[item].count--;
//                 if (cart[item].name === 0) {
//                     cart.splice(item, 1);
//                 }
//                 break;
//             }
//         }
//         saveCart();
//     }

//     // Remove all items from cart
//     obj.removeItemsFromCartAll = function (name) {
//         for (const item in cart) {
//             if (cart[item].name === name) {
//                 cart.splice(item, 1);
//                 break;
//             }
//         }
//         saveCart();
//     }

//     // Clear cart
//     obj.clearCart = function () {
//         cart =[];
//         saveCart();
//     }

//     // Count cart
//     obj.totalCount = function () {
//         const totalCount = 0;
//         for (const item in cart) {
//             totalCount += cart[item].count;
//         }
//         return totalCount;
//     }

//     // Total cart
//     obj.totalCart = function () {
//         const totalCart = 0;
//         for (const item in cart) {
//             totalCart += cart[item].price * cart[item].count;
//         }
//         return Number(totalCart.toFixed(2));
//     }

//     // List cart
//     obj.listCart = function () {
//         const cartCopy = [];
//         for (i in cart) {
//             item = cart[i];
//             itemCopy = {};
//             for (p in item) {
//                 itemCopy[p] = item[p];
//             }
//             itemCopy.total = Number(item.price * item.count).toFixed(2);
//             cartCopy.push(itemCopy);
//         }
//         return cartCopy;
//     }
//     return obj;
// })();

// // Events
// // Add item
// $('.btn-item').click(function (event) {
//     event.preventDefault();
//     const name = $(this).data('name');
//     const price = Number($())
// })
