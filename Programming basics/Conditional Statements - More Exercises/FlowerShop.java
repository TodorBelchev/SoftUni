import java.util.Scanner;

public class FlowerShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int magnoliasCount = Integer.parseInt(scanner.nextLine());
        int hyacinthsCount = Integer.parseInt(scanner.nextLine());
        int rosesCount = Integer.parseInt(scanner.nextLine());
        int cactusCount = Integer.parseInt(scanner.nextLine());
        double priceOfPresent = Double.parseDouble(scanner.nextLine());

        double totalPrice = magnoliasCount * 3.25 + hyacinthsCount * 4 + rosesCount * 3.5 + cactusCount * 8;

        if (totalPrice * 0.95 >= priceOfPresent) {
            System.out.printf("She is left with %.0f leva.", Math.floor(totalPrice * 0.95 - priceOfPresent));
        } else {
            System.out.printf("She will have to borrow %.0f leva.", Math.ceil(priceOfPresent - totalPrice * 0.95));
        }
    }
}
