import java.util.Scanner;

public class EnergyBoosterV2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String set = scanner.nextLine();
        int quantity = Integer.parseInt(scanner.nextLine());
        double price = 0;
        if (set.equals("small")) {
            if (fruit.equals("Watermelon")) {
                price = quantity * 2 * 56;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals(("Mango"))) {
                price = quantity * 2 * 36.66;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals("Pineapple")) {
                price = quantity * 2 * 42.1;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals("Raspberry")) {
                price = quantity * 2 * 20;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            }
        } else if (set.equals("big")) {
            if (fruit.equals("Watermelon")) {
                price = quantity * 5 * 28.7;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals("Mango")) {
                price = quantity * 5 * 19.6;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals("Pineapple")) {
                price = quantity * 5 * 24.8;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            } else if (fruit.equals("Raspberry")) {
                price = quantity * 5 * 15.2;
                if (price < 400) {
                    System.out.printf("%.2f lv.", price);
                } else if (price <= 1000) {
                    price *= 0.85;
                    System.out.printf("%.2f lv.", price);
                } else if (price > 1000) {
                    price *= 0.5;
                    System.out.printf("%.2f lv.", price);
                }
            }
        }
    }
}
