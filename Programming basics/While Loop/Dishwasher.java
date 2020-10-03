import java.util.Scanner;

public class Dishwasher {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int washer = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();

        int totalWasher = washer * 750;
        int commandCounter = 0;
        int potCounter = 0;
        int plateCounter = 0;

        while (!input.equals("End")) {
            int current = Integer.parseInt(input);
            commandCounter++;
            if (commandCounter % 3 == 0) {
                totalWasher -= current * 15;
                potCounter += current;
            } else {
                totalWasher -= current * 5;
                plateCounter += current;
            }
            if (totalWasher < 0) {
                System.out.printf("Not enough detergent, %d ml. more necessary!", Math.abs(totalWasher));
                break;
            }
            input = scanner.nextLine();
        }
        if (totalWasher >= 0) {
            System.out.println("Detergent was enough!");
            System.out.printf("%d dishes and %d pots were washed.%n", plateCounter, potCounter);
            System.out.printf("Leftover detergent %d ml.", totalWasher);
        }
    }
}
