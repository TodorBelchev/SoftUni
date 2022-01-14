package SetsAndMaps;

import java.util.Scanner;
import java.util.TreeMap;
import java.util.TreeSet;

public class LogsAggregator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        TreeMap<String, Integer> userDuration = new TreeMap<>();
        TreeMap<String, TreeSet<String>> userIps = new TreeMap<>();
        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            String ip = tokens[0];
            String user = tokens[1];
            int duration = Integer.parseInt(tokens[2]);
            userDuration.putIfAbsent(user, 0);
            userDuration.put(user, userDuration.get(user) + duration);
            userIps.putIfAbsent(user, new TreeSet<>());
            userIps.get(user).add(ip);
        }

        userDuration.forEach((k, v) -> {
            System.out.printf("%s: %d [%s]%n", k, v, String.join(", ", userIps.get(k)));
        });
    }
}
