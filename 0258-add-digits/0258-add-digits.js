/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10){
        let val = 0;
        let temp = num;
        
        while(temp >= 1){
            val += temp % 10;
            temp = parseInt(temp/10);
        }
        num = val;
    }
    return num
};