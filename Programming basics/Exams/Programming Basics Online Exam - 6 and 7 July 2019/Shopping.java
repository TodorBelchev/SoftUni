import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int videoCardsCount = Integer.parseInt(scanner.nextLine());
        int processorsCount = Integer.parseInt(scanner.nextLine());
        int memoryCount = Integer.parseInt(scanner.nextLine());

        double videoCardsExpenses = videoCardsCount * 250;
        double processorsPrice = videoCardsExpenses * 0.35;
        double memoryPrice = videoCardsExpenses * 0.1;
        double processorsExpenses = processorsCount * processorsPrice;
        double memoryExpenses = memoryCount * memoryPrice;
        double total = videoCardsExpenses + processorsExpenses + memoryExpenses;

        if (videoCardsCount > processorsCount) {
            total *= 0.85;
        }

        if (budget >= total) {
            System.out.printf("You have %.2f leva left!", budget - total);
        } else {
            System.out.printf("Not enough money! You need %.2f leva more!", total - budget);
        }
    }
}
