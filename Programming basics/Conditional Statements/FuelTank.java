import java.util.Scanner;

public class FuelTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String typeFuel = scanner.nextLine();
        double currentFuel = Double.parseDouble(scanner.nextLine());

        if (typeFuel.equals("Diesel")) {
            if (currentFuel < 25) {
                System.out.printf("Fill your tank with diesel!", typeFuel);
            } else {
                System.out.printf("You have enough diesel.", typeFuel);
            }
        } else if (typeFuel.equals("Gasoline")) {
            if (currentFuel < 25) {
                System.out.printf("Fill your tank with gasoline!", typeFuel);
            } else {
                System.out.printf("You have enough gasoline.", typeFuel);
            }
        } else if (typeFuel.equals("Gas")) {
            if (currentFuel < 25) {
                System.out.printf("Fill your tank with gas!", typeFuel);
            } else {
                System.out.printf("You have enough gas.", typeFuel);
            }
        } else {
            System.out.println("Invalid fuel!");
        }
    }
}
