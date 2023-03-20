/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n ==0)return true;
    let len = flowerbed.length;
    let plantCnt = 0;

    let prev = 0;
    for (let i = 0; i < len; i++) {
        let next = i === len-1? 0 : flowerbed[i+1];
        if(prev === 0 && next ===0 && flowerbed[i] ===0){
            flowerbed[i] = 1;
            if(++plantCnt === n){
                return true;
            }
        }
        prev = flowerbed[i];
    }
    return false;
};