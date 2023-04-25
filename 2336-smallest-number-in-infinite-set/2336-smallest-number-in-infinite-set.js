
var endPoint = 1;
var addList = [];

var SmallestInfiniteSet = function() {
    endPoint = 1;
    addList = []
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let minVal = 0;
    console.log(endPoint)
    console.log(addList)
    if(endPoint > Math.min(...addList)){
        minVal = Math.min(...addList);
        addList = addList.slice(0,addList.indexOf(minVal)).concat(addList.slice(addList.indexOf(minVal)+1,addList.length));
        console.log(addList);
    }else{
        minVal = endPoint;
        endPoint++;
    }
    return minVal
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < endPoint && !addList.includes(num)){
        addList.push(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */