import java.util.Scanner;

public class Series {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int seriesCount = Integer.parseInt(scanner.nextLine());
        double totalExpenses = 0;

        for (int i = 0; i < seriesCount; i++) {
            String input = scanner.nextLine();
            double price = Double.parseDouble(scanner.nextLine());

            if (input.equals("Thrones")) {
                price *= 0.5;
            } else if (input.equals("Lucifer")) {
                price *= 0.6;
            } else if (input.equals("Protector")) {
                price *= 0.7;
            } else if (input.equals("TotalDrama")) {
                price *= 0.8;
            } else if (input.equals("Area")) {
                price *= 0.9;
            }

            totalExpenses += price;
        }

        if (budget >= totalExpenses) {
            System.out.printf("You bought all the series and left with %.2f lv.", budget - totalExpenses);
        } else {
            System.out.printf("You need %.2f lv. more to buy the series!", totalExpenses - budget);
        }
    }
}
