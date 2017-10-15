/* GLOBAL VARIABLES UP HERE */
var toppings = [];
var desserts = [];
var beverages = [];
var toppings = [];
var toppingTypes=[];
var breadTypes = ["white", "wheat", "sourdough", "flatbread", "jalapeno cheddar"];

function AjaxRequest(pUrl, pOnSuccess) {
	this.ajaxInfo = { method: 'GET', url: pUrl, dataType: 'json', success: pOnSuccess };
	this.execute = () => {$.ajax(this.ajaxInfo);}
}

function addPlusButtonEvent (buttonCategory,validation_list) {
	$(`#add-${buttonCategory}`).on('click', () => {
		var name = `#select-${buttonCategory}s`;
		var val = $(name).val();
		var txt = $(`${name} :selected`).text();
		var category = buttonCategory;
		if(validation_list[val]){
			// if(toppingTypes.indexOf(buttonCategory) !== -1)
			// 	category="sandwich";
			$(`#${buttonCategory}-order`).append(`<div><input type="hidden" value="${val}"/>${txt} <span class="remove">[x]</span></div>`);

			$(`#${buttonCategory}-order span:last`).on('click',function() {
				$(this).closest('div').remove()
			});
		}
		else
			alert (`Cannot Add ${buttonCategory.toUpperCase()}`);
		$(name).val("");
	});
}

var initializeToppings = (resp) => {
	resp.forEach((child) => {
		var child_id = `${child._id}`;
		toppings[child_id] = child.name;
		$(`#select-${child.type}s`).append(`<option value="${child._id}">${child.name}</option>`);
		if(toppingTypes.indexOf(child.type) === -1) toppingTypes.push(child.type);
	});

	toppingTypes.forEach((topping) => {
		addPlusButtonEvent(topping,toppings);
	});

	breadTypes.forEach((bread) => {
		$(`#select-bread`).append(`<input type="radio" name="select-bread" value="${bread}"><label for="${bread}">${bread}</label>`);
	});

	$("#select-bread input:nth(0)").prop("checked", true);
} // end of initializeToppings()


var initializeBeverages = (resp) => {
	resp.forEach((child) => {
		var child_id = `${child._id}`;
		beverages[child_id] = child.name;
		$(`#select-beverages`).append(`<option value="${child_id}">${child.name} ($${child.price})</option>`);
	});

	addPlusButtonEvent("beverage",beverages);
}

var initializeDesserts = (resp) => {
	resp.forEach((child) => {
		var child_id = `${child._id}`;
		desserts[child_id] = child.name;
		$(`#select-desserts`).append(`<option value="${child_id}">${child.name} ($${child.price})</option>`);
	});

	addPlusButtonEvent("dessert",desserts);
}

$(function() {
	console.log('Go forth and code!');
	var mainDomain = 'https://mighty-shore-62612.herokuapp.com/api';
	(new AjaxRequest(`${mainDomain}/toppings`, initializeToppings)).execute();
	(new AjaxRequest(`${mainDomain}/desserts`, initializeDesserts)).execute();
	(new AjaxRequest(`${mainDomain}/beverages`, initializeBeverages)).execute();

});
