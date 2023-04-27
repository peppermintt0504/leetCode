/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    var res=1;
    while(res*res<=n){
        res++;
    }
    while(res*res>n){
        res--;
    }
    return res;
};