$(document).ready(function(){


	
	function randomString(nChar){
		var newString =[];
		var alphabet = "azertyuiopqsdfghjklmwxcvbn1234567890";		
		for(nChar; nChar > 0; nChar-- ){
			var letter = alphabet[Math.floor(Math.random()* alphabet.length)];
			newString.push(letter);		
		}
		newString = newString.join("");
		return newString;
	};
	
	

	
	








	function createRandomTitle(row, col, nChar){
		var arrayToArray = [];	
		for(var k = 0; k < row; k++){
			arrayToArray.push([]);
			for(var l = 0; l < col; l++){
				arrayToArray[k].push(randomString(nChar));
			}
		}		
		return arrayToArray;
	};

	
	

	








	function createRandomTable(row, col, nChar){
		var table = createRandomTitle(row, col, nChar);
		var i = 0;
		var j = 0;
		for(var x = 0; x < table[0].length; x++ ){
			$('thead tr').append("<th scope='col'><input name='col' type='radio' value='"+ i++ +"'/></th>");			
		};
		for(var m = 0; m < table.length; m++){
			$('tbody').append("<tr><td scope='row'><input name='row' type='radio' value='"+ j++ +"'/></td></tr>");
			var a = 0;
			for(var w = 0; w < table[m].length; w++){
				$('tr').last().append("<td value='"+ a++ +"'>" + table[m][w] + "</td>");
			};			
		};			
		return table;		
	};	

	






	function targetRadioButton(row,col, nChar){
		var table = createRandomTable(row, col, nChar);
		$('table').delegate('input', 'click', function(){
			var xOrigin = $('input[name=col]:checked').val();
			var yOrigin = $('input[name=row]:checked').val();
			if(xOrigin != undefined && yOrigin != undefined){
				$('#textArea').val(table[yOrigin][xOrigin])
			}
		}); 
		$('table').delegate('td', 'click', function(){
			var index = $(this).attr('value');
			$(this).parent().find('input').prop('checked', 'checked');			
			$('thead th').eq(index).find('input').prop('checked', 'checked');
			$('#textArea').html($(this).val());
			

		})
		
	};
	targetRadioButton(10, 10, 10);
});

