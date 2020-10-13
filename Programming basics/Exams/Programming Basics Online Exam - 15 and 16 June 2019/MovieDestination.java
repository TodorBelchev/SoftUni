import java.util.Scanner;

public class MovieDestination {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String destination = scanner.nextLine();
        String season = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        double price = 0;

        if (season.equals("Winter")) {
            switch (destination) {
                case "Dubai":
                    price = 45000 * 0.7;
                    break;
                case "Sofia":
                    price = 17000 * 1.25;
                    break;
                case "London":
                    price = 24000;
                    break;
            }
        } else if (season.equals("Summer")) {
            switch (destination) {
                case "Dubai":
                    price = 40000 * 0.7;
                    break;
                case "Sofia":
                    price = 12500 * 1.25;
                    break;
                case "London":
                    price = 20250;
                    break;
            }
        }

        double expenses = days * price;

        if (budget >= expenses) {
            System.out.printf("The budget for the movie is enough! We have %.2f leva left!", budget - expenses);
        } else {
            System.out.printf("The director needs %.2f leva more!", expenses - budget);
        }
    }
}
