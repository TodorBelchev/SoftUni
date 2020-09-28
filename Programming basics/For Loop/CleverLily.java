import java.util.Scanner;

public class CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int age = Integer.parseInt(scanner.nextLine());
        double priceOfWashingMachine = Double.parseDouble(scanner.nextLine());
        int priceOfToy = Integer.parseInt(scanner.nextLine());

        int toyCounter = 0;
        double moneyPresent = 0;
        int brotherStolenMoney = 0;
        int totalMoneyPresent = 0;

        for (int i = 1; i <= age; i += 2) {
            toyCounter += 1;
        }
        for (int j = 2; j <= age; j += 2) {
            moneyPresent += 10;
            brotherStolenMoney += 1;
            totalMoneyPresent += moneyPresent;
        }
        double moneyFromToy = toyCounter * priceOfToy;
        double totalMoney = moneyFromToy + totalMoneyPresent - brotherStolenMoney;
        if (totalMoney >= priceOfWashingMachine) {
            System.out.printf("Yes! %.2f", totalMoney - priceOfWashingMachine);
        } else {
            System.out.printf("No! %.2f", priceOfWashingMachine - totalMoney);
        }
    }
}
