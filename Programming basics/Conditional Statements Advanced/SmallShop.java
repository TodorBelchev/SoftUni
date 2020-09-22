import java.util.Scanner;

public class SmallShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        String town = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());

        double coffeePrice = 0;
        double waterPrice = 0;
        double beerPrice = 0;
        double sweetsPrice = 0;
        double peanutsPrice = 0;
        double total = 0;
        if (town.equals("Sofia")) {
            coffeePrice = 0.5;
            waterPrice = 0.8;
            beerPrice = 1.2;
            sweetsPrice = 1.45;
            peanutsPrice = 1.6;
        } else if (town.equals("Plovdiv")) {
            coffeePrice = 0.4;
            waterPrice = 0.7;
            beerPrice = 1.15;
            sweetsPrice = 1.30;
            peanutsPrice = 1.5;
        } else if (town.equals("Varna")) {
            coffeePrice = 0.45;
            waterPrice = 0.7;
            beerPrice = 1.1;
            sweetsPrice = 1.35;
            peanutsPrice = 1.55;
        }
        if (product.equals("coffee")) {
            total = coffeePrice * quantity;
        } else if (product.equals("water")) {
            total = waterPrice * quantity;
        } else if (product.equals("beer")) {
            total = beerPrice * quantity;
        } else if (product.equals("sweets")) {
            total = sweetsPrice * quantity;
        } else if (product.equals("peanuts")) {
            total = peanutsPrice * quantity;
        }
        System.out.println(total);
    }
}
