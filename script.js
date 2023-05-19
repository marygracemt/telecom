function myFunction() {
	alert("Welcome to my informative website! This focuses about telecommunications and different information about it using my knowledge about html, CSS, and JavaScript. Enjoy scrolling! \n\n -MGMT");
}

function importanceForYou(){
	var x = "";
	var choices = document.getElementsByName("choices");
	for (var i=0; i<choices.length; i++){
		if (choices[i].checked){
			x = x + choices[i].value + "\n";
		}
	}
	alert("Telecommunication is important in my life because: \n\n" + x);
	return false;
 }