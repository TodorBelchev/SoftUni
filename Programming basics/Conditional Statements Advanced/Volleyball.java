import java.util.Scanner;

public class Volleyball {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String typeOfYear = scanner.nextLine();
        int holidaysCount = Integer.parseInt(scanner.nextLine());
        int weekendsHomeCount = Integer.parseInt(scanner.nextLine());

        int weekendsInSofia = 48 - weekendsHomeCount;
        double gamesInSofia = weekendsInSofia * 3 * 1.0 / 4;
        double holidayGames = holidaysCount * 2 * 1.0 / 3;
        double leapGames = 0;

        if (typeOfYear.equals("leap")) {
            leapGames = (gamesInSofia + holidayGames + weekendsHomeCount) * 0.15;
        }
        double totalGames = Math.floor(gamesInSofia + holidayGames + weekendsHomeCount + leapGames);
        System.out.printf("%.0f", totalGames);
    }
}
