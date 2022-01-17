package FunctionalProgramming;

import java.util.Arrays;
import java.util.Scanner;
import java.util.function.UnaryOperator;

public class AddVAT {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double[] numbers = Arrays.stream(scanner.nextLine().split(", "))
                .mapToDouble(Double::parseDouble)
                .toArray();

        UnaryOperator<Double> addVAT = v -> v * 1.2;
        System.out.println("Prices with VAT:");
        for (double num : numbers) {
            System.out.printf("%.2f%n", addVAT.apply(num));
        }
    }
}
