import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String month = scanner.nextLine();
        int nights = Integer.parseInt(scanner.nextLine());
        double priceStudio = 0;
        double priceApartment = 0;
        if (month.equals("May") || month.equals("October")) {
            priceStudio = 50;
            priceApartment = 65;
            if (nights > 7 && nights <= 14) {
                priceStudio *= 0.95;
            } else if (nights > 14) {
                priceStudio *= 0.7;
                priceApartment *= 0.9;
            }
        } else if (month.equals("June") || month.equals("September")) {
            priceStudio = 75.2;
            priceApartment = 68.7;
            if (nights > 14) {
                priceStudio *= 0.8;
                priceApartment *= 0.9;
            }
        } else if (month.equals("July") || month.equals("August")) {
            priceStudio = 76;
            priceApartment = 77;
            if (nights > 14) {
                priceApartment *= 0.9;
            }
        }
        double totalStudio = priceStudio * nights;
        double totalApartment = priceApartment * nights;
        System.out.printf("Apartment: %.2f lv.%n", totalApartment);
        System.out.printf("Studio: %.2f lv.", totalStudio);
    }
}
