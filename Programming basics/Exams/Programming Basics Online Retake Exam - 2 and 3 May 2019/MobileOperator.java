import java.util.Scanner;

public class MobileOperator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String years = scanner.nextLine();
        String type = scanner.nextLine();
        String extraMobile = scanner.nextLine();
        int months = Integer.parseInt(scanner.nextLine());
        double price = 0;

        if (years.equals("one") && type.equals("Small")) {
            price = 9.98;
        } else if (years.equals("one") && type.equals("Middle")) {
            price = 18.99;
        } else if (years.equals("one") && type.equals("Large")) {
            price = 25.98;
        } else if (years.equals("one") && type.equals("ExtraLarge")) {
            price = 35.99;
        } else if (years.equals("two") && type.equals("Small")) {
            price = 8.58;
        } else if (years.equals("two") && type.equals("Middle")) {
            price = 17.09;
        } else if (years.equals("two") && type.equals("Large")) {
            price = 23.59;
        } else if (years.equals("two") && type.equals("ExtraLarge")) {
            price = 31.79;
        }

        if (extraMobile.equals("yes")) {

            if (price <= 10.00) {
                price += 5.5;
            } else if (price <= 30.00) {
                price += 4.35;
            } else {
                price += 3.85;
            }
        }

        if (years.equals("two")) {
            price *= 0.9625;
        }

        double totalPrice = price * months;
        System.out.printf("%.2f lv.", totalPrice);
    }
}
