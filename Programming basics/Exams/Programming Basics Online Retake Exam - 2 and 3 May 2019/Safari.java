import java.util.Scanner;

public class Safari {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int fuel = Integer.parseInt(scanner.nextLine());
        String day = scanner.nextLine();

        double price = fuel * 2.1 + 100;

        if (day.equals("Saturday")) {
            price *= 0.9;
        } else {
            price *= 0.8;
        }

        if (price <= budget) {
            System.out.printf("Safari time! Money left: %.2f lv.", budget - price);
        } else {
            System.out.printf("Not enough money! Money needed: %.2f lv.", price - budget);
        }

    }
}
