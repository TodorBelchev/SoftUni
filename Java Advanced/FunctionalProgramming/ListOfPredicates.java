package FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Predicate;

public class ListOfPredicates {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int[] divisible = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        Predicate<Integer> isDivisible = num -> {
            boolean result = true;
            for (int x : divisible) {
                if (num % x != 0) {
                    result = false;
                }
            }
            return result;
        };

        for (int i = 1; i <= n; i++) {
            if (isDivisible.test(i)) {
                System.out.print(i + " ");
            }
        }
    }
}
