import java.util.Scanner;

public class EasterBakery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceFlour = Double.parseDouble(scanner.nextLine());
        double flourKilograms = Double.parseDouble(scanner.nextLine());
        double sugarKilograms = Double.parseDouble(scanner.nextLine());
        int eggs = Integer.parseInt(scanner.nextLine());
        int yeast = Integer.parseInt(scanner.nextLine());

        double priceSugar = priceFlour * 0.75;
        double priceEggs = priceFlour * 1.1;
        double priceYeast = priceSugar * 0.2;
        double flourSum = flourKilograms * priceFlour;
        double sugarSum = sugarKilograms * priceSugar;
        double eggsSum = eggs * priceEggs;
        double yeastSum = yeast * priceYeast;
        double total = flourSum + sugarSum + eggsSum + yeastSum;

        System.out.printf("%.2f", total);
    }
}
