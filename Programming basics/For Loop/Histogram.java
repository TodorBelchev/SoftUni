import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int totalCounter = 0;
        int groupOneCounter = 0;
        int groupTwoCounter = 0;
        int groupThreeCounter = 0;
        int groupFourCounter = 0;
        int groupFiveCounter = 0;
        for (int i = 0; i < n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if (currentNumber < 200) {
                totalCounter++;
                groupOneCounter++;
            } else if (currentNumber < 400) {
                totalCounter++;
                groupTwoCounter++;
            } else if (currentNumber < 600) {
                totalCounter++;
                groupThreeCounter++;
            } else if (currentNumber < 800) {
                totalCounter++;
                groupFourCounter++;
            } else {
                totalCounter++;
                groupFiveCounter++;
            }
        }
        System.out.printf("%.2f%%%n", (groupOneCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%%n", (groupTwoCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%%n", (groupThreeCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%%n", (groupFourCounter * 1.0 / totalCounter) * 100);
        System.out.printf("%.2f%%", (groupFiveCounter * 1.0 / totalCounter) * 100);
    }
}
