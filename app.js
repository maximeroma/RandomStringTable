$(document).ready(function(){


	
	var randomString = function(a){
		var newString =[];
		var alphabet = "azertyuiopqsdfghjklmwxcvbn1234567890";		
		for(a; a > 0; a-- ){
			var letter = alphabet[Math.floor(Math.random()* alphabet.length)];
			newString.push(letter);		
		}
		newString = newString.join("");
		//console.log(newString);
		return newString;
	};
	randomString(300);
	//console.log(newString);

	
	var createRandomTitle = function(row, col, nChar){
		var arrayToArray = [];	
		for(var k = 0; k < row; k++){
			arrayToArray.push([]);
			for(var l = 0; l < col; l++){
				var string = randomString(nChar);
				arrayToArray[k].push(string);
			}
		}		
		console.log(arrayToArray);
		return arrayToArray;
		

	};

	createRandomTitle(5, 5, 5);
	

var createRandomTable = function(row, col, nChar){
	var table = createRandomTitle(row, col, nChar);
	for(var x = 0; x < table[0].length; x++ ){
		console.log(table[0].length);
		$('thead tr').append("<th scope='col'><input type='radio' /></th>");
	};
	for(var m = 0; m < table.length; m++){
		$('tbody').append("<tr><td scope='row'><input type='radio'/></td></tr>");
		for(var w = 0; w < table[m].length; w++){
			$('tr').last().append("<td>" + table[m][w] + "</td>");
		};
	
	};
	return false;
};

createRandomTable(5, 5, 5);

var targetByOrigin = function(){

}







/*
	var createRandomTable = function(){
		$('tbody').append("<tr></tr>");
		for(var j = 1; j < newString.length; j++){
			$('tr').last().append("<td>" + newString[j-1] + "</td>");
			if (j % 6 === 0){
				$('tbody').append("<tr></tr>");
			}
		}
	};
	createRandomTable();

*/


});

