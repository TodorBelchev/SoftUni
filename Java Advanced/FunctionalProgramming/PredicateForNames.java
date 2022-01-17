package FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Predicate;

public class PredicateForNames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = Integer.parseInt(scanner.nextLine());
        String[] names = scanner.nextLine().split("\\s+");

        Predicate<String> lengthGreater = str -> str.length() <= length;
        Arrays.stream(names)
                .filter(lengthGreater)
                .forEach(System.out::println);
    }
}
