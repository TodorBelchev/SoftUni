import java.util.Scanner;

public class TennisRankList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tournamentsCount = Integer.parseInt(scanner.nextLine());
        int points = Integer.parseInt(scanner.nextLine());
        int currentPoints = 0;
        int winCounter = 0;

        for (int i = 0; i < tournamentsCount; i++) {
            String input = scanner.nextLine();

            if ("W".equals(input)) {
                points += 2000;
                currentPoints += 2000;
                winCounter++;
            } else if ("F".equals(input)) {
                points += 1200;
                currentPoints += 1200;
            } else {
                points += 720;
                currentPoints += 720;
            }

        }
        
        double averagePoints = Math.floor(currentPoints * 1.0 / tournamentsCount);
        double percentWins = winCounter * 1.0 / tournamentsCount * 100;
        System.out.printf("Final points: %d%n", points);
        System.out.printf("Average points: %.0f%n", averagePoints);
        System.out.printf("%.2f%%", percentWins);
    }
}
