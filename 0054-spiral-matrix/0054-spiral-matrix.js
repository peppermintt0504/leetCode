/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let dir = 0;
    const result = [];
    while(matrix.length){
        switch(dir){
            case 0 : {
                const temp = matrix.shift();
                temp.forEach((v)=>{result.push(v)});
                break;
            }
            case 1 : {
                matrix.forEach((v)=>{
                    v.length !== 0 && result.push(v.pop());
                })
                break;
            }
            case 2 : {
                const temp = matrix.pop().reverse();
                temp.forEach((v)=>{result.push(v)});
                break;
            }
            case 3 : {
                const temp = [];
                matrix.forEach((v)=>{
                    v.length !== 0 && temp.push(v.shift());
                })
                temp.reverse().forEach((v)=>{result.push(v)});
            }
        }
        dir = (dir + 1) % 4;
    }
    return result;
};