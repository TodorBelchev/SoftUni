import java.util.Scanner;

public class FuelTankPartTwo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String typeFuel = scanner.nextLine();
        double fuel = Double.parseDouble(scanner.nextLine());
        String clubCard = scanner.nextLine();

        double price = 0;

        if (typeFuel.equals("Diesel")) {
            price = 2.33;
            if (clubCard.equals("Yes")) {
                price -= 0.12;
            }
        } else if (typeFuel.equals("Gasoline")) {
            price = 2.22;
            if (clubCard.equals("Yes")) {
                price -= 0.18;
            }
        } else if (typeFuel.equals("Gas")) {
            price = 0.93;
            if (clubCard.equals("Yes")) {
                price -= 0.08;
            }
        }
        double totalPrice = price * fuel;
        if (fuel >= 20 && fuel <= 25) {
            totalPrice *= 0.92;
        } else if (fuel > 25) {
            totalPrice *= 0.9;
        }
        System.out.printf("%.2f lv.", totalPrice);
    }
}
