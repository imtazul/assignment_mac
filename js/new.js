const memory8GBCost = 0;
const memory16GBCost = 180;
const storage256GBCost = 0;
const storage512GBCost = 100;
const storage1TBCost = 180;
const delChargeFee = 0;
const delChargeFee20 = 20;
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const chargeFee = document.getElementById('charge-fee');
const totalPrice = document.getElementById('total-price');
const bestPrice = document.getElementById('best-price');

function macPrice(params) {
	if (params == '8gb') {
		extraMemory.innerText = '0';
		totalPriceOf();
	} else if (params == '16gb') {
		extraMemory.innerText = '180';
	} else if (params == '256gb') {
		extraStorage.innerText = '0';
	} else if (params == '512gb') {
		extraStorage.innerText = '100';
	} else if (params == '1tb') {
		extraStorage.innerText = '180';
	} else if (params == 'free') {
		chargeFee.innerText = '0';
	} else if (params == 'fee20') {
		chargeFee.innerText = '20';
	}
}
function totalPriceOf(param) {
	totalPrice.innerText =
		parseInt(extraMemory.innerText) +
		parseInt(extraStorage.innerText) +
		parseInt(chargeFee.innerText);
	console.log(totalPrice.innerText);
}
