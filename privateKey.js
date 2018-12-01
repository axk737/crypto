// Private-key encryption functions
// Last update: 12/1/2018

const helper = require('./helper')

// Frequency analysis to determine whether a text is in English or not
exports.isEnglish = function(text) {
	var charFreq = new Map();

	// get count of chars
	for (var i = 0; i < text.length; i++) {
		var char = text[i];
		if (charFreq.has(char)) {
			charFreq.set(char, charFreq.get(char) + 1);
		} else {
			charFreq.set(char, 1);
		}
	}

	// get freq
	for (var [key, value] of charFreq) {
		charFreq.set(key, value / text.length);
	}

	console.log(text.length);
	console.log(charFreq);
}

// Shift cipher, Caesar cipher, Caesar shift
exports.encryptShiftCipher = function(message, key) {
	var processed = helper.processMessage(message);

	var alphaNum = helper.getAlphaNum();
	var shiftBy = key % alphaNum.length;
	var shifted = "";
	for (var i = 0; i < processed.length; i++) {
		var oldIndex = alphaNum.indexOf(processed[i]);
		var newIndex = (oldIndex + shiftBy) % alphaNum.length;
		shifted = shifted + alphaNum[newIndex];
	}

	return shifted;
};

// Decryption for shift cipher
exports.decryptShiftCipher = function(text, key) {
	var alphaNum = helper.getAlphaNum();
	var deshiftBy = key % alphaNum.length;
	var deshifted = "";
	for (var i = 0; i < text.length; i++) {
		var oldIndex = alphaNum.indexOf(text[i]);
		var newIndex = (oldIndex - deshiftBy) % alphaNum.length;
		deshifted = deshifted + alphaNum[newIndex];
	}

	return deshifted;
}

/*
Lesson on shift cipher:
A one-letter message encoded by shift cipher cannot be cracked, because frequency analysis will not work.
But an information can be learned from sending same message over and over again, because it will be shifted
to the same letter.
*/

// Bitwise shift cipher