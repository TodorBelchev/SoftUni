import java.util.Scanner;

public class ReportSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int target = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();

        int currentTransaction = 0;
        int cashPaymentCount = 0;
        int cardPaymentCount = 0;
        int cashRaised = 0;
        int cardRaised = 0;
        int moneyRaised = 0;

        while (!command.equals("End")) {
            int current = Integer.parseInt(command);
            currentTransaction++;
            if (currentTransaction % 2 == 0) {
                if (current < 10) {
                    System.out.println("Error in transaction!");
                } else {
                    System.out.println("Product sold!");
                    cardPaymentCount++;
                    cardRaised += current;
                    moneyRaised += current;
                }
            } else {
                if (current > 100) {
                    System.out.println("Error in transaction!");
                } else {
                    System.out.println("Product sold!");
                    cashPaymentCount++;
                    cashRaised += current;
                    moneyRaised += current;
                }
            }
            if (moneyRaised >= target) {
                System.out.printf("Average CS: %.2f%n", cashRaised * 1.0 / cashPaymentCount);
                System.out.printf("Average CC: %.2f", cardRaised * 1.0 / cardPaymentCount);
                break;
            }
            command = scanner.nextLine();
        }
        if (moneyRaised < target) {
            System.out.print("Failed to collect required money for charity.");
        }
    }
}
