const confirmOption = document.querySelector('.confirm-option');
const shoppingCart = document.querySelector('.confirm-button');
const radios = document.getElementsByName('radio');
const mensal = document.querySelector('.mensal');
const trimestral = document.querySelector('.trimestral');
const anual = document.querySelector('.anual');
const shoppingImg = document.getElementsByName('shopping-img');
let choice = 0

shoppingCart.addEventListener('mouseleave', function(e) {
	e.preventDefault();
	if (choice === 1) {
		let option = mensal.id
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique em CONFIRMAR para escolher as opções de pagamento.';
		mensal.style.backgroundColor = '';
		shoppingCart.innerHTML = 'Confirmar'
	} else if (choice === 2) {
		let option = trimestral.id
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique em CONFIRMAR para escolher as opções de pagamento.';
		trimestral.style.backgroundColor = '';
		shoppingCart.innerHTML = 'Confirmar'
	} else if (choice === 3) {
		let option = anual.id
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique em CONFIRMAR para escolher as opções de pagamento.';
		anual.style.backgroundColor = '';
		shoppingCart.innerHTML = 'Confirmar'
	} else {
		confirmOption.innerHTML = 'Escolha um plano.' 
	}
})

mensal.addEventListener('mousemove', function(e) {
	mensal.style.backgroundColor = '#FFB300';
	mensal.addEventListener('mousedown', function(e) {
		choice = 1
	})
})
mensal.addEventListener('mouseout', function(e) {
	mensal.style.backgroundColor = '';
})

trimestral.addEventListener('mousemove', function(e) {
	trimestral.style.backgroundColor = '#FFB300';
	trimestral.addEventListener('mousedown', function(e) {
		choice = 2
	})
})
trimestral.addEventListener('mouseout', function(e) {
	trimestral.style.backgroundColor = '';
})
anual.addEventListener('mousemove', function(e) {
	anual.style.backgroundColor = '#FFB300';
	anual.addEventListener('mousedown', function(e) {
		choice = 3
	})
})
anual.addEventListener('mouseout', function(e) {
	anual.style.backgroundColor = '';
})



   




