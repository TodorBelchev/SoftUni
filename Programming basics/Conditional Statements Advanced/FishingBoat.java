import java.util.Scanner;

public class FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int fishermanCount = Integer.parseInt(scanner.nextLine());
        double price = 0;
        if (season.equals("Spring")) {
            price = 3000;
            if (fishermanCount <= 6) {
                price *= 0.9;
            } else if (fishermanCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (fishermanCount % 2 == 0) {
                price *= 0.95;
            }
        } else if (season.equals("Summer") || season.equals("Autumn")) {
            price = 4200;
            if (fishermanCount <= 6) {
                price *= 0.9;
            } else if (fishermanCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (fishermanCount % 2 == 0 && !season.equals("Autumn")) {
                price *= 0.95;
            }
        } else if (season.equals("Winter")) {
            price = 2600;
            if (fishermanCount <= 6) {
                price *= 0.9;
            } else if (fishermanCount <= 11) {
                price *= 0.85;
            } else {
                price *= 0.75;
            }
            if (fishermanCount % 2 == 0) {
                price *= 0.95;
            }
        }
        if (budget >= price) {
            System.out.printf("Yes! You have %.2f leva left.", budget - price);
        } else if (price > budget) {
            System.out.printf("Not enough money! You need %.2f leva.", price - budget);
        }
    }
}
