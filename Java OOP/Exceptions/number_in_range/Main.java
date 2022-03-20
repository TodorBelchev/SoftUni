package exceptions.number_in_range;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] range = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        System.out.printf("Range: [%d...%d]%n", range[0], range[1]);

        while (true) {
            String input = scanner.nextLine();
            try {
                int num = Integer.parseInt(input);
                if (num >= range[0] && num <= range[1]) {
                    System.out.println("Valid number: " + num);
                    break;
                } else {
                    throw new Exception("Invalid number");
                }
            } catch (Exception e) {
                System.out.println("Invalid number: " + input);
            }
        }
    }
}
