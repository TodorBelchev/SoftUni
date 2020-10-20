import java.util.Scanner;

public class EasterParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int guests = Integer.parseInt(scanner.nextLine());
        double priceForOneGuest = Double.parseDouble(scanner.nextLine());
        double budget = Double.parseDouble(scanner.nextLine());

        double priceOfCake = budget * 0.1;
        double expenses = guests * priceForOneGuest;

        if (guests >= 10 && guests <= 15) {
            expenses -= expenses * 0.15;
        } else if (guests > 15 && guests <= 20) {
            expenses -= expenses * 0.2;
        } else if (guests > 20) {
            expenses -= expenses * 0.25;
        }

        double totalExpenses = expenses + priceOfCake;

        if (totalExpenses <= budget) {
            System.out.printf("It is party time! %.2f leva left.", budget - totalExpenses);
        } else {
            System.out.printf("No party! %.2f leva needed.", totalExpenses - budget);
        }
    }
}
