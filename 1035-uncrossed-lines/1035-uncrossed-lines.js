/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    const case1 = [0].concat(nums1);
    const case2 = [0].concat(nums2);

    const [h,w] = [case1.length,case2.length];

    const dp = Array.from({length : h},()=>Array(w).fill(0));

    for(let i = 1; i < h; i++){
        for(let j = 1; j < w;j++){
            if(case1[i] === case2[j]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j] ,dp[i][j-1] )
            }
        }
    }
    return dp[h-1][w-1]
};