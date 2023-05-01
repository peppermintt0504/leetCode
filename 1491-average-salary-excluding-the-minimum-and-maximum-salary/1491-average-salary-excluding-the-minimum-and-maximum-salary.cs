public class Solution {
    public double Average(int[] salary) {
        double totalVal = 0;
        for(int i = 0; i < salary.Length;i++){
            totalVal += salary[i];
        }
        Console.WriteLine(totalVal - (salary.Max() + salary.Min()));
        Console.WriteLine(salary.Length - 2);

        return Math.Round((totalVal - (salary.Max() + salary.Min())) / (salary.Length - 2),5);
    }
}