import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        double currentMoney = Double.parseDouble(scanner.nextLine());
        int totalCounter = 0;
        int spendCounter = 0;
        while (currentMoney < budget) {
            String input = scanner.nextLine();
            double savedOrSpendMoney = Double.parseDouble(scanner.nextLine());
            totalCounter++;
            if (input.equals("save")) {
                currentMoney += savedOrSpendMoney;
                spendCounter = 0;
            } else if (input.equals("spend")) {
                currentMoney -= savedOrSpendMoney;
                spendCounter++;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendCounter >= 5) {
                    System.out.println("You can't save the money.");
                    System.out.printf("%d", totalCounter);
                    break;
                }
            }
        }
        if (currentMoney >= budget) {
            System.out.printf("You saved the money for %d days.", totalCounter);
        }
    }
}
