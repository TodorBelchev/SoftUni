import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tax = Integer.parseInt(scanner.nextLine());

        double priceSneakers = tax * 0.6;
        double priceClothes = priceSneakers * 0.8;
        double priceBall = priceClothes * 0.25;
        double priceAccessories = priceBall * 0.2;
        
        double total = tax + priceSneakers + priceClothes + priceBall + priceAccessories;
        System.out.printf("%.2f", total);
    }
}
