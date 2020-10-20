import java.util.Scanner;

public class EasterGuests {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int guests = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double breadsNeeded = Math.ceil(guests * 1.0 / 3);
        int eggsNeeded = guests * 2;
        double priceBreads = breadsNeeded * 4;
        double priceEggs = eggsNeeded * 0.45;
        double total = priceBreads + priceEggs;
        
        if (budget >= total) {
            System.out.printf("Lyubo bought %.0f Easter bread and %d eggs.%n", breadsNeeded, eggsNeeded);
            System.out.printf("He has %.2f lv. left.", budget - total);
        } else {
            System.out.println("Lyubo doesn't have enough money.");
            System.out.printf("He needs %.2f lv. more.", total - budget);
        }
    }
}
