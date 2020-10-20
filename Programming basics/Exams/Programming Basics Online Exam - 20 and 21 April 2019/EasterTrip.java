import java.util.Scanner;

public class EasterTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String destination = scanner.nextLine();
        String dates = scanner.nextLine();
        int nights = Integer.parseInt(scanner.nextLine());

        int priceForNight = 0;

        if (destination.equals("France")) {

            if (dates.equals("21-23")) {
                priceForNight = 30;
            } else if (dates.equals("24-27")) {
                priceForNight = 35;
            } else if (dates.equals("28-31")) {
                priceForNight = 40;
            }
        } else if (destination.equals("Italy")) {

            if (dates.equals("21-23")) {
                priceForNight = 28;
            } else if (dates.equals("24-27")) {
                priceForNight = 32;
            } else if (dates.equals("28-31")) {
                priceForNight = 39;
            }
        } else if (destination.equals("Germany")) {

            if (dates.equals("21-23")) {
                priceForNight = 32;
            } else if (dates.equals("24-27")) {
                priceForNight = 37;
            } else if (dates.equals("28-31")) {
                priceForNight = 43;
            }
        }
        
        double total = priceForNight * nights;
        System.out.printf("Easter trip to %s : %.2f leva.", destination, total);
    }
}
