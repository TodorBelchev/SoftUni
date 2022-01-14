package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SrybskoUnleashed {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Pattern pattern = Pattern.compile("(?<singer>\\w+(?: \\w+)*) @(?<venue>[\\w]+(?: \\w+)*) (?<price>[\\d]+) (?<count>[\\d]+)");
        LinkedHashMap<String, LinkedHashMap<String, Integer>> venues = new LinkedHashMap<>();

        String command = scanner.nextLine();

        while (!command.equals("End")) {
            Matcher matcher = pattern.matcher(command);

            while (matcher.find()) {
                String singer = matcher.group("singer");
                String venue = matcher.group("venue");
                int price = Integer.parseInt(matcher.group("price"));
                int count = Integer.parseInt(matcher.group("count"));

                venues.putIfAbsent(venue, new LinkedHashMap<>());
                venues.get(venue).putIfAbsent(singer, 0);
                venues.get(venue).put(singer, venues.get(venue).get(singer) + price * count);
            }

            command = scanner.nextLine();
        }

        venues.forEach((k, v) -> {
            System.out.println(k);
            v.entrySet().stream().sorted((s1, s2) -> s2.getValue().compareTo(s1.getValue()))
                    .forEach(s -> System.out.printf("#  %s -> %d%n", s.getKey(), s.getValue()));
        });
    }
}
