import java.util.Scanner;

public class EnergyBooster {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String set = scanner.nextLine();
        int quantity = Integer.parseInt(scanner.nextLine());
        double fruitPrice = 0;
        double sizeNumber = 0;
        if (fruit.equals("Watermelon")) {
            if (set.equals("small")) {
                sizeNumber = 2;
                fruitPrice = 56;
            } else if (set.equals("big")) {
                sizeNumber = 5;
                fruitPrice = 28.7;
            }
        } else if (fruit.equals("Mango")) {
            if (set.equals("small")) {
                sizeNumber = 2;
                fruitPrice = 36.66;
            } else if (set.equals("big")) {
                sizeNumber = 5;
                fruitPrice = 19.6;
            }
        } else if (fruit.equals("Pineapple")) {
            if (set.equals("small")) {
                sizeNumber = 2;
                fruitPrice = 42.1;
            } else if (set.equals("big")) {
                sizeNumber = 5;
                fruitPrice = 24.8;
            }
        } else if (fruit.equals("Raspberry")) {
            if (set.equals("small")) {
                sizeNumber = 2;
                fruitPrice = 20;
            } else if (set.equals("big")) {
                sizeNumber = 5;
                fruitPrice = 15.2;
            }
        }
        double result = sizeNumber * fruitPrice * quantity;
        if (result >= 400 && result < 1000) {
            result *= 0.85;
        } else if (result > 1000) {
            result *= 0.5;
        }
        System.out.printf("%.2f lv.", result);
    }
}