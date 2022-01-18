package Classes.Google;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        Map<String, Person> people = new LinkedHashMap<>();

        while (!input[0].equals("End")) {
            String name = input[0];
            String command = input[1];
            String subclassName = input[2];

            Person currentPerson = null;
            if (people.containsKey(name)) {
                currentPerson = people.get(name);
            } else {
                currentPerson = new Person(name);
                people.put(name, currentPerson);
            }

            if (command.equals("company")) {
                String department = input[3];
                double salary = Double.parseDouble(input[4]);
                Company curr = new Company(subclassName, department, salary);
                currentPerson.setCompany(curr);
            } else if (command.equals("pokemon")) {
                String pokemonType = input[3];
                Pokemon curr = new Pokemon(subclassName, pokemonType);
                currentPerson.addPokemon(curr);
            } else if (command.equals("parents")) {
                String birthDay = input[3];
                Parent curr = new Parent(subclassName, birthDay);
                currentPerson.addParent(curr);
            } else if (command.equals("children")) {
                String birthDay = input[3];
                Children curr = new Children(subclassName, birthDay);
                currentPerson.addChildren(curr);
            } else {
                int carSpeed = Integer.parseInt(input[3]);
                Car car = new Car(subclassName, carSpeed);
                currentPerson.setCar(car);
            }

            input = scanner.nextLine().split("\\s+");
        }

        String personName = scanner.nextLine();
        System.out.println(people.get(personName));
    }
}
