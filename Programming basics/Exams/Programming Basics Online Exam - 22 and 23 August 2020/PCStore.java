import java.util.Scanner;

public class PCStore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceProcessor = Double.parseDouble(scanner.nextLine());
        double priceVideoCard = Double.parseDouble(scanner.nextLine());
        double priceRam = Double.parseDouble(scanner.nextLine());
        int ramCount = Integer.parseInt(scanner.nextLine());
        double discount = Double.parseDouble(scanner.nextLine());

        double priceProcInLeva = priceProcessor * 1.57;
        double priceVideoInLeva = priceVideoCard * 1.57;
        double priceRamInLeva = priceRam * 1.57;
        double total = (priceProcInLeva + priceVideoInLeva) * (1 - discount) + priceRamInLeva * ramCount;

        System.out.printf("Money needed - %.2f leva.", total);
    }
}
