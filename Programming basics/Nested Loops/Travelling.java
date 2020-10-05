import java.util.Scanner;

public class Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String destination = scanner.nextLine();
        while (!destination.equals("End")) {
            double totalSavedMoney = 0;
            double budget = Double.parseDouble(scanner.nextLine());
            while (budget > totalSavedMoney) {
                double savedMoney = Double.parseDouble(scanner.nextLine());
                totalSavedMoney += savedMoney;
            }
            if (budget <= totalSavedMoney) {
                System.out.printf("Going to %s!%n", destination);
            }
            destination = scanner.nextLine();
        }
    }
}
