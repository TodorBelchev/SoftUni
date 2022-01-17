package FunctionalProgramming;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class CountUppercaseWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        Predicate<String> startUppercase = str -> Character.isUpperCase(str.charAt(0));
        List<String> upperCaseWords = Arrays.stream(input)
                .filter(startUppercase)
                .collect(Collectors.toList());
        System.out.println(upperCaseWords.size());
        upperCaseWords.forEach(System.out::println);
    }
}
