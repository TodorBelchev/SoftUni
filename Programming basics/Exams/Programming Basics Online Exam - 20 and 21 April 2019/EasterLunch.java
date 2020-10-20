import java.util.Scanner;

public class EasterLunch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int breads = Integer.parseInt(scanner.nextLine());
        int eggs = Integer.parseInt(scanner.nextLine());
        int cookies = Integer.parseInt(scanner.nextLine());

        double priceBreads = breads * 3.2;
        double priceEggs = eggs * 4.35;
        double priceCookies = cookies * 5.4;
        double priceForPaint = eggs * 12 * 0.15;
        double sum = priceBreads + priceEggs + priceCookies + priceForPaint;
        
        System.out.printf("%.2f", sum);
    }
}
