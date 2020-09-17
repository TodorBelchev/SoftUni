import java.util.Scanner;

public class FishLand {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceMackerel = Double.parseDouble(scanner.nextLine());
        double priceSprat = Double.parseDouble(scanner.nextLine());
        double bonitoWeight = Double.parseDouble(scanner.nextLine());
        double scadWeight = Double.parseDouble(scanner.nextLine());
        double musselWeight = Double.parseDouble(scanner.nextLine());
        double priceBonito = priceMackerel * 1.6;
        double priceScad = priceSprat * 1.8;
        double priceMussel = 7.5;
        double total = priceBonito * bonitoWeight + musselWeight * priceMussel + scadWeight * priceScad;
        System.out.printf("%.2f", total);
    }
}
