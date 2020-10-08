import java.util.Scanner;

public class SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int startOfInterval = Integer.parseInt(scanner.nextLine());
        int endOfInterval = Integer.parseInt(scanner.nextLine());
        int magicNumber = Integer.parseInt(scanner.nextLine());
        int combination = 0;
        int combinationCount = 0;
        boolean itsMagic = false;
        for (int i = startOfInterval; i <= endOfInterval; i++) {
            for (int j = startOfInterval; j <= endOfInterval; j++) {
                combination = i + j;
                combinationCount++;
                if (combination == magicNumber) {
                    System.out.printf("Combination N:%d (%d + %d = %d)", combinationCount, i, j, magicNumber);
                    itsMagic = true;
                    break;
                }
            }
            if (itsMagic) {
                break;
            }
        }
        if (!itsMagic) {
            System.out.printf("%d combinations - neither equals %d", combinationCount, magicNumber);
        }
    }
}