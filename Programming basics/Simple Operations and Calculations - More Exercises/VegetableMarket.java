import java.util.Scanner;

public class VegetableMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceVeg = Double.parseDouble(scanner.nextLine());
        double priceFruit = Double.parseDouble(scanner.nextLine());
        int vegKgs = Integer.parseInt(scanner.nextLine());
        int fruitKgs = Integer.parseInt(scanner.nextLine());
        double total = (priceVeg * vegKgs + priceFruit * fruitKgs) / 1.94;
        System.out.printf("%.2f", total);
    }
}
