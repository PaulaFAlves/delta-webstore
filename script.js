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
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique no carrinho para escolher as opções de pagamento.';
		mensal.style.backgroundColor = '';
	} else if (choice === 2) {
		let option = trimestral.id
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique no carrinho para escolher as opções de pagamento.';
		trimestral.style.backgroundColor = '';
	} else if (choice === 3) {
		let option = anual.id
		confirmOption.innerHTML = 'Você escolheu o PLANO ' + option.toUpperCase() + '.<br>Clique no carrinhopara escolher as opções de pagamento.';
		anual.style.backgroundColor = '';
	} else {
		confirmOption.innerHTML = 'Escolha um plano.' 
	}
	// choice = 0;
})

mensal.addEventListener('mousemove', function(e) {
	// e.preventDefault();
	mensal.style.backgroundColor = '#FFB300';
	mensal.addEventListener('mousedown', function(e) {
		choice = 1
	})
})
mensal.addEventListener('mouseout', function(e) {
	// e.preventDefault();
	mensal.style.backgroundColor = '';
})

trimestral.addEventListener('mousemove', function(e) {
	// e.preventDefault();
	trimestral.style.backgroundColor = '#FFB300';
	trimestral.addEventListener('mousedown', function(e) {
		choice = 2
	})
})
trimestral.addEventListener('mouseout', function(e) {
	// e.preventDefault();
	trimestral.style.backgroundColor = '';
})
anual.addEventListener('mousemove', function(e) {
	// e.preventDefault();
	
	anual.style.backgroundColor = '#FFB300';
	anual.addEventListener('mousedown', function(e) {
		choice = 3
	})
})
anual.addEventListener('mouseout', function(e) {
	// e.preventDefault();
	anual.style.backgroundColor = '';
})


// var dragMe = document.getElementById("anual"),
//   /* o x inicial do drag*/
//   dragOfX = 0,
//   /* o y inicial do drag */
//   dragOfY = 0;

// /* ao segurar o elemento */
// function dragStart(e) {
//     /* define o x inicial do drag */
//     dragOfX = e.pageX - dragMe.offsetLeft;
//     /* define o y inicial do drag */
//     dragOfY = e.pageY - dragMe.offsetTop;
    
//     /* adiciona os eventos */
//     addEventListener("mousemove", dragMove);
//     addEventListener("mouseup", dragEnd);
// }
    
// /* ao ser arrastado */
// function dragMove(e) {
//     /* atualiza a posição do elemento */
//     dragMe.style.left = (e.pageX - dragOfX) + 'px';
//     dragMe.style.top = (e.pageY - dragOfY) + 'px';
// }
    
// /* ao terminar o drag */
// function dragEnd() {
//     /* remove os eventos */
//     removeEventListener("mousemove", dragMove);
//     removeEventListener("mouseup", dragEnd);
// }
    
// /* adiciona o evento que começa o drag */
// dragMe.addEventListener("mousedown", dragStart);




