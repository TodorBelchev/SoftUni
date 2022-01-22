package Generics.GenericSwapMethodInteger;


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Box<Integer> box = new Box<>();

        for (int i = 0; i < n; i++) {
            box.add(Integer.parseInt(scanner.nextLine()));
        }
        String[] command = scanner.nextLine().split("\\s+");
        int firstIndex = Integer.parseInt(command[0]);
        int secondIndex = Integer.parseInt(command[1]);
        box.swap(firstIndex, secondIndex);
        System.out.println(box);
    }
}
