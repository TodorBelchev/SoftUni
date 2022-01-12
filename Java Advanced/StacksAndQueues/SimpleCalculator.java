package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<Integer> stack = new ArrayDeque<>();

        String[] input = scanner.nextLine().split(" ");
        stack.push(Integer.parseInt(input[0]));
        for (int i = 1; i < input.length; i += 2) {
            String action = input[i];
            int current = Integer.parseInt(input[i + 1]);
            int result = stack.pop();
            if (action.equals("+")) {
                result += current;
            } else {
                result -= current;
            }
            stack.push(result);
        }
        System.out.println(stack.pop());
    }
}
