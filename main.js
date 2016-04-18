/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var censoreWords = ["smutny", "szalony"];
var customCensoredWords = [];
function censor(inStr){
    for (idx in censoreWords){
        inStr = inStr.replace(censoreWords[idx], "****");
        }
    for (idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx], "****");
        }
    return inStr;
    
}
function addCensoreWords(word){
    customCensoredWords.push(word);
   }
function getCensoredWords(){
    return censoreWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoreWords = addCensoreWords;
exports.getCensoredWords = getCensoredWords;