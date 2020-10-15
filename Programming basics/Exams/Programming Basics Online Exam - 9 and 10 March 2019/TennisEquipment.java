import java.util.Scanner;

public class TennisEquipment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double priceRocket = Double.parseDouble(scanner.nextLine());
        int rocketCount = Integer.parseInt(scanner.nextLine());

        int sneakersCount = Integer.parseInt(scanner.nextLine());
        double priceSneakers = priceRocket / 6;
        double rocketExpense = rocketCount * priceRocket;
        double sneakersExpense = sneakersCount * priceSneakers;
        double otherExpense = (rocketExpense + sneakersExpense) * 0.2;
        double total = rocketExpense + sneakersExpense + otherExpense;
        double playerExpense = Math.floor(total / 8);
        double sponsorsExpense = Math.ceil(total * (7.0 / 8));

        System.out.printf("Price to be paid by Djokovic %.0f%n", playerExpense);
        System.out.printf("Price to be paid by sponsors %.0f", sponsorsExpense);
    }
}
