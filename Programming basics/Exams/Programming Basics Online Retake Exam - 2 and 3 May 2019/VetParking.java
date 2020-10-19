import java.util.Scanner;

public class VetParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int hours = Integer.parseInt(scanner.nextLine());
        double totalPrice = 0;

        for (int day = 1; day <= days; day++) {
            double price = 0;

            for (int hour = 1; hour <= hours; hour++) {

                if (day % 2 == 0 && hour % 2 != 0) {
                    price += 2.5;
                    totalPrice += 2.5;
                } else if (day % 2 != 0 && hour % 2 == 0) {
                    price += 1.25;
                    totalPrice += 1.25;
                } else {
                    price += 1;
                    totalPrice += 1;
                }
            }
            System.out.printf("Day: %d - %.2f leva%n", day, price);
        }
        System.out.printf("Total: %.2f leva", totalPrice);
    }
}
