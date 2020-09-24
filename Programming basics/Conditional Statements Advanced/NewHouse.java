import java.util.Scanner;

public class NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String flowerType = scanner.nextLine();
        int flowerCount = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double total = 0;
        if (flowerType.equals("Roses")) {
            total = flowerCount * 5;
            if (flowerCount > 80) {
                total *= 0.9;
            }
        } else if (flowerType.equals("Dahlias")) {
            total = flowerCount * 3.8;
            if (flowerCount > 90) {
                total *= 0.85;
            }
        } else if (flowerType.equals("Tulips")) {
            total = flowerCount * 2.8;
            if (flowerCount > 80) {
                total *= 0.85;
            }
        } else if (flowerType.equals("Narcissus")) {
            total = flowerCount * 3;
            if (flowerCount < 120) {
                total *= 1.15;
            }
        } else if (flowerType.equals("Gladiolus")) {
            total = flowerCount * 2.5;
            if (flowerCount < 80) {
                total *= 1.2;
            }
        }
        if (budget >= total) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", flowerCount, flowerType, budget - total);
        } else if (total > budget) {
            System.out.printf("Not enough money, you need %.2f leva more.", total - budget);
        }
    }
}
