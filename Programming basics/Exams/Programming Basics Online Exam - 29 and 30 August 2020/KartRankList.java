import java.util.Scanner;

public class KartRankList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        int goldCount = 0;
        int silverCount = 0;
        int bronzeCount = 0;
        int bestTimeMin = 0;
        int bestTimeSec = 0;
        int bestTime = 999999999;
        String bestRacer = "";

        while (!command.equals("Finish")) {
            int minutes = Integer.parseInt(scanner.nextLine());
            int seconds = Integer.parseInt(scanner.nextLine());
            int timeInSeconds = minutes * 60 + seconds;

            if (timeInSeconds < 55) {
                goldCount++;
            } else if (timeInSeconds < 86) {
                silverCount++;
            } else if (timeInSeconds < 121) {
                bronzeCount++;
            }

            if (timeInSeconds < bestTime) {
                bestTime = timeInSeconds;
                bestRacer = command;
                bestTimeMin = minutes;
                bestTimeSec = seconds;
            }

            command = scanner.nextLine();
        }

        System.out.printf("With %d minutes and %d seconds %s is the winner of the day!%n", bestTimeMin, bestTimeSec, bestRacer);
        System.out.printf("Today's prizes are %d Gold %d Silver and %d Bronze cards!", goldCount, silverCount, bronzeCount);
    }
}
