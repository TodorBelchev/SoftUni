import java.util.Scanner;

public class Repainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int stretch = Integer.parseInt(scanner.nextLine());
        int paint = Integer.parseInt(scanner.nextLine());
        int paintDivider = Integer.parseInt(scanner.nextLine());
        int hours = Integer.parseInt(scanner.nextLine());

        double stretchPrice = (stretch + 2) * 1.5;
        double paintPrice = paint * 1.1 * 14.5;
        double dividerPrice = paintDivider * 5;
        double totalForMaterials = stretchPrice + paintPrice + dividerPrice + 0.4;
        double totalForManWork = hours * (totalForMaterials * 0.3);
        double total = totalForManWork + totalForMaterials;

        System.out.printf("Total expenses: %.2f lv.", total);
    }
}
