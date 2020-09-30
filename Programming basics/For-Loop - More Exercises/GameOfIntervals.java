import java.util.Scanner;

public class GameOfIntervals {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rounds = Integer.parseInt(scanner.nextLine());
        double result = 0;
        int groupOneCounter = 0;
        int groupTwoCounter = 0;
        int groupThreeCounter = 0;
        int groupFourCounter = 0;
        int groupFiveCounter = 0;
        int groupSixCounter = 0;
        for (int i = 1; i <= rounds; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if (currentNumber < 10 && currentNumber >= 0) {
                result += currentNumber * 0.2;
                groupOneCounter++;
            } else if (currentNumber >= 10 && currentNumber < 20) {
                result += currentNumber * 0.3;
                groupTwoCounter++;
            } else if (currentNumber >= 20 && currentNumber < 30) {
                result += currentNumber * 0.4;
                groupThreeCounter++;
            } else if (currentNumber >= 30 && currentNumber < 40) {
                result += 50;
                groupFourCounter++;
            } else if (currentNumber >= 40 && currentNumber <= 50) {
                result += 100;
                groupFiveCounter++;
            } else {
                result /= 2;
                groupSixCounter++;
            }
        }
        System.out.printf("%.2f%n", result);
        System.out.printf("From 0 to 9: %.2f%%%n", (groupOneCounter * 1.0 / rounds) * 100);
        System.out.printf("From 10 to 19: %.2f%%%n", (groupTwoCounter * 1.0 / rounds) * 100);
        System.out.printf("From 20 to 29: %.2f%%%n", (groupThreeCounter * 1.0 / rounds) * 100);
        System.out.printf("From 30 to 39: %.2f%%%n", (groupFourCounter * 1.0 / rounds) * 100);
        System.out.printf("From 40 to 50: %.2f%%%n", (groupFiveCounter * 1.0 / rounds) * 100);
        System.out.printf("Invalid numbers: %.2f%%", (groupSixCounter * 1.0 / rounds) * 100);
    }
}
