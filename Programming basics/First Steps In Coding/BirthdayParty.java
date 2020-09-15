import java.util.Scanner;

public class BirthdayParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rent = Integer.parseInt(scanner.nextLine());
        double priceForCake = rent * 0.2;
        double priceDrinks = priceForCake * 0.55;
        double priceAnimation = 1.0*rent / 3;
        double total = rent + priceForCake + priceDrinks + priceAnimation;
        System.out.printf("%.1f", total);
    }
}
