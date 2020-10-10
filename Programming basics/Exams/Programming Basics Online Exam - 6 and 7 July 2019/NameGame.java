import java.util.Scanner;

public class NameGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String name = "";
        int bestScore = 0;

        while (!input.equals("Stop")) {
            int score = 0;
            for (int i = 0; i < input.length(); i++) {
                int current = Integer.parseInt(scanner.nextLine());
                int charNumber = (int) input.charAt(i);
                if (charNumber == current) {
                    score += 10;
                } else {
                    score += 2;
                }
                if (score >= bestScore) {
                    bestScore = score;
                    name = input;
                }
            }
            input = scanner.nextLine();
        }
        System.out.printf("The winner is %s with %d points!", name, bestScore);
    }
}
