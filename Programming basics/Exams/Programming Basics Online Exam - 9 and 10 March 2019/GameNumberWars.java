import java.util.Scanner;

public class GameNumberWars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String nameOne = scanner.nextLine();
        String nameTwo = scanner.nextLine();
        int playerOnePoints = 0;
        int playerTwoPoints = 0;

        while (true) {
            String input = scanner.nextLine();

            if ("End of game".equals(input)) {
                break;
            }

            int playerOneCard = Integer.parseInt(input);
            int playerTwoCard = Integer.parseInt(scanner.nextLine());
            if (playerOneCard > playerTwoCard) {

                playerOnePoints += playerOneCard - playerTwoCard;
            } else if (playerTwoCard > playerOneCard) {
                playerTwoPoints += playerTwoCard - playerOneCard;
            } else {
                System.out.println("Number wars!");
                int finalCardOne = Integer.parseInt(scanner.nextLine());
                int finalCardTwo = Integer.parseInt(scanner.nextLine());

                if (finalCardOne > finalCardTwo) {
                    System.out.printf("%s is winner with %d points", nameOne, playerOnePoints);
                } else {
                    System.out.printf("%s is winner with %d points", nameTwo, playerTwoPoints);
                }

                return;
            }
        }

        System.out.printf("%s has %d points%n", nameOne, playerOnePoints);
        System.out.printf("%s has %d points%n", nameTwo, playerTwoPoints);
    }
}
