/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums,target);
};

const binarySearch = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        const mid = left + parseInt((right - left) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
            
        }else{
            right = mid - 1;
        }
    }
    return -1;
}