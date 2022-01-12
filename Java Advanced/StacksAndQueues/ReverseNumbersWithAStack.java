package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class ReverseNumbersWithAStack {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayDeque<String> stack = new ArrayDeque<>();
        String[] input = scanner.nextLine().split("\\s+");
        for (String string : input) {
            stack.push(string);
            System.out.println();
        }

        for (String string: stack) {
            System.out.print(string + " ");
        }
    }
}
