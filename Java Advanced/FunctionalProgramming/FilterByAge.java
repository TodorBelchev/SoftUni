package FunctionalProgramming;

import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;

public class FilterByAge {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        List<Person> people = new LinkedList<>();


        for (int i = 0; i < n; i++) {
            String[] personData = scanner.nextLine().split(", ");
            Person person = new Person(personData[0], Integer.parseInt(personData[1]));
            people.add(person);
        }

        String typeCriteria = scanner.nextLine();
        int ageCriteria = Integer.parseInt(scanner.nextLine());
        String[] printParams = scanner.nextLine().split("\\s+");

        Predicate<Person> matchCriteria = person -> typeCriteria.equals("older")
                ? person.getAge() >= ageCriteria
                : person.getAge() <= ageCriteria;

        people
                .stream()
                .filter(matchCriteria)
                .forEach(p -> {
                    if (printParams.length == 2) {
                        System.out.println(p.getName() + " - " + p.getAge());
                    } else {
                        if (printParams[0].equals("name")) {
                            System.out.println(p.getName());
                        } else {
                            System.out.println(p.getAge());
                        }
                    }
                });
    }
}

class Person {
    private int age;
    private String name;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
