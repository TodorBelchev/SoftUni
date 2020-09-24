import java.util.Scanner;

public class Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();
        double expenses = 0;
        String destination = "";
        String typePlace = "";
        if (budget <= 100) {
            destination = "Bulgaria";
            if (season.equals("summer")) {
                expenses = budget * 0.3;
                typePlace = "Camp";
            } else if (season.equals("winter")) {
                expenses = budget * 0.7;
                typePlace = "Hotel";
            }
        } else if (budget <= 1000) {
            destination = "Balkans";
            if (season.equals("summer")) {
                expenses = budget * 0.4;
                typePlace = "Camp";
            } else if (season.equals("winter")) {
                expenses = budget * 0.8;
                typePlace = "Hotel";
            }
        } else if (budget > 1000) {
            destination = "Europe";
            typePlace = "Hotel";
            expenses = budget * 0.9;
        }
        System.out.printf("Somewhere in %s%n", destination);
        System.out.printf("%s - %.2f", typePlace, expenses);
    }
}
