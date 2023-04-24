/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length){
        if(stones.length === 1) break;
        const first = Math.max(...stones);
        stones = stones.slice(0,stones.indexOf(first)).concat(stones.slice(stones.indexOf(first)+1,stones.length))

        const secend = Math.max(...stones);
        stones = stones.slice(0,stones.indexOf(secend)).concat(stones.slice(stones.indexOf(secend)+1,stones.length))

        if(first-secend !== 0)
            stones.push(first-secend);
    }
    return stones[0] ?? 0
};