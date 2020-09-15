import java.util.Scanner;

public class FruitMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceStraw = Double.parseDouble(scanner.nextLine());
        double bananasCount = Double.parseDouble(scanner.nextLine());
        double orangesCount = Double.parseDouble(scanner.nextLine());
        double raspCount = Double.parseDouble(scanner.nextLine());
        double strawCount = Double.parseDouble(scanner.nextLine());
        double priceRasp = priceStraw * 0.5;
        double priceOranges = priceRasp * 0.6;
        double priceBananas = priceRasp * 0.2;
        double totalBananas = priceBananas * bananasCount;
        double totalOranges = priceOranges * orangesCount;
        double totalRasp = priceRasp * raspCount;
        double totalStraw = priceStraw * strawCount;
        double total = totalBananas + totalOranges + totalRasp + totalStraw;
        System.out.printf("%.2f", total);
    }
}
