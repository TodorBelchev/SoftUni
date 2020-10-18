import java.util.Scanner;

public class TournamentOfChristmas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tournamentDays = Integer.parseInt(scanner.nextLine());
        double totalMoneyRaised = 0;
        int totalWinDays = 0;
        int totalLoseDays = 0;

        for (int i = 1; i <= tournamentDays; i++) {
            String command = scanner.nextLine();
            double moneyRaised = 0;
            int winCount = 0;
            int loseCount = 0;

            while (!command.equals("Finish")) {
                String result = scanner.nextLine();

                if (result.equals("win")) {
                    moneyRaised += 20;
                    winCount++;
                    totalWinDays++;
                } else {
                    loseCount++;
                    totalLoseDays++;
                }

                command = scanner.nextLine();
            }

            if (winCount > loseCount) {
                moneyRaised += moneyRaised * 0.1;
            }

            totalMoneyRaised += moneyRaised;
        }

        if (totalWinDays > totalLoseDays) {
            totalMoneyRaised = totalMoneyRaised + totalMoneyRaised * 0.2;
            System.out.printf("You won the tournament! Total raised money: %.2f", totalMoneyRaised);
        } else {
            System.out.printf("You lost the tournament! Total raised money: %.2f", totalMoneyRaised);
        }
    }
}
