const btn16gb = document.getElementById('btn-16gb');
const btn8gb = document.getElementById('btn-8gb');
const btn256gb = document.getElementById('btn-256gb');
const btn512gb = document.getElementById('btn-512gb');
const btn1tb = document.getElementById('btn-1tb');
const deliveryFree = document.getElementById('delivery-free');
const deliveryCharge = document.getElementById('delivery-charge');
const extraMemory = document.getElementById('extra-memory');
const extraStorage = document.getElementById('extra-storage');
const chargeFee = document.getElementById('charge-fee');
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
const promoCode = document.getElementById('promo-code');
const footerTotal = document.getElementById('footer-total');
const promoCodeInput = document.getElementById('promo-code-input');

btn8gb.addEventListener('click', function () {
	extraMemory.innerText = '0';
	totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(180);
	footerTotal.innerText = parseInt(footerTotal.innerText) - parseInt(180);
});
btn16gb.addEventListener('click', function () {
	extraMemory.innerText = '180';
	totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt('180');
	footerTotal.innerText = parseInt(footerTotal.innerText) + parseInt('180');
	btn16gb.disabled = true;
});
btn256gb.addEventListener('click', function () {
	extraStorage.innerText = '0';
	totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(100);
	footerTotal.innerText = parseInt(footerTotal.innerText) - parseInt(100);
});
btn512gb.addEventListener('click', function () {
	extraStorage.innerText = '100';
	totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt('100');
	footerTotal.innerText = parseInt(footerTotal.innerText) + parseInt('100');
	btn512gb.disabled = true;
});
btn1tb.addEventListener('click', function () {
	extraStorage.innerText = '180';
	totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt('180');
	footerTotal.innerText = parseInt(footerTotal.innerText) + parseInt('180');
	btn1tb.disabled = true;
});
deliveryFree.addEventListener('click', function () {
	chargeFee.innerText = '0';
	totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt('20');
	footerTotal.innerText = parseInt(footerTotal.innerText) - parseInt('20');
});
deliveryCharge.addEventListener('click', function () {
	chargeFee.innerText = '20';
	totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt('20');
	footerTotal.innerText = parseInt(footerTotal.innerText) + parseInt('20');

	deliveryCharge.disabled = true;
});
promoCode.addEventListener('click', function () {
	const promoCodeInputTxt = promoCodeInput.value;
	if (promoCodeInputTxt == 'stevekaku') {
		footerTotal.innerText =
			parseFloat(totalPrice.innerText) - parseFloat(totalPrice.innerText) * 0.2;
		promoCode.disabled = true;
	} else {
		alert('Invalid Promo Code');
	}
	promoCodeInput.value = '';
});
