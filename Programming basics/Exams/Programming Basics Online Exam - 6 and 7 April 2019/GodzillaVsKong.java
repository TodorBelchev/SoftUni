import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int actors = Integer.parseInt(scanner.nextLine());
        double priceOfClothes = Double.parseDouble(scanner.nextLine());

        double decor = budget * 0.1;
        double sumOfClothes = priceOfClothes * actors;

        if (actors > 150) {
            sumOfClothes = sumOfClothes * 0.9;
            double totalCost = sumOfClothes + decor;

            if (totalCost <= budget) {
                System.out.println("Action!");
                System.out.printf("Wingard starts filming with %.2f leva left.", budget - totalCost);
            } else {
                System.out.println("Not enough money!");
                System.out.printf("Wingard needs %.2f leva more.", totalCost - budget);
            }
        } else {
            double totalCost = sumOfClothes + decor;

            if (totalCost <= budget) {
                System.out.println("Action!");
                System.out.printf("Wingard starts filming with %.2f leva left.", budget - totalCost);
            } else {
                System.out.println("Not enough money!");
                System.out.printf("Wingard needs %.2f leva more.", totalCost - budget);
            }

        }
    }
}