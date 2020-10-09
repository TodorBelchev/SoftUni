import java.util.Scanner;

public class FamilyTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int nights = Integer.parseInt(scanner.nextLine());
        double pricePerNight = Double.parseDouble(scanner.nextLine());
        int extraExpensesPercent = Integer.parseInt(scanner.nextLine());

        double expenses = nights * pricePerNight;
        if (nights > 7) {
            expenses *= 0.95;
        }
        double extraExpenses = budget * extraExpensesPercent * 1.0 / 100;
        double total = expenses + extraExpenses;

        if (budget >= total) {
            System.out.printf("Ivanovi will be left with %.2f leva after vacation.", budget - total);
        } else {
            System.out.printf("%.2f leva needed.", total - budget);
        }
    }
}
