var measure = require("./bleu.js");

var str1 = "show must go on" 
var str2 = "show must go off"

var dist = {
	"bleu_lin_1": measure.bleu(str1, str2, 1, "lin"),
	"bleu_lin_2": measure.bleu(str1, str2, 2, "lin"),
	"bleu_lin_3": measure.bleu(str1, str2, 3, "lin"),
	"bleu_lin_4": measure.bleu(str1, str2, 4, "lin"),

	"bleu_def_1": measure.bleu(str1, str2, 1, "def"),
	"bleu_def_2": measure.bleu(str1, str2, 2, "def"),
	"bleu_def_3": measure.bleu(str1, str2, 3, "def"),
	"bleu_def_4": measure.bleu(str1, str2, 4, "def"),

	"bleu_nist_1": measure.bleu(str1, str2, 1, "nist"),
	"bleu_nist_2": measure.bleu(str1, str2, 2, "nist"),
	"bleu_nist_3": measure.bleu(str1, str2, 3, "nist"),
	"bleu_nist_4": measure.bleu(str1, str2, 4, "nist"),

	"bleu_k-based_1": measure.bleu(str1, str2, 1, "k-based"),
	"bleu_k-based_2": measure.bleu(str1, str2, 2, "k-based"),
	"bleu_k-based_3": measure.bleu(str1, str2, 3, "k-based"),
	"bleu_k-based_4": measure.bleu(str1, str2, 4, "k-based")
}

console.log(JSON.stringify(dist, null, 4))