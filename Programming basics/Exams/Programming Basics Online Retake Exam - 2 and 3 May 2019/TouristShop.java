import java.util.Scanner;

public class TouristShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String command = scanner.nextLine();
        double totalExpenses = 0;
        int productCounter = 0;

        while (!command.equals("Stop")) {
            double priceProduct = Double.parseDouble(scanner.nextLine());
            productCounter++;

            if (productCounter % 3 == 0) {
                priceProduct *= 0.5;
            }
            totalExpenses += priceProduct;

            if (totalExpenses > budget) {
                System.out.println("You don't have enough money!");
                System.out.printf("You need %.2f leva!", totalExpenses - budget);
                break;
            }
            command = scanner.nextLine();
        }

        if (budget >= totalExpenses) {
            System.out.printf("You bought %d products for %.2f leva.", productCounter, totalExpenses);
        }
    }
}
