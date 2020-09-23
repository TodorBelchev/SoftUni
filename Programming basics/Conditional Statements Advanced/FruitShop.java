import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String day = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());
        double priceBanana = 0;
        double priceApple = 0;
        double priceOrange = 0;
        double priceGrapefruit = 0;
        double priceKiwi = 0;
        double pricePineapple = 0;
        double priceGrapes = 0;
        double total = 0;
        if (day.equals("Sunday") || day.equals("Saturday")) {
            priceBanana = 2.7;
            priceApple = 1.25;
            priceOrange = 0.9;
            priceGrapefruit = 1.6;
            priceKiwi = 3;
            pricePineapple = 5.6;
            priceGrapes = 4.2;
            if (fruit.equals("banana")) {
                total = quantity * priceBanana;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("apple")) {
                total = quantity * priceApple;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("orange")) {
                total = quantity * priceOrange;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("grapefruit")) {
                total = quantity * priceGrapefruit;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("kiwi")) {
                total = quantity * priceKiwi;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("pineapple")) {
                total = quantity * pricePineapple;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("grapes")) {
                total = quantity * priceGrapes;
                System.out.printf("%.2f", total);
            } else {
                System.out.println("error");
            }
        } else if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
            priceBanana = 2.5;
            priceApple = 1.2;
            priceOrange = 0.85;
            priceGrapefruit = 1.45;
            priceKiwi = 2.7;
            pricePineapple = 5.5;
            priceGrapes = 3.85;
            if (fruit.equals("banana")) {
                total = quantity * priceBanana;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("apple")) {
                total = quantity * priceApple;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("orange")) {
                total = quantity * priceOrange;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("grapefruit")) {
                total = quantity * priceGrapefruit;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("kiwi")) {
                total = quantity * priceKiwi;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("pineapple")) {
                total = quantity * pricePineapple;
                System.out.printf("%.2f", total);
            } else if (fruit.equals("grapes")) {
                total = quantity * priceGrapes;
                System.out.printf("%.2f", total);
            } else {
                System.out.println("error");
            }
        } else {
            System.out.println("error");
        }

    }
}
