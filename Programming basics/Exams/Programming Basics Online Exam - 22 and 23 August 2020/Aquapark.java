import java.util.Scanner;

public class Aquapark {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String month = scanner.nextLine();
        int hours = Integer.parseInt(scanner.nextLine());
        int pplCount = Integer.parseInt(scanner.nextLine());
        String dayTime = scanner.nextLine();
        double price = 0;

        if ("march".equals(month) || "april".equals(month) || "may".equals(month)) {

            if ("day".equals(dayTime)) {
                price = 10.5;
            } else {
                price = 8.4;
            }

        } else {

            if ("day".equals(dayTime)) {
                price = 12.6;
            } else {
                price = 10.2;
            }

        }

        if (pplCount > 3) {
            price *= 0.9;
        }

        if (hours > 4) {
            price *= 0.5;
        }

        double total = price * pplCount * hours;
        System.out.printf("Price per person for one hour: %.2f%n", price);
        System.out.printf("Total cost of the visit: %.2f", total);
    }
}
