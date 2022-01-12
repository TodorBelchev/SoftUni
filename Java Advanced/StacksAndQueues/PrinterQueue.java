package StackAndQueues;

import java.util.ArrayDeque;
import java.util.Scanner;

public class PrinterQueue {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        ArrayDeque<String> queue = new ArrayDeque<>();
        String input = scanner.nextLine();

        while (!input.equals("print")) {
            if (input.equals("cancel")) {
                if (queue.size() > 0) {
                    System.out.println("Canceled " + queue.pollFirst());
                } else {
                    System.out.println("Printer is on standby");
                }
            } else {
                queue.offer(input);
            }
            input = scanner.nextLine();
        }
        for (String file : queue) {
            System.out.println(file);
        }
    }
}
