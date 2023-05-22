/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const answer = [];
    
    nums.forEach((x)=>{
        if(map[x]){
            map[x]++;
        }else{
            map[x] = 1;
        }
    })
    
    const sorted = Object.entries(map).sort((a,b)=> b[1] - a[1]);

    for(let i = 0; i < k; i++){
        answer.push(Number(sorted[i][0]));
        
    }
    return answer;
};