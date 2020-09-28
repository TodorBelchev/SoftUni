import java.util.Scanner;

public class LeftAndRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int firstSum = 0;
        int secondSum = 0;
        for (int i = 0; i < n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            firstSum += currentNumber;
        }
        for (int j = n; j < n * 2; j++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            secondSum += currentNumber;
        }
        if (firstSum == secondSum) {
            System.out.printf("Yes, sum = %d", firstSum);
        } else {
            System.out.printf("No, diff = %d", Math.abs(firstSum - secondSum));
        }
    }
}
