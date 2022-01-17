package FunctionalProgramming;

import java.util.Scanner;
import java.util.function.Predicate;

public class FindEvensOrOdds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        String type = scanner.nextLine();
        int start = Integer.parseInt(input[0]);
        int end = Integer.parseInt(input[1]);
        Predicate<Integer> isEven = num -> num % 2 == 0;
        for (int i = start; i <= end; i++) {
            if ((type.equals("even") && isEven.test(i)) || (type.equals("odd") && !isEven.test(i))) {
                System.out.print(i + " ");
            }
        }
    }
}
