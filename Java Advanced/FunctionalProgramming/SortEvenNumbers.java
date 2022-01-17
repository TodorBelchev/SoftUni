package FunctionalProgramming;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class SortEvenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(", "))
                .map(Integer::parseInt)
                .filter(x -> x % 2 == 0)
                .collect(Collectors.toList());

        System.out.println(numbers.stream().map(String::valueOf).collect(Collectors.joining(", ")));
        System.out.println(numbers.stream()
                .sorted()
                .map(String::valueOf)
                .collect(Collectors.joining(", ")));

    }
}
