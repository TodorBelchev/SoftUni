package IteratorsAndComparators.LinkedListTraversal;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        LinkedList linkedList = new LinkedList();

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");

            if (input[0].equals("Add")) {
                linkedList.addLast(Integer.parseInt(input[1]));
            } else if (input[0].equals("Remove")) {
                linkedList.remove(Integer.parseInt(input[1]));
            }
        }

        System.out.println(linkedList.getSize());
        linkedList.forEach(x -> System.out.printf("%s ", x));
    }
}
