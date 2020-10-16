import java.util.Scanner;

public class BasketballTournament {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int winCount = 0;
        int loseCount = 0;

        while (!"End of tournaments".equals(name)) {
            int matchesCount = Integer.parseInt(scanner.nextLine());

            for (int i = 1; i <= matchesCount; i++) {
                int dessyPoints = Integer.parseInt(scanner.nextLine());
                int rivalPoints = Integer.parseInt(scanner.nextLine());

                if (dessyPoints > rivalPoints) {
                    winCount++;
                    System.out.printf("Game %d of tournament %s: win with %d points.%n", i, name, dessyPoints - rivalPoints);
                } else {
                    loseCount++;
                    System.out.printf("Game %d of tournament %s: lost with %d points.%n", i, name, rivalPoints - dessyPoints);
                }

            }

            name = scanner.nextLine();
        }
        
        double percentWins = winCount * 1.0 / (winCount + loseCount) * 100;
        double percentLose = loseCount * 1.0 / (winCount + loseCount) * 100;
        System.out.printf("%.2f%% matches win%n", percentWins);
        System.out.printf("%.2f%% matches lost", percentLose);
    }
}
