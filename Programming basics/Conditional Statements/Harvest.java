import java.util.Scanner;

public class Harvest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int area = Integer.parseInt(scanner.nextLine());
        double grape = Double.parseDouble(scanner.nextLine());
        int wineNeeded = Integer.parseInt(scanner.nextLine());
        int workersCount = Integer.parseInt(scanner.nextLine());

        double grapeWeight = (area * 0.4) * grape;
        double wine = grapeWeight / 2.5;

        if (wine < wineNeeded) {
            System.out.printf("It will be a tough winter! More %.0f liters wine needed.", Math.floor(wineNeeded - wine));
        } else {
            System.out.printf("Good harvest this year! Total wine: %.0f liters.%n", Math.floor(wine));
            System.out.printf("%.0f liters left -> %.0f liters per person.", Math.ceil(wine - wineNeeded), Math.ceil((wine - wineNeeded) / workersCount));
        }
    }
}
