import java.util.Scanner;

public class OscarsCeremony {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int priceHall = Integer.parseInt(scanner.nextLine());

        double priceStatue = priceHall * 0.7;
        double priceCatering = priceStatue * 0.85;
        double priceSounding = priceCatering * 0.5;
        double total = priceStatue + priceCatering + priceSounding + priceHall;
        System.out.printf("%.2f", total);
    }
}
