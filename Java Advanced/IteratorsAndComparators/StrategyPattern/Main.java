package IteratorsAndComparators.StrategyPattern;

import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Set<Person> people1 = new TreeSet<>(new LengthNameComparator());
        Set<Person> people2 = new TreeSet<>(new AgeComparator());

        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            Person curr = new Person(input[0], Integer.parseInt(input[1]));
            people1.add(curr);
            people2.add(curr);
        }
        for (Person person : people1) {
            System.out.println(person);
        }
        for (Person person : people2) {
            System.out.println(person);
        }
    }
}
