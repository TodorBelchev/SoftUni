package interfaces_and_abstraction.collection_hierarchy;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        AddCollection addCollection = new AddCollection();
        AddRemoveCollection addRemoveCollection = new AddRemoveCollection();
        MyListImpl myList = new MyListImpl();
        String[] input = scanner.nextLine().split("\\s+");
        int count = Integer.parseInt(scanner.nextLine());

        printAdd(input, addCollection);
        printAdd(input, addRemoveCollection);
        printAdd(input, myList);

        printRemove(count, addRemoveCollection);
        printRemove(count, myList);
    }

    private static void printRemove(int count, AddRemovable collection) {
        for (int i = 0; i < count; i++) {
            System.out.println(collection.remove() + " ");
        }
        System.out.println();
    }

    private static void printAdd(String[] input, Addable addCollection) {
        for (String curr : input) {
            System.out.println(addCollection.add(curr) + " ");
        }
        System.out.println();
    }
}
