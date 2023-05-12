/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const n = questions.length;
    
    const dp = Array(n).fill(0);
    
    for(let i = n - 1; i >= 0; i--){
        const [score, power] = questions[i];
        
        const solve = score + (dp[i + 1 + power] || 0);
        const skip = dp[i + 1] || 0;
        
        dp[i] = Math.max(solve,skip)
        
    }
    return dp[0];
};