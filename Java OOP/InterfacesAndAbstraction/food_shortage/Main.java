package interfaces_and_abstraction.food_shortage;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, Buyer> people = new LinkedHashMap<>();

        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");

            if (tokens.length == 4) {
                Citizen citizen = new Citizen(tokens[0], Integer.parseInt(tokens[1]), tokens[2], tokens[3]);
                people.put(tokens[0], citizen);
            } else {
                Rebel rebel = new Rebel(tokens[0], Integer.parseInt(tokens[1]), tokens[2]);
                people.put(tokens[0], rebel);
            }
        }

        String command = scanner.nextLine();

        while (!command.equals("End")) {
            if (people.containsKey(command)) {
                people.get(command).buyFood();
            }

            command = scanner.nextLine();
        }

        int sum = 0;

        for (Buyer curr : people.values()) {
            sum += curr.getFood();
        }

        System.out.println(sum);
    }
}
