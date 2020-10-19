import java.util.Scanner;

public class DivisionWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int group1Count = 0;
        int group2Count = 0;
        int group3Count = 0;

        for (int i = 1; i <= n; i++) {
            int currentNum = Integer.parseInt(scanner.nextLine());

            if (currentNum % 2 == 0) {
                group1Count++;
            }

            if (currentNum % 3 == 0) {
                group2Count++;
            }

            if (currentNum % 4 == 0) {
                group3Count++;
            }
        }
        System.out.printf("%.2f%%%n", group1Count * 1.0 / n * 100);
        System.out.printf("%.2f%%%n", group2Count * 1.0 / n * 100);
        System.out.printf("%.2f%%", group3Count * 1.0 / n * 100);
    }
}
