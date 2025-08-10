function convertToParkerText(){
	var originalText = document.getElementById("normalText").value;
	var newText = "";

	var keyboard = [
		["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
		["A", "S", "D", "F", "G", "H", "J", "K", "L"],
		["Z", "X", "C", "V", "B", "N", "M"]
	];

	var constrain = function(val, small, big){
		if (val < small){
			return small;
		}
		if (val > big){
			return big;
		}
		return val;
	};

	var isCapital = function(val){
		if (val === val.toUpperCase()){
			return true;
		}
		return false;
	};

	for (var i = 0; i < originalText.length; i ++){
		var letter = originalText.charAt(i);
		var keyboardIndex = 0;

		var rand1 = Math.round(Math.cos((i + 100) * originalText.length * 1000) / 2 + 0.5) === 0 ? -1 : 1;
		var rand2 = Math.round(Math.sin((i + 100) * originalText.length * 1000) / 2 + 0.5) === 0 ? -1 : 1;

		for (var j = 0; j < keyboard.length; j ++){
			for (var k = 0; k < keyboard[j].length; k ++){
				if (keyboard[j][k] === letter.toUpperCase()){
					keyboardIndex = [j, k];
				}
			}
		}

		keyboardIndex[0] = constrain(keyboardIndex[0] + rand1, 0, 2);
		keyboardIndex[1] = constrain(keyboardIndex[1] + rand2, 0, keyboard[keyboardIndex[0]].length - 1);

		if (!isCapital(keyboard[keyboardIndex[0]][keyboardIndex[1]])){
			newText += keyboard[keyboardIndex[0]][keyboardIndex[1]].toLowerCase();
		}else
		if (isCapital(keyboard[keyboardIndex[0]][keyboardIndex[1]])){
			newText += keyboard[keyboardIndex[0]][keyboardIndex[1]];
		}else{
			newText += letter;
		}
	}
	
	document.getElementById("parkerText").innerHTML = newText;
}
