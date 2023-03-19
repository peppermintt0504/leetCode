var wordList = [];
var WordDictionary = function() {
    wordList = Array.from({length : 26},()=>Array(0));
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(!wordList[word.length].includes(word))
        wordList[word.length].push(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const reg = new RegExp(`${word}`);
    let result = false;
    for(target of wordList[word.length]){
        if(reg.test(target)){
            result = true;
            break;
        }
    }

    return result
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */