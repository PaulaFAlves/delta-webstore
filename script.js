		const confirmOption = document.querySelector('.confirm-option');
		const confirmButton = document.querySelector('.confirm-button');
		const radios = document.getElementsByName('radio');

		confirmButton.addEventListener('click', function(e) {
			e.preventDefault();
			for (let i = 0; i < radios.length; i++) {
				if (radios[i].checked) {
					let option = radios[i].id 
					confirmOption.innerHTML = 'Você escolhei o PLANO ' + option.toUpperCase() + '.<br>. Clique em confirmar para escolher as opções de pagamento.';
				}
			}
			
		})



