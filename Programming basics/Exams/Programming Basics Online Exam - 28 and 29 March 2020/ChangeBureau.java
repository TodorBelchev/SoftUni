import java.util.Scanner;

public class ChangeBureau {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int bitcoin = Integer.parseInt(scanner.nextLine());
        double uan = Double.parseDouble(scanner.nextLine());
        double commissionPercent = Double.parseDouble(scanner.nextLine());

        double bitcoinLv = (bitcoin * 1168);
        double uanLv = ((uan * 0.15) * 1.76);
        double commission = ((bitcoinLv + uanLv) * commissionPercent / 100);
        double result = ((bitcoinLv + uanLv) - commission) / 1.95;

        System.out.printf("%.2f", result);
    }
}
