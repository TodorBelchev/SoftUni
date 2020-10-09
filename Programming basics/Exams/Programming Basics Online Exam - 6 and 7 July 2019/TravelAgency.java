import java.util.Scanner;

public class TravelAgency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String city = scanner.nextLine();
        String packet = scanner.nextLine();
        String vipStatus = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        double price = 0;
        boolean validInput = true;

        if (days < 1) {
            System.out.println("Days must be positive number!");
            validInput = false;
        }

        if (city.equals("Bansko") || city.equals("Borovets")) {
            if (packet.equals("withEquipment")) {
                price = 100;
                if (vipStatus.equals("yes")) {
                    price *= 0.9;
                }
            } else if (packet.equals("noEquipment")) {
                price = 80;
                if (vipStatus.equals("yes")) {
                    price *= 0.95;
                }
            } else {
                System.out.println("Invalid input!");
                validInput = false;
            }
        } else if (city.equals("Varna") || city.equals("Burgas")) {
            if (packet.equals("withBreakfast")) {
                price = 130;
                if (vipStatus.equals("yes")) {
                    price *= 0.88;
                }
            } else if (packet.equals("noBreakfast")) {
                price = 100;
                if (vipStatus.equals("yes")) {
                    price *= 0.93;
                }
            } else {
                System.out.println("Invalid input!");
                validInput = false;
            }
        } else {
            System.out.println("Invalid input!");
            validInput = false;
        }
        double total = price * days;
        if (days > 7) {
            total = price * (days - 1);
        }
        if (validInput) {
            System.out.printf("The price is %.2flv! Have a nice time!", total);
        }

    }
}
