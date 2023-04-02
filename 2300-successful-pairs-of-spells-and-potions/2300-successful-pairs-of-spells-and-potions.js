/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let tempPotions = potions.sort((a,b)=>a-b);
    let minVal = 0;
    const maxSpell = Math.ceil(success/Math.min(...tempPotions));
    const minSpell = Math.ceil(success/Math.max(...tempPotions));
    const memo = {};
    const m = tempPotions.length;
    let answer = [];
    
    while(spells.length){
        const spell = spells.shift();
        if(memo[spell]){
            answer.push(memo[spell]);
        }else if(spell >= maxSpell){
            answer.push(minVal + m);
            memo[spell] = minVal + m;
        }else if(spell < minSpell){
            answer.push(minVal);
            memo[spell] = minVal;
        }
        else{
            const tempArr = binarySearch(Math.ceil(success / spell) , tempPotions)
            answer.push(minVal + m - tempArr)
            memo[spell] = minVal + m - tempArr;
        }
    }
    return answer
};

const binarySearch = (target,arr) =>{
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        const mid = parseInt((right + left) / 2);
        if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }
    return left
}