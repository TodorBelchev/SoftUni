package SetsAndMaps;

import java.util.*;

public class HandsOfCards {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        LinkedHashMap<String, HashSet<String>> players = new LinkedHashMap<>();

        while (!input.equals("JOKER")) {
            String[] tokens = input.split(": ");
            String name = tokens[0];
            String[] cards = tokens[1].split(", ");
            players.putIfAbsent(name, new HashSet<>());
            players.get(name).addAll(Arrays.asList(cards));

            input = scanner.nextLine();
        }

        players.forEach((k, v) -> {
            System.out.println(k + ": " +getScore(v));
        });
    }

    public static int getScore(HashSet<String> deck) {
        int result = 0;
        for (String x : deck) {
            String[] card = x.split("");
            int power = 0;
            int typePower = 0;
            if (x.startsWith("10")) {
                power = getPower(card[0] + card[1]);
                typePower = getTypePower(card[2]);
            } else {
                power = getPower(card[0]);
                typePower = getTypePower(card[1]);
            }
            result += power * typePower;
        }

        return result;
    }

    public static int getPower(String cardPower) {
        if (cardPower.equals("J")) {
            return 11;
        } else if (cardPower.equals("Q")) {
            return 12;
        } else if (cardPower.equals("K")) {
            return 13;
        } else if (cardPower.equals("A")) {
            return 14;
        } else {
            return Integer.parseInt(cardPower);
        }
    }

    public static int getTypePower(String cardType) {
        if (cardType.equals("S")) {
            return 4;
        } else if (cardType.equals("H")) {
            return 3;
        } else if (cardType.equals("D")) {
            return 2;
        } else {
            return 1;
        }
    }
}
