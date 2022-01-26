package IteratorsAndComparators.EqualityLogic;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        TreeSet<Person> people1 = new TreeSet<>();
        HashSet<Person> people2 = new HashSet<>();

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            Person curr = new Person(input[0], Integer.parseInt(input[1]));
            people1.add(curr);
            people2.add(curr);
        }
        System.out.println(people1.size());
        System.out.println(people2.size());
    }
}
