import java.util.Scanner;

public class MovieStars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String command = scanner.nextLine();

        while (!command.equals("ACTION")) {

            if (command.length() < 16) {
                double current = Double.parseDouble(scanner.nextLine());
                budget -= current;
            } else {
                budget *= 0.8;
            }

            if (budget <= 0) {
                break;
            }

            command = scanner.nextLine();
        }

        if (budget >= 0) {
            System.out.printf("We are left with %.2f leva.", budget);
        } else {
            System.out.printf("We need %.2f leva for our actors.", Math.abs(budget));
        }
    }
}
