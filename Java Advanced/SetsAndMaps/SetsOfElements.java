package SetsAndMaps;

import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Scanner;

public class SetsOfElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] input = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        LinkedHashSet<Integer> firstSet = new LinkedHashSet<>();
        HashSet<Integer> secondSet = new HashSet<>();

        for (int i = 0; i < input[0]; i++) {
            int curr = Integer.parseInt(scanner.nextLine());
            firstSet.add(curr);
        }

        for (int i = 0; i < input[1]; i++) {
            int curr = Integer.parseInt(scanner.nextLine());
            secondSet.add(curr);
        }

        firstSet.retainAll(secondSet);
        for (int curr : firstSet) {
            System.out.print(curr + " ");
        }
    }
}
