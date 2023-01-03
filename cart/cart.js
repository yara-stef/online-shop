const modal = document.getElementById('main');
const selectedProducts = [];


export { modal, selectedProducts };


// const updateShoppingCard = () => {
// 	const productsToBuy = document.getElementById("productsToBuy");
// 	productsToBuy.innerHTML = '';
// 	selectedProducts.forEach(({id, name, price, img}, idx) => {
// 		console.log(id);
    
// const product = document.createElement("li");
// 		product.classList.add(`product_${idx}`, "product");
// 		product.dataset.id = id;
// 		const productPrice = document.createElement("span");
// 		productPrice.innerText = price;
// 		product.appendChild(productPrice);

// 		const label = document.createElement("span");
// 		label.innerText = name;
// 		product.appendChild(label);

// 		const thumbnail = document.createElement("img");
// 		thumbnail.src = img;
// 		product.appendChild(thumbnail);
// productsToBuy.appendChild(product);
// })
// }