let domElmnt = document.getElementsByTagName("*");

function idToConst() {
	for (let elmnt of domElmnt) {
		if (elmnt.id !== '') window[elmnt.id] = document.getElementById(elmnt.id);
	}
};
idToConst()
