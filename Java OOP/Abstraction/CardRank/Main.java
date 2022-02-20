package abstraction.card_rank;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Card Ranks:");
        Arrays.stream(CardRank.values())
                .forEach(x -> System.out.printf("Ordinal value: %d; Name value: %s%n", x.ordinal(), x.name()));
    }
}
