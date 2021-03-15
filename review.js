const text_area = document.getElementById("textarea");
for(let i = 1; i <= localStorage.getItem("number"); i++){
	const full_statement = document.createTextNode(localStorage.getItem(String(i))+": "+localStorage.getItem(String(i)+"a")+"     ");
	text_area.append(full_statement);
	linebreak = document.createElement("br");
	text_area.appendChild(linebreak);
}
text_area.append();
const additional = document.createTextNode(localStorage.getItem("additional notes"));
text_area.append(additional);

