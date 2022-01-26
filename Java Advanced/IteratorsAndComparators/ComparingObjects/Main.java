package IteratorsAndComparators.ComparingObjects;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        List<Person> people = new ArrayList<>();

        while (!input[0].equals("END")) {
            Person curr = new Person(input[0], Integer.parseInt(input[1]), input[2]);
            people.add(curr);

            input = scanner.nextLine().split("\\s+");
        }

        int index = Integer.parseInt(scanner.nextLine()) - 1;

        Person searchedPerson = people.get(index);
        int match = 0;

        for (Person person : people) {
            if (searchedPerson.compareTo(person) == 0) {
                match++;
            }
        }

        if (match == 1) {
            System.out.println("No matches");
        } else {
            System.out.printf("%d %d %d", match, people.size() - match, people.size());
        }
    }
}
