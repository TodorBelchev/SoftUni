import java.util.Scanner;

public class TravelAgency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int ticketCount = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());
        int price = Integer.parseInt(scanner.nextLine());
        int total = ticketCount * price;

        if (total <= budget) {
            System.out.printf("You can sell your client %d tickets for the price of %d$!%n", ticketCount, total);
            System.out.printf("Your client should become a change of %d$!", budget - total);
        } else {
            System.out.printf("The budget of %d$ is not enough. Your client can't buy %d tickets with this budget!", budget, ticketCount);
        }
    }
}
