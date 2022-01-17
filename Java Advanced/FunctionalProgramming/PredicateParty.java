package FunctionalProgramming;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class PredicateParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> guests = Arrays.stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());
        String input = scanner.nextLine();

        while (!input.equals("Party!")) {
            String[] tokens = input.split("\\s+");
            String command = tokens[0];
            String type = tokens[1];
            String param = tokens[2];

            if (command.equals("Remove")) {
                guests.removeIf(predicates(type, param));
            } else if (command.equals("Double")) {
                for (int i = 0; i < guests.size(); i++) {
                    if (predicates(type, param).test(guests.get(i))) {
                        guests.add(i, guests.get(i));
                    }
                    i++;
                }
            }

            input = scanner.nextLine();
        }

        if (guests.size() == 0) {
            System.out.println("Nobody is going to the party!");
        } else {
            Collections.sort(guests);
            System.out.printf("%s are going to the party!%n", String.join(", ", guests));
        }
    }

    public static Predicate<String> predicates(String type, String param) {
        if (type.equals("StartsWith")) {
            return str -> str.startsWith(param);
        } else if (type.equals("EndsWith")) {
            return str -> str.endsWith(param);
        } else if (type.equals("Length")) {
            return str -> str.length() == Integer.parseInt(param);
        } else {
            return str -> false;
        }
    }
}
