var measure = require("./bleu.js");

// var str1 = "show must go on" 
// var str2 = "show must go off"

var str1 = "шоу должно продолжаться" 
var str2 = "шоу должно продолжаться"

// var str1_ru = "я встретил вас и все болею" 
// var str2_ru = "я встретил вас"

var dist = {
	"bleu_lin_1": measure.bleu(str1, str2, 1, "lin"),
	"bleu_lin_2": measure.bleu(str1, str2, 2, "lin"),
	"bleu_lin_3": measure.bleu(str1, str2, 3, "lin"),
	"bleu_lin_4": (measure.bleu(str1, str2, 3, "lin")==1 && measure.bleu(str1, str2, 4, "lin")==0)? 1:measure.bleu(str1, str2, 4, "lin"),   

	"bleu_def_1": measure.bleu(str1, str2, 1, "def"),
	"bleu_def_2": measure.bleu(str1, str2, 2, "def"),
	"bleu_def_3": measure.bleu(str1, str2, 3, "def"),
	"bleu_def_4": (measure.bleu(str1, str2, 3, "def")==1 && measure.bleu(str1, str2, 4, "def")==0)? 1:measure.bleu(str1, str2, 4, "def"),   

	"bleu_nist_1": measure.bleu(str1, str2, 1, "nist"),
	"bleu_nist_2": measure.bleu(str1, str2, 2, "nist"),
	"bleu_nist_3": measure.bleu(str1, str2, 3, "nist"),
	"bleu_nist_4": (measure.bleu(str1, str2, 3, "nist")==1 && measure.bleu(str1, str2, 4, "nist")==0)? 1:measure.bleu(str1, str2, 4, "nist")
}

console.log(JSON.stringify(dist, null, 4))