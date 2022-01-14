package SetsAndMaps;

import java.util.Scanner;
import java.util.TreeMap;

public class CountSymbols {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        TreeMap<Character, Integer> occurrences = new TreeMap<>();

        for (int i = 0; i < input.length(); i++) {
            char curr = input.charAt(i);
            occurrences.putIfAbsent(curr, 0);
            occurrences.put(curr, occurrences.get(curr) + 1);
        }

        occurrences.forEach((k, v) -> {
            System.out.printf("%c: %d time/s%n", k, v);
        });
    }
}
