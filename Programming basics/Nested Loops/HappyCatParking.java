import java.util.Scanner;

public class HappyCatParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int hours = Integer.parseInt(scanner.nextLine());
        double total = 0;
        for (int i = 1; i <= days; i++) {
            double price = 0;
            for (int j = 1; j <= hours; j++) {
                if (i % 2 == 0 && j % 2 != 0) {
                    price += 2.5;
                    total += 2.5;
                } else if (i % 2 != 0 && j % 2 == 0) {
                    price += 1.25;
                    total += 1.25;
                } else {
                    price += 1;
                    total += 1;
                }
            }
            System.out.printf("Day: %d - %.2f leva%n", i, price);
        }
        System.out.printf("Total: %.2f leva", total);
    }
}
