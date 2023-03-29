/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    let result = 0;
    satisfaction.sort((a,b)=>a-b);
    while(satisfaction.length){
        let count = 1;
        let temp = 0;
        for(v of satisfaction){
            temp += count * v;
            count++;
        }
        if(result < temp)   result = temp;
        satisfaction.shift();
    }
    return result
};