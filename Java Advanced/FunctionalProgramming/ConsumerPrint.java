package FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.Consumer;

public class ConsumerPrint {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        Consumer<String[]> print = strings -> Arrays.stream(strings).forEach(System.out::println);
        print.accept(input);
    }
}
