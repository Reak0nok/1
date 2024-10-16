import localforage from 'localforage';


export async function getProducts() {
	await someNetwork();
	let products = await localforage.getItem('products');
	if (!products) products = [];
	return products;
}

let someCache = {};

async function someNetwork(key) {   
	if (!key) {
		someCache = {};
	}

	if (someCache[key]) {
		return;
	}

	someCache[key] = true;

	return new Promise((res) => {
		setTimeout(res, Math.random() * 700);
})};