// Main function for testing on terminal

const privateKey = require('./privateKey');
const publicKey = require('./publicKey');
const helper = require('./helper')

message = "   Denzel Ward for Defensive R-*/*ookie of the Year 21.";
key = 2;
shift = privateKey.encryptShiftCipher(message, key);
deshift = privateKey.decryptShiftCipher(shift, key);
console.log(helper.makeReadable(shift));
console.log(helper.makeReadable(deshift));
console.log(privateKey.isEnglish(deshift));

console.log(helper.getEnglishFreq());