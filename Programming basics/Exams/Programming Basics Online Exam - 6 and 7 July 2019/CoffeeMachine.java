import java.util.Scanner;

public class CoffeeMachine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();
        String sugar = scanner.nextLine();
        int count = Integer.parseInt(scanner.nextLine());

        double price = 0;

        if (type.equals("Espresso")) {
            if (sugar.equals("Without")) {
                price = 0.9 * 0.65;
            } else if (sugar.equals("Normal")) {
                price = 1;
            } else {
                price = 1.2;
            }
        } else if (type.equals("Cappuccino")) {
            if (sugar.equals("Without")) {
                price = 1 * 0.65;
            } else if (sugar.equals("Normal")) {
                price = 1.2;
            } else {
                price = 1.6;
            }
        } else {
            if (sugar.equals("Without")) {
                price = 0.5 * 0.65;
            } else if (sugar.equals("Normal")) {
                price = 0.6;
            } else {
                price = 0.7;
            }
        }
        double total = price * count;
        if (type.equals("Espresso") && count > 4) {
            total *= 0.75;
        }
        if (total > 15) {
            total *= 0.8;
        }
        System.out.printf("You bought %d cups of %s for %.2f lv.", count, type, total);
    }
}
