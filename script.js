var item_list = document.querySelector(".item-list");
var input_text = document.querySelector(".input_text");

function add_item(){
	var txt = input_text.value;
	if ((typeof(txt)!==undefined) && (txt !== null)){
		if (txt.length == 0)
			return;
		
		
		var icon_inset = document.createElement("i");
		var btn = document.createElement("button");
		var new_item = document.createElement("li");
		icon_inset.className = "fas fa-trash-alt";
		new_item.className = "item";
		
		btn.appendChild(icon_inset);
		new_item.appendChild(document.createTextNode(txt));
		new_item.appendChild(btn);
		item_list.appendChild(new_item);
		
		btn.addEventListener("click", function(){
			new_item.classList.add("deleted");
		});
		new_item.addEventListener("click",function(){
			new_item.classList.toggle("done");
		});
		input_text.value = "";
	}
}

function enter_add(){
	if (event.keyCode == 13)
		add_item();
}