package SetsAndMaps;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class LargestThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> sorted = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .sorted((a, b) -> b.compareTo(a))
                .collect(Collectors.toList());

        for (int i = 0; i < 3; i++) {
            if (i > sorted.size() - 1) {
                break;
            }
            System.out.print(sorted.get(i) + " ");
        }
    }
}
