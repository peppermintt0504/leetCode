public class Solution {
    public int ArraySign(int[] nums) {
        double multi = 1;
        bool isZero = false;
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] == 0) isZero = true;
            if(nums[i] < 0) multi *= -1;
        }
        Console.WriteLine(multi);
        if(isZero){
            return 0;
        }
        if(multi < 0){
            return -1;
        }else{
            return 1;
        }
    }
}