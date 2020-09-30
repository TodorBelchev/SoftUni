import java.util.Scanner;

public class Bills {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int months = Integer.parseInt(scanner.nextLine());
        double waterExpenses = 20 * months;
        double internetExpenses = 15 * months;
        double otherExpenses = 0;
        double electricityExpenses = 0;
        for (int i = 1; i <= months; i++) {
            double electricityCurrentExpenses = Double.parseDouble(scanner.nextLine());
            otherExpenses += (20 + 15 + electricityCurrentExpenses) * 1.2;
            electricityExpenses += electricityCurrentExpenses;
        }
        System.out.printf("Electricity: %.2f lv%n", electricityExpenses);
        System.out.printf("Water: %.2f lv%n", waterExpenses);
        System.out.printf("Internet: %.2f lv%n", internetExpenses);
        System.out.printf("Other: %.2f lv%n", otherExpenses);
        System.out.printf("Average: %.2f lv", (electricityExpenses + waterExpenses + internetExpenses + otherExpenses) / months);
    }
}
