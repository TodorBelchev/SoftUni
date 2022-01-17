package FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.BiFunction;
import java.util.stream.Collectors;

public class AppliedArithmetics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numbers = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        String command = scanner.nextLine();

        BiFunction<int[], String, int[]> applyArithmetic = (numArr, currentCommand) -> {
            if (currentCommand.equals("add")) {
                numArr = Arrays.stream(numArr).map(x -> x + 1).toArray();
            } else if (currentCommand.equals("subtract")) {
                numArr = Arrays.stream(numArr).map(x -> x - 1).toArray();
            } else if (currentCommand.equals("multiply")) {
                numArr = Arrays.stream(numArr).map(x -> x * 2).toArray();
            } else if (currentCommand.equals("print")) {
                System.out.println(Arrays.stream(numArr).mapToObj(String::valueOf).collect(Collectors.joining(" ")));
            }
            return numArr;
        };

        while (!command.equals("end")) {
            numbers = applyArithmetic.apply(numbers, command);

            command = scanner.nextLine();
        }
    }
}
