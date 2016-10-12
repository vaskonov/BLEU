var natural = require('natural');
var _ = require('underscore')._;

function distances(str1, str2)
{
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  var tokenizer = new natural.RegexpTokenizer({pattern: /[^a-zA-Z0-9\-\?]+/});

  var tokens1 = _.flatten(natural.NGrams.ngrams(tokenizer.tokenize(str1), 1))
  var tokens2 = _.flatten(natural.NGrams.ngrams(tokenizer.tokenize(str2), 1))

  var dst = bleu(str1,str2)

  // var dst_nrm = dst/_.max([tokens1.length, tokens2.length])
  // return dst_nrm
  
  return dst
}

function mngrp(can, refm, n)
{
  can = can.toLowerCase()
  refm = refm.toLowerCase()

  if (n == 0)
    throw new Error("mngrp: n = 0")

  var tokenizer = new natural.RegexpTokenizer({pattern: /[^a-zA-Z0-9\-\?]+/});

  var can = natural.NGrams.ngrams(tokenizer.tokenize(can), n)
  var refm = natural.NGrams.ngrams(tokenizer.tokenize(refm), n)

  var refh = {}
  _.each(refm, function(value, key, list){
    if (!(value in refh))
        refh[value] = 0
  
    refh[value] += 1
  }, this)

  var m = 0
  _.each(can, function(ngr, key, list){
    ngr = ngr
    if (ngr in refh)
    {
      if (refh[ngr] > 0)
        {
        m += 1
        refh[ngr] -= 1
        }
    }
  }, this)

  if (n>1)
    return  (m+1)/(can.length+1)
  else
    return  m/can.length
}

function brevity(can, ref)
{
  can = can.toLowerCase()
  ref = ref.toLowerCase()

  var tokenizer = new natural.RegexpTokenizer({pattern: /[^a-zA-Z0-9\-\?]+/});

  var can = natural.NGrams.ngrams(tokenizer.tokenize(can), 1)
  var ref = natural.NGrams.ngrams(tokenizer.tokenize(ref), 1)

  // console.log("BLEU: brevity: can.length: "+can.length)
  // console.log("BLEU: brevity: ref.length: "+ref.length)
  
  var ex = Math.exp(1-ref.length/can.length)
  console.log("BLEU: brevity: ex: "+ex)

  return _.min([1, ex])
}

function bleu(can, ref)
{
  var maxg = 3
  can = can.toLowerCase()
  ref = ref.toLowerCase()

  // console.log("BLEU: can: "+can)
  // console.log("BLEU: ref: "+ref)

  var P = 1

  _(maxg).times(function(n){ 
    var temp = mngrp(can, ref, n+1)
    console.log("BLEU: P_"+(n+1)+": "+temp)
    P *= temp
  });

  console.log("P="+P)
  P = Math.pow(P,1/maxg)  

  console.log("BLEU: exp P="+P)

  var brev = brevity(can, ref)
  console.log("BLEU: brevity: "+brev)

  return P*brev
  // return P
}

var dst = bleu("show must go on", "show must go off")
console.log(dst)


