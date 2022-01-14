package SetsAndMaps;

import java.util.Comparator;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class LegendaryFarming {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TreeMap<String, Integer> legendaryLoot = new TreeMap<>();
        TreeMap<String, Integer> trashLoot = new TreeMap<>();
        legendaryLoot.put("shards", 0);
        legendaryLoot.put("fragments", 0);
        legendaryLoot.put("motes", 0);

        while (legendaryLoot.get("shards") < 250 &&
                legendaryLoot.get("fragments") < 250 &&
                legendaryLoot.get("motes") < 250) {
            String[] input = scanner.nextLine().split("\\s+");
            for (int i = 0; i < input.length; i += 2) {
                int quantity = Integer.parseInt(input[i]);
                String loot = input[i + 1].toLowerCase();
                if (isLegendary(loot)) {
                    legendaryLoot.putIfAbsent(loot, 0);
                    legendaryLoot.put(loot, legendaryLoot.get(loot) + quantity);
                } else {
                    trashLoot.putIfAbsent(loot, 0);
                    trashLoot.put(loot, trashLoot.get(loot) + quantity);
                }
                if (legendaryLoot.get("shards") >= 250 || legendaryLoot.get("fragments") >= 250 || legendaryLoot.get("motes") >= 250) {
                    break;
                }
            }
        }
        if (legendaryLoot.get("shards") >= 250) {
            System.out.println("Shadowmourne obtained!");
            legendaryLoot.put("shards", legendaryLoot.get("shards") - 250);
        } else if (legendaryLoot.get("fragments") >= 250) {
            System.out.println("Valanyr obtained!");
            legendaryLoot.put("fragments", legendaryLoot.get("fragments") - 250);
        } else if (legendaryLoot.get("motes") >= 250) {
            System.out.println("Dragonwrath obtained!");
            legendaryLoot.put("motes", legendaryLoot.get("motes") - 250);
        }
        legendaryLoot.entrySet().stream()
                .sorted((l1, l2) -> l2.getValue().compareTo(l1.getValue()))
                .forEach(l -> System.out.println(l.getKey() + ": " + l.getValue()));
        trashLoot.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .forEach(l -> System.out.println(l.getKey() + ": " + l.getValue()));
    }

    public static boolean isLegendary(String loot) {
        return loot.equals("shards") || loot.equals("fragments") || loot.equals("motes");
    }
}
