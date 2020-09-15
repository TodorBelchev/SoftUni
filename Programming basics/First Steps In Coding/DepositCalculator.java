import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double deposit= Double.parseDouble(scanner.nextLine());
        int months= Integer.parseInt(scanner.nextLine());
        double yearlyPercent= Double.parseDouble(scanner.nextLine());
        double interestAmountYear= (deposit*yearlyPercent)/100;
        double interestAmountMonth= interestAmountYear/12;
        double total= deposit + months*interestAmountMonth;
        System.out.printf("%.2f", total);
    }
}
