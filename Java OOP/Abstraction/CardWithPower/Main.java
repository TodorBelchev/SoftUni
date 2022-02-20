package abstraction.cards_with_power;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String rank = scanner.nextLine();
        String suit = scanner.nextLine();
        CardRank cr = CardRank.valueOf(rank);
        CardSuit cs = CardSuit.valueOf(suit);
        int cardPower = cr.getRank() + cs.getSuit();
        System.out.printf("Card name: %s of %s; Card power: %d", rank, suit, cardPower);
    }
}
