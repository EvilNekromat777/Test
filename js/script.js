
const buttonItemsDelete = document.querySelectorAll('.item__delete');

function removeItem(evt){
	const targetItem = evt.target.closest('.item');
	targetItem.remove();
}

buttonItemsDelete.forEach((buttonItem) => buttonItem.addEventListener('click', removeItem));

//================================================>

$(document).ready(function() {
	$('.item__sum_minus').click(function () {
		 let $input = $(this).parent().find('input');
		 let count = parseInt($input.val()) - 1;
		 count = count < 1 ? 1 : count;
		 $input.val(count);
		 $input.change();
		 return false;
	});
	$('.item__sum_plus').click(function () {
		 let $input = $(this).parent().find('input');
		 $input.val(parseInt($input.val()) + 1);
		 $input.change();
		 return false;
	});
});
