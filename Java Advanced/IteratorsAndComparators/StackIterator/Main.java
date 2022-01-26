package IteratorsAndComparators.StackIterator;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        CustomStack customStack = new CustomStack();
        List<Integer> result = new ArrayList<>();

        while (!input[0].equals("END")) {
            String command = input[0];
            if (command.equals("Push")) {
                for (int i = 1; i < input.length; i++) {
                    String curr = input[i].replaceAll(",", "");
                    customStack.push(Integer.parseInt(curr));
                }
            } else if (command.equals("Pop")) {
                if (customStack.iterator().hasNext()) {
                    customStack.pop();
                } else {
                    System.out.println("No elements");
                }
            }

            input = scanner.nextLine().split("\\s+");
        }

        while (customStack.iterator().hasNext()) {
            result.add(customStack.pop());
        }
        if (result.size() > 0) {
            result.forEach(System.out::println);
            result.forEach(System.out::println);
        }
    }
}
