const productList = [
    {
        id: 'cropped',
        name: 'Cropped Stay Groovy off white',
        price: 10.90,
        img: "./img/cropped-front.png",
        discount: 'or 9 x$1.21',
        size: ['xs', 's', 'm']
    },
    {
        id: 'cactus',
        name: 'Basic Cactus White T-shirt',
        price: 13.25,
        img: "./img/basic-cactus-front.png",
        discount: 'or 3 x$4.42',
        size: ['s', 'm', 'l', 'xxl']
    },
    {
       id: 'Skater',
        name: 'Skater Black Sweatshirt',
        price: 25.90,
        img: "./img/scater-front.png",
        discount: 'or 12 x$2.16',
        size: ['m', 'ml', 'l']
    },
    {
       id: 'tule',
        name: 'Black Tule Oversized',
        price: 29.45,
        img: "./img/black-tule-front.png",
        discount: 'or 5 x$5.89',
        size: ['xs', 's', 'm', 'xxl']
    },
    {
       id: 'batman',
        name: 'Black Batman T-shirt',
        price: 10.90,
        img: "./img/black-batman-front.png",
        discount: 'or 9 x$1.21',
        size: ['s', 'm', 'ml', 'xl']
    },
    {
       id: 'blue',
        name: 'Blue T-shirt',
        price: 10.90,
        img: "./img/blue-front.png",
        discount: 'or 9 x$1.21',
        size: ['xs', 's', 'm']
    },
    {
       id: 'loose',
        name: 'Loose Black T-shirt',
        price: 10.90,
        img: "./img/loose-front.png",
        discount: 'or 9 x$1.21',
        size: ['ml', 'l', 'xl']

    },
    {
       id: 'ringer',
        name: 'Ringer Hall Pass',
        price: 10.90,
        img: "./img/ringer-front.png",
        discount: 'or 9 x$1.21',
        size: ['xs', 's', 'm']
    },
    {
       id: 'sweatshirt',
        name: 'Blue Sweatshirt',
        price: 22.50,
        img: "./img/blue-sweatshirt-front.png",
        discount: 'or 9 x$1.21',
        size: ['xl', 'xxl']
    }
];

const sizes = document.getElementById('sidebar');
const sizeBtnXS = document.createElement('button');
const sizeBtnS = document.createElement('button');
const sizeBtnM = document.createElement('button');
const sizeBtnML = document.createElement('button');
const sizeBtnL = document.createElement('button');
const sizeBtnXL = document.createElement('button');
const sizeBtnXXL = document.createElement('button');
let size = true;


export { productList, sizes, sizeBtnXS, sizeBtnS, sizeBtnM, sizeBtnML, sizeBtnL, sizeBtnXL, sizeBtnXXL, size };