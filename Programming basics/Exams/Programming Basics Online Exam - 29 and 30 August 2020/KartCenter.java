import java.util.Scanner;

public class KartCenter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String laps = scanner.nextLine();
        String card = scanner.nextLine();
        String typeKart = scanner.nextLine();
        double price = 0;

        switch (typeKart) {
            case "Child":

                if (laps.equals("five")) {
                    price = 7;
                } else {
                    price = 11;
                }

                break;
            case "Junior":

                if (laps.equals("five")) {
                    price = 9;
                } else {
                    price = 16;
                }

                break;
            case "Adult":

                if (laps.equals("five")) {
                    price = 12;
                } else {
                    price = 21;
                }

                break;
            case "Profi":

                if (laps.equals("five")) {
                    price = 18;
                } else {
                    price = 32;
                }

                break;
        }

        if (card.equals("yes")) {
            price *= 0.8;
        }

        double diff = Math.abs(budget - price);

        if (price <= budget) {
            System.out.printf("You bought %s ticket for %s laps. Your change is %.2flv.", typeKart, laps, diff);
        } else {
            System.out.printf("You don't have enough money! You need %.2flv more.", diff);
        }
    }
}
