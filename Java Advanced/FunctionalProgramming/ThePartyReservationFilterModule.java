package FunctionalProgramming;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ThePartyReservationFilterModule {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> guests = Arrays.stream(scanner.nextLine().split("\\s+"))
                .collect(Collectors.toList());
        List<String> commands = new ArrayList<>();

        String input = scanner.nextLine();

        while (!input.equals("Print")) {
            String[] tokens = input.split(";");

            if (tokens[0].equals("Add filter")) {
                commands.add(input);
            } else if (tokens[0].equals("Remove filter")) {
                commands.removeIf(x -> x.equals("Add filter;" + tokens[1] + ";" + tokens[2]));
            }

            input = scanner.nextLine();
        }

        for (String c : commands) {
            String[] tokens = c.split(";");
            String type = tokens[1];
            String param = tokens[2];

            Predicate<String> startsWith = x -> x.startsWith(param);
            Predicate<String> endsWith = x -> x.endsWith(param);
            Predicate<String> validLength = x -> x.length() == Integer.parseInt(param);
            Predicate<String> containsLetter = x -> x.contains(param);

            if (type.equals("Starts with")) {
                guests.removeIf(startsWith);
            } else if (type.equals("Ends with")) {
                guests.removeIf(endsWith);
            } else if (type.equals("Length")) {
                guests.removeIf(validLength);
            } else if (type.equals("Contains")) {
                guests.removeIf(containsLetter);
            }
        }

        System.out.println(String.join(" ", guests));

    }
}
