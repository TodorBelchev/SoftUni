import java.util.Scanner;

public class CinemaTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        int totalTicketCounter = 0;
        int totalStudent = 0;
        int totalStandard = 0;
        int totalKid = 0;
        while (!command.equals("Finish")) {
            int seatsCount = Integer.parseInt(scanner.nextLine());
            String typeTicket = scanner.nextLine();
            int ticketsForThisMovie = 0;
            while (!typeTicket.equals("End")) {
                if (typeTicket.equals("student")) {
                    totalTicketCounter++;
                    ticketsForThisMovie++;
                    totalStudent++;
                } else if (typeTicket.equals("standard")) {
                    totalTicketCounter++;
                    ticketsForThisMovie++;
                    totalStandard++;
                } else if (typeTicket.equals("kid")) {
                    totalTicketCounter++;
                    ticketsForThisMovie++;
                    totalKid++;
                }
                if (seatsCount == ticketsForThisMovie) {
                    break;
                }
                typeTicket = scanner.nextLine();
            }
            System.out.printf("%s - %.2f%% full.%n", command, (ticketsForThisMovie * 1.0 / seatsCount) * 100);
            command = scanner.nextLine();
        }
        System.out.printf("Total tickets: %d%n", totalTicketCounter);
        System.out.printf("%.2f%% student tickets.%n", (totalStudent * 1.0 / totalTicketCounter) * 100);
        System.out.printf("%.2f%% standard tickets.%n", (totalStandard * 1.0 / totalTicketCounter) * 100);
        System.out.printf("%.2f%% kids tickets.", (totalKid * 1.0 / totalTicketCounter) * 100);
    }
}
