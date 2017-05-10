'use strict';

module.exports = {

 words : (str) => {
  let word={};
   str.split(/\s+|\n|\t/).forEach(function(value){
		word[value] =  (+word[value] || 0) + 1;
	});
   return word;
}
}