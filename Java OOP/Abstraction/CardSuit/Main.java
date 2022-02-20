package abstraction.card_suits;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        System.out.println("Card Suits:");
        Arrays.stream(CardSuit.values())
                .forEach(x -> System.out.printf("Ordinal value: %d; Name value: %s%n", x.ordinal(), x.name()));
    }
}
