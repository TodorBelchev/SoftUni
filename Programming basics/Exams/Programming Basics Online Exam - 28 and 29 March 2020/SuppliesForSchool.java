import java.util.Scanner;

public class SuppliesForSchool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pens = Integer.parseInt(scanner.nextLine());
        int markers = Integer.parseInt(scanner.nextLine());
        double cleaningDetergent = Double.parseDouble(scanner.nextLine());
        int percentDiscount = Integer.parseInt(scanner.nextLine());

        double totalPricePens = pens * 5.8;
        double totalPriceMarkers = markers * 7.2;
        double totalPriceCleaningDetergent = cleaningDetergent * 1.2;
        double totalPriceOfSupply = totalPricePens + totalPriceMarkers + totalPriceCleaningDetergent;
        double totalPriceWithDiscount = totalPriceOfSupply - ((totalPriceOfSupply * percentDiscount / 100));

        System.out.printf("%.3f", totalPriceWithDiscount);
    }
}
