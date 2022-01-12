package StackAndQueues;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RecursiveFibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        Map<Integer, Long> memo = new HashMap<>();
        long result = getFibonacci(n, memo);
        System.out.println(result);
    }

    public static long getFibonacci(int input, Map<Integer, Long> memo) {
        long result;
        if (input == 0 || input == 1) {
            return 1;
        } else {
            if (memo.containsKey(input)) {
                return memo.get(input);
            } else  {
                result = getFibonacci(input - 1, memo) + getFibonacci(input - 2, memo);
                memo.put(input, result);
            }
            return result;
        }
    }

}
