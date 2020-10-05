import java.util.Scanner;

public class SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstNumber = Integer.parseInt(scanner.nextLine());
        int lastNumber = Integer.parseInt(scanner.nextLine());
        int magicNumber = Integer.parseInt(scanner.nextLine());
        int combinationCounter = 0;
        double sum = 0;
        boolean itsMagic = false;
        for (int i = firstNumber; i <= lastNumber; i++) {
            for (int j = firstNumber; j <= lastNumber; j++) {
                sum = i + j;
                combinationCounter++;
                if (sum == magicNumber) {
                    System.out.printf("Combination N:%d (%d + %d = %.0f)", combinationCounter, i, j, sum);
                    itsMagic = true;
                    break;
                }
            }
            if (itsMagic) {
                break;
            }
        }
        if (!itsMagic) {
            System.out.printf("%d combinations - neither equals %d", combinationCounter, magicNumber);
        }
    }
}