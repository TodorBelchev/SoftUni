package exceptions.square_root;

import java.util.Scanner;

public class SquareRoot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            int num = Integer.parseInt(scanner.nextLine());
            double sqrt = calcSqrt(num);
            System.out.printf("%.2f%n", sqrt);
        } catch (Exception ex) {
            System.out.println("Invalid");
        } finally {
            System.out.println("Goodbye");
        }

    }

    public static double calcSqrt(double value) {
        if (value < 0) {
            throw new ArithmeticException("Sqrt for negative numbers is undefined!");
        }

        return Math.sqrt(value);
    }

}

