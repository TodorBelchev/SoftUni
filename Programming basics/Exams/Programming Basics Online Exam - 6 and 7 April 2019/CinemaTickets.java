import java.util.Scanner;

public class CinemaTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();

        int moviesTickets = 0;
        int student = 0;
        int standard = 0;
        int kids = 0;

        while (!command.equals("Finish")) {
            int freePlaces = Integer.parseInt(scanner.nextLine());
            String type = scanner.nextLine();
            int currentPlaces = 0;

            while (!type.equals("End")) {

                if (type.equals("student")) {
                    student++;
                } else if (type.equals("standard")) {
                    standard++;
                } else if (type.equals("kid")) {
                    kids++;
                }

                currentPlaces++;
                moviesTickets++;

                if (freePlaces == currentPlaces) {
                    break;
                }

                type = scanner.nextLine();
            }
            double capacitySale = (1.0 * currentPlaces / freePlaces) * 100;
            System.out.printf("%s - %.2f%% full.%n", command, capacitySale);
            command = scanner.nextLine();
        }

        double studentPercent = (1.0 * student / moviesTickets) * 100;
        double standardPercent = (1.0 * standard / moviesTickets) * 100;
        double kidsPercent = (1.0 * kids / moviesTickets) * 100;
        System.out.printf("Total tickets: %d%n", moviesTickets);
        System.out.printf("%.2f%% student tickets.%n", studentPercent);
        System.out.printf("%.2f%% standard tickets.%n", standardPercent);
        System.out.printf("%.2f%% kids tickets.", kidsPercent);
    }
}
