package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class SimpleTextEditor {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        StringBuilder result = new StringBuilder();
        ArrayDeque<String> commandsStack = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            String[] command = scanner.nextLine().split("\\s+");
            if (command[0].equals("1")) {
                result.append((command[1]));
                commandsStack.push(result.toString());
            } else if (command[0].equals("2")) {
                result.delete(result.length() - Integer.parseInt(command[1]), result.length());
                commandsStack.push(result.toString());
            } else if (command[0].equals("3")) {
                System.out.println(result.charAt(Integer.parseInt(command[1]) - 1));
            } else if (command[0].equals("4")) {
                if (commandsStack.size() > 1) {
                    commandsStack.pop();
                    result = new StringBuilder(commandsStack.peek());
                } else {
                    result = new StringBuilder();
                }
            }
        }
    }
}
