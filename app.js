$(document).ready(function(){

var randomString = function(a){
	var alphabet = "azertyuiopqsdfghjklmwxcvbn";
	var newString =[];
	for(a; a > 0; a-- ){
		var letter = alphabet[Math.round(Math.random()* 26)];
		newString.push(letter);		
	}
	newString = newString.join("");
	//console.log(array);
};
randomString(300);

});