/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const num1Dic = [];
    const num2Dic = [];
    
    nums1.forEach((num)=>{if(!num1Dic.includes(num))num1Dic.push(num);})
    nums2.forEach((num)=>{if(!num2Dic.includes(num))num2Dic.push(num);})
    
    return [
        num1Dic.filter((num)=>!num2Dic.includes(num)),
        num2Dic.filter((num)=>!num1Dic.includes(num))
    ]
};