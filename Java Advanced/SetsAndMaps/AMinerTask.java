package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = "";
        LinkedHashMap<String, Integer> loot = new LinkedHashMap<>();

        while (true) {
            command = scanner.nextLine();
            if (command.equals("stop")) {
                break;
            }
            int quantity = Integer.parseInt(scanner.nextLine());
            loot.putIfAbsent(command, 0);
            loot.put(command, loot.get(command) + quantity);
        }

        loot.forEach((k, v) -> {
            System.out.println(k + " -> " + v);
        });
    }
}
