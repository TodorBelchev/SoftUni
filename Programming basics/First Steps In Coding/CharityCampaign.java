import java.util.Scanner;

public class CharityCampaign {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int numberOfCandyMans = Integer.parseInt(scanner.nextLine());
        int cakesCount = Integer.parseInt(scanner.nextLine());
        int wafflesCount = Integer.parseInt(scanner.nextLine());
        int pancakesCount = Integer.parseInt(scanner.nextLine());
        double cakesPrice = cakesCount * 45;
        double wafflesPrice = wafflesCount * 5.8;
        double pancakesPrice = pancakesCount * 3.2;
        double totalForOneDay = (cakesPrice + wafflesPrice + pancakesPrice)*numberOfCandyMans;
        double totalForAllDays = totalForOneDay * days;
        double expenses = totalForAllDays * 0.125;
        double totalAfterExpenses = totalForAllDays - expenses;
        System.out.printf("%.2f", totalAfterExpenses);
    }
}
