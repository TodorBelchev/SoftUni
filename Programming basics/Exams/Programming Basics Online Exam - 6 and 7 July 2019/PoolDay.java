import java.util.Scanner;

public class PoolDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int ppl = Integer.parseInt(scanner.nextLine());
        double tax = Double.parseDouble(scanner.nextLine());
        double priceChair = Double.parseDouble(scanner.nextLine());
        double priceUmbrella = Double.parseDouble(scanner.nextLine());

        double totalTax = tax * ppl;
        double totalPriceChair = Math.ceil(ppl * 0.75) * priceChair;
        double totalPriceUmbrella = Math.ceil(ppl * 0.5) * priceUmbrella;
        double total = totalTax + totalPriceChair + totalPriceUmbrella;
        
        System.out.printf("%.2f lv.", total);
    }
}
