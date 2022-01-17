package FunctionalProgramming;

import java.util.Scanner;
import java.util.function.Function;

public class SumNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(", ");
        Function<String[], Integer> getSum = stringArr -> {
            int sum = 0;
            for (String numString : stringArr) {
                sum += Integer.parseInt(numString);
            }
            return sum;
        };

        System.out.println("Count = " + input.length);
        System.out.println("Sum = " + getSum.apply(input));
    }
}
