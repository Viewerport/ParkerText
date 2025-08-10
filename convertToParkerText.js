function convertToParkerText(){
	var originalText = document.getElementById("normalText");
	var newText = "";

	var keyboard = [
		["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
		["A", "S", "D", "F", "G", "H", "J", "K", "L"],
		["Z", "X", "C", "V", "B", "N", "M"]
	];

	for (var i = 0; i < newText.length; i ++){
		var letter = newText.charAt(i);
		var keyboardIndex = 0;

		var rand1 = Math.round(Math.cos((i + 100) * newText.length * 1000) / 2 + 0.5) === 0 ? -1 : 1;
		var rand2 = Math.round(Math.sin((i + 100) * newText.length * 1000) / 2 + 0.5) === 0 ? -1 : 1;

		for (var j = 0; j < keyboard.length; j ++){
			for (var k = 0; k < keyboard[j].length; j ++){
				if (keyboard[j][k] === letter.toUpperCase()){
					keyboardIndex = [j, k];
				}
			}
		}

		keyboardIndex[0] = constrain(keyboardIndex[0] + rand1, 0, 2);
		keyboardIndex[1] = constrain(keyboardIndex[1] + rand2, 0, keyboard[keyboardIndex[0]].length - 1);

		newText += keyboard[keyboardIndex[0]][keyboardIndex[1]];
	}
	console.log(String(newText));
	console.log("This works");
	document.getElementById("parkerText").innerHTML = newText;
}