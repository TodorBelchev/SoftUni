import java.util.Scanner;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int sumOfEven = 0;
        int sumOfOdd = 0;

        for (int i = 0; i < n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if (i % 2 == 0) {
                sumOfEven += currentNumber;
            } else {
                sumOfOdd += currentNumber;
            }
        }
        if (sumOfEven == sumOfOdd) {
            System.out.println("Yes");
            System.out.printf("Sum = %d", sumOfEven);
        } else {
            System.out.println("No");
            System.out.printf("Diff = %d", Math.abs(sumOfEven - sumOfOdd));
        }
    }
}
