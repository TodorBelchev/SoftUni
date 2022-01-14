package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.TreeMap;
import java.util.stream.Collectors;

public class UserLogs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        TreeMap<String, LinkedHashMap<String, Integer>> log = new TreeMap<>();

        while (!input.equals("end")) {
            String[] tokens = input.split("\\s+");
            String[] ip = tokens[0].split("=");
            String[] user = tokens[2].split("=");

            log.putIfAbsent(user[1], new LinkedHashMap<>());
            LinkedHashMap<String, Integer> ipMap = log.get(user[1]);
            ipMap.putIfAbsent(ip[1], 0);
            ipMap.put(ip[1], ipMap.get(ip[1]) + 1);

            input = scanner.nextLine();
        }

        log.forEach((k, v) -> {
            System.out.println(k + ":");
            String ips = v.entrySet()
                    .stream()
                    .map(x -> x.getKey() + " => " + x.getValue())
                    .collect(Collectors.joining(", "));
            System.out.println(ips + ".");
        });
    }
}
