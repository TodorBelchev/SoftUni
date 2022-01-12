package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class DecimalToBinary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<Integer> stack = new ArrayDeque<>();
        int input = Integer.parseInt(scanner.nextLine());

        if (input == 0) {
            System.out.println("0");
            return;
        }

        while (input != 0) {
            stack.push(input % 2);
            input /= 2;
        }

        for (Integer integer : stack) {
            System.out.print(integer);
        }
    }
}
