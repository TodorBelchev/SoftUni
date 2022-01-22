package Generics.CustomListSorter;


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        CustomList<String> list = new CustomList();

        String[] input = scanner.nextLine().split("\\s+");
        while (!input[0].equals("END")) {
            String command = input[0];
            switch (command) {
                case "Add":
                    list.add(input[1]);
                    break;
                case "Remove":
                    list.remove(Integer.parseInt(input[1]));
                    break;
                case "Contains":
                    System.out.println(list.contains(input[1]));
                    break;
                case "Swap":
                    int firstIndex = Integer.parseInt(input[1]);
                    int secondIndex = Integer.parseInt(input[2]);
                    list.swap(firstIndex, secondIndex);
                    break;
                case "Greater":
                    System.out.println(list.countGreaterThan(input[1]));
                    break;
                case "Max":
                    System.out.println(list.getMax());
                    break;
                case "Min":
                    System.out.println(list.getMin());
                    break;
                case "Print":
                    System.out.println(list);
                    break;
                case "Sort":
                    Sorter.sort(list);
                    break;
            }

            input = scanner.nextLine().split("\\s+");
        }

    }
}
