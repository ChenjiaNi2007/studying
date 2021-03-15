const text_field = document.getElementById("textfield");
const user_list = document.getElementById("notes");

if(localStorage.getItem("number") == null){
	localStorage.setItem("number","0")
}
for(let i = 1; i <= localStorage.getItem("number"); i++){
	const li = document.createElement('li'); 
 	li.appendChild(document.createTextNode(localStorage.getItem(String(i))));
  	user_list.appendChild(li);
}

function add_on() {
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(`${text_field.value}`));
	user_list.appendChild(li);
	localStorage.setItem("number", String(Number(localStorage.getItem("number"))+1))
	localStorage.setItem(localStorage.getItem("number"), `${text_field.value}`);

	text_field.value = "";
}

function reset() {
	localStorage.clear();
	document.querySelector("ul").innerHTML = "";
}