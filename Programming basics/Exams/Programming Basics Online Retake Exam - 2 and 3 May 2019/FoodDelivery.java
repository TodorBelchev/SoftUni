import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int chickenCount = Integer.parseInt(scanner.nextLine());
        int fishCount = Integer.parseInt(scanner.nextLine());
        int vegCount = Integer.parseInt(scanner.nextLine());

        double price = chickenCount * 10.35 + fishCount * 12.4 + vegCount * 8.15;
        double desertPrice = price * 0.2;
        double totalPrice = price + desertPrice + 2.5;

        System.out.printf("Total: %.2f", totalPrice);
    }
}
