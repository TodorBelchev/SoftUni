package interfaces_and_abstraction.border_control;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        List<Identifiable> identifiableList = new ArrayList<>();

        while (!input.equals("End")) {
            String[] tokens = input.split("\\s+");
            Identifiable current = null;

            if (tokens.length == 3) {
                current = new Citizen(tokens[0],Integer.parseInt(tokens[1]), tokens[2]);
            } else {
                current = new Robot(tokens[0], tokens[1]);
            }
            identifiableList.add(current);

            input = scanner.nextLine();
        }

        String endingId = scanner.nextLine();
        for (Identifiable curr: identifiableList) {
            if (curr.getId().endsWith(endingId)) {
                System.out.println(curr.getId());
            }
        }
    }
}
