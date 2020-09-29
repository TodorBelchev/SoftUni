import java.util.Scanner;

public class DivideWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int totalCounter = 0;
        int groupOneCounter = 0;
        int groupTwoCounter = 0;
        int groupThreeCounter = 0;
        for (int i = 0; i < n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if (currentNumber % 2 == 0) {
                groupOneCounter++;
            }
            if (currentNumber % 3 == 0) {
                groupTwoCounter++;
            }
            if (currentNumber % 4 == 0) {
                groupThreeCounter++;
            }
            totalCounter++;
        }
        System.out.printf("%.2f%%%n", (groupOneCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%%n", (groupTwoCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%", (groupThreeCounter * 1.0 / totalCounter) * 100);
    }
}
