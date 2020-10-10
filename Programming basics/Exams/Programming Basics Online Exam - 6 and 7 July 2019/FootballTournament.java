import java.util.Scanner;

public class FootballTournament {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int matchesPlayed = Integer.parseInt(scanner.nextLine());

        int points = 0;
        int winCounter = 0;
        int drawCounter = 0;
        int loseCounter = 0;
        boolean hasMatches = true;

        if (matchesPlayed == 0) {
            System.out.printf("%s hasn't played any games during this season.", name);
            hasMatches = false;
        }

        if (hasMatches) {
            for (int i = 0; i < matchesPlayed; i++) {
                String result = scanner.nextLine();
                if (result.equals("W")) {
                    points += 3;
                    winCounter++;
                } else if (result.equals("D")) {
                    points += 1;
                    drawCounter++;
                } else {
                    loseCounter++;
                }
            }
            System.out.printf("%s has won %d points during this season.%n", name, points);
            System.out.println("Total stats:");
            System.out.printf("## W: %d%n", winCounter);
            System.out.printf("## D: %d%n", drawCounter);
            System.out.printf("## L: %d%n", loseCounter);
            System.out.printf("Win rate: %.2f%%", (winCounter * 1.0 / matchesPlayed) * 100);
        }
    }
}
