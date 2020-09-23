import java.util.Scanner;

public class SkiTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        String typeRoom = scanner.nextLine();
        String grade = scanner.nextLine();

        int night = days - 1;
        double priceForRoom = 18;
        double priceForApartment = 25;
        double priceForPresidentApartment = 35;
        double total = 0;

        if (typeRoom.equals("room for one person")) {
            total = night * priceForRoom;
        } else if (typeRoom.equals("apartment")) {
            total = night * priceForApartment;
            if (night < 10) {
                total *= 0.7;
            } else if (night <= 15) {
                total *= 0.65;
            } else {
                total *= 0.5;
            }
        } else if (typeRoom.equals("president apartment")) {
            total = night * priceForPresidentApartment;
            if (night < 10) {
                total *= 0.9;
            } else if (night <= 15) {
                total *= 0.85;
            } else {
                total *= 0.8;
            }
        }
        if (grade.equals("positive")) {
            total *= 1.25;
        } else if (grade.equals("negative")) {
            total *= 0.9;
        }
        System.out.printf("%.2f", total);
    }
}
