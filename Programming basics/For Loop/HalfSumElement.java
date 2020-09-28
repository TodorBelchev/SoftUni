import java.util.Scanner;

public class HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int sum = 0;
        int maxNum = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            int currentNum = Integer.parseInt(scanner.nextLine());
            if (currentNum > maxNum) {
                maxNum = currentNum;
            }
            sum += currentNum;
        }

        if (maxNum == sum - maxNum) {
            System.out.println("Yes");
            System.out.printf("Sum = %d", maxNum);
        } else {
            System.out.println("No");
            System.out.printf("Diff = %d", Math.abs(maxNum - (sum - maxNum)));
        }
    }
}
