import java.util.Scanner;

public class ShopingForSchool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int pencilCount = Integer.parseInt(scanner.nextLine());
        int fullMasterCount = Integer.parseInt(scanner.nextLine());
        int drawingBookCount = Integer.parseInt(scanner.nextLine());
        int bookCount = Integer.parseInt(scanner.nextLine());

        double total = (pencilCount * 4.75 + fullMasterCount * 1.8 + drawingBookCount * 6.5 + bookCount * 2.5);
        double discount = total * 0.05;

        System.out.printf("Your total is %.2flv", total - discount);
    }
}
