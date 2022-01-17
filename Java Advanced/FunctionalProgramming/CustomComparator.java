package FunctionalProgramming;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class CustomComparator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        Comparator<Integer> customSort = (a, b) -> {
            if (a % 2 != 0 && b % 2 == 0) {
                return 1;
            } else if (a % 2 == 0 && b % 2 != 0) {
                return -1;
            } else {
                if (a < b) {
                    return -1;
                } else {
                    return 1;
                }
            }
        };

        numbers.sort(customSort);
        numbers.forEach(x -> System.out.print(x + " "));
    }
}
