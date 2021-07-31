	$(document).ready(function(e){
			let total = 0;
			$(document).on('keypress', ()=>{
				if (event.keyCode == 13) {
					calculate();
					 $('#item').focus();
            		$('#item').select();
				}
			});

			$('#addItem').on('click', ()=>{
				calculate();
			})

			function calculate(){
				let name = $('#item').val();
				let price = $('#price').val();
				let qty = $('#qty').val();
				let subTotal = price*qty;
				$('#add').append(`<tr>
					<td>`+name+`</td>
					<td>`+qty+`</td>
					<td>`+price+`</td>
					<td id="rowTotal">`+subTotal+`</td>
				</tr>`);
				total += subTotal;
				$('#subTotal').html(total);
			}
		})