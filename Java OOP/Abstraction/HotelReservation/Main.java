package abstraction.hotel_reservation;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        double pricePerDay = Double.parseDouble(input[0]);
        int days = Integer.parseInt(input[1]);
        Season season = Season.valueOf(input[2].toUpperCase());
        Discount discount = Discount.valueOf(input[3].toUpperCase());
        System.out.printf("%.2f", PriceCalculator.calculatePrice(pricePerDay, days, season, discount));
    }
}
