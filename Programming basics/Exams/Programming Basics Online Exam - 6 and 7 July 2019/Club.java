import java.util.Scanner;

public class Club {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double profit = Double.parseDouble(scanner.nextLine());
        String input = scanner.nextLine();

        double income = 0;

        while (!input.equals("Party!")) {
            int price = input.length();
            int count = Integer.parseInt(scanner.nextLine());
            double currentIncome = price * count;
            if (currentIncome % 2 != 0) {
                currentIncome *= 0.75;
            }
            income += currentIncome;

            if (income >= profit) {
                System.out.println("Target acquired.");
                break;
            }
            input = scanner.nextLine();
        }
        if (income < profit) {
            System.out.printf("We need %.2f leva more.%n", profit - income);
        }
        System.out.printf("Club income - %.2f leva.", income);
    }
}
