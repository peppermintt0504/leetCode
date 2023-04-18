/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';
    for(let i = 0; i < Math.min(word1.length,word2.length);i++){
        answer += word1[i];
        answer += word2[i];
    }
    answer += word1.slice(Math.min(word1.length,word2.length),Math.max(word1.length,word2.length))
    answer += word2.slice(Math.min(word1.length,word2.length),Math.max(word1.length,word2.length))
    return answer
};