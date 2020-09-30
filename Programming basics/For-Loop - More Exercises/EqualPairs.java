import java.util.Scanner;

public class EqualPairs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pairsCount = Integer.parseInt(scanner.nextLine());
        int x = Integer.parseInt(scanner.nextLine());
        int y = Integer.parseInt(scanner.nextLine());
        int diff = 0;
        int firstSum = x + y;
        for (int i = 2; i <= pairsCount; i++) {
            x = Integer.parseInt(scanner.nextLine());
            y = Integer.parseInt(scanner.nextLine());
            int currentSum = x + y;
            if (firstSum != currentSum) {
                diff = Math.abs(currentSum - firstSum);
                firstSum = currentSum;
            }
        }
        if (diff == 0) {
            System.out.printf("Yes, value=%d", firstSum);
        } else {
            System.out.printf("No, maxdiff=%d", diff);
        }
    }
}
