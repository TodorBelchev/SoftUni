package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class BalancedParentheses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<String> stack = new ArrayDeque<>();
        String[] input = scanner.nextLine().split("");
        boolean isBalanced = false;

        for (int i = 0; i < input.length; i++) {
            String currentBracket = input[i];
            if (currentBracket.equals("[") || currentBracket.equals("{") || currentBracket.equals("(")) {
                stack.push(currentBracket);
            } else if (stack.size() > 0 && ((currentBracket.equals("]") && stack.pop().equals("[")) ||
                    (currentBracket.equals(")") && stack.pop().equals("(")) ||
                    (currentBracket.equals("}") && stack.pop().equals("{")))) {
                isBalanced = true;
            } else {
                System.out.println("NO");
                return;
            }
        }

        if (isBalanced) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }
    }
}
