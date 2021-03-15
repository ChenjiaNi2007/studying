text_area = document.querySelector("#text_area")

for(let i = 1; i <= localStorage.getItem("number"); i++){
	const question = document.createTextNode(localStorage.getItem(String(i))+" ");
	text_area.append(question);
	const input = document.createElement("input");
	input.setAttribute("id", String(i)+"a");
	text_area.append(input);
	text_area.append(document.createTextNode(" "));
}

function record() {
	for(let i = 1; i <= localStorage.getItem("number"); i++) {
		localStorage.setItem(String(i)+"a", document.getElementById(String(i)+"a").value)
	}
	localStorage.setItem("additional notes", document.getElementById("additional").value);
}


