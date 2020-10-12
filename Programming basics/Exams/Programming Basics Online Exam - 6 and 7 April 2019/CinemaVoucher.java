import java.util.Scanner;

public class CinemaVoucher {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();

        int movieCounter = 0;
        int otherCounter = 0;

        while (!command.equals("End")) {
            int currentPrice = 0;

            if (command.length() > 8) {
                currentPrice += (command.charAt(0) + command.charAt(1));

                if (currentPrice > budget) {
                    break;
                }
                movieCounter++;
            } else {
                currentPrice += command.charAt(0);

                if (currentPrice > budget) {
                    break;
                }
                otherCounter++;
            }

            budget -= currentPrice;
            command = scanner.nextLine();
        }
        System.out.println(movieCounter);
        System.out.println(otherCounter);
    }
}
