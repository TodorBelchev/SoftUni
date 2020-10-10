import java.util.Scanner;

public class PCGameShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int gamesSold = Integer.parseInt(scanner.nextLine());

        int heartStoneCounter = 0;
        int fortniteCounter = 0;
        int overWatchCounter = 0;
        int otherCounter = 0;

        for (int i = 0; i < gamesSold; i++) {
            String input = scanner.nextLine();
            if (input.equals("Hearthstone")) {
                heartStoneCounter++;
            } else if (input.equals("Fornite")) {
                fortniteCounter++;
            } else if (input.equals("Overwatch")) {
                overWatchCounter++;
            } else {
                otherCounter++;
            }
        }
        System.out.printf("Hearthstone - %.2f%%%n", (heartStoneCounter * 1.0 / gamesSold) * 100);
        System.out.printf("Fornite - %.2f%%%n", (fortniteCounter * 1.0 / gamesSold) * 100);
        System.out.printf("Overwatch - %.2f%%%n", (overWatchCounter * 1.0 / gamesSold) * 100);
        System.out.printf("Others - %.2f%%", (otherCounter * 1.0 / gamesSold) * 100);
    }
}
