import java.util.Scanner;

public class FootballResults {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int winsCount = 0;
        int loseCount = 0;
        int drawCount = 0;

        for (int i = 0; i < 3; i++) {
            String input = scanner.nextLine();

            if (input.charAt(0) > input.charAt(2)) {
                winsCount++;
            } else if (input.charAt(0) == input.charAt(2)) {
                drawCount++;
            } else {
                loseCount++;
            }

        }

        System.out.printf("Team won %d games.%n", winsCount);
        System.out.printf("Team lost %d games.%n", loseCount);
        System.out.printf("Drawn games: %d", drawCount);
    }
}
