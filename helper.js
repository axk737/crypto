// Helper functions
// Last update: 12/1/2018

// Get rid of leakable information.
exports.processMessage = function(message) {
	var processed = message;
	processed = processed.replace(/[^A-Za-z0-9]/g, "")
	processed = processed.toUpperCase();
	return processed;
};

// Make space every 5 characters to make the message more readable.
exports.makeReadable = function(message) {
	var processed = message;
	processed = processed.replace(/(.{5})/g, "$1 ");
	return processed;
};

// return alpha-numeric array to look up characters
exports.getAlphaNum = function() {
	var arr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
	return arr;
}

// frequency of characters in English language
exports.getEnglishFreq = function() {
	var freq = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228, 2.015, 6.094, 6.966, 0.153, 0.772, 4.025, 2.406, 
	6.749, 1.507, 1.929, 0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.360, 0.150, 1.974, 0.074];

	return freq.reduce((a, b) => a + b, 0);
}
