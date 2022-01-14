package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class DragonArmy {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        Map<String, TreeMap<String, int[]>> dragons = new LinkedHashMap<>();
        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split(" ");
            String type = input[0];
            String name = input[1];
            int damage = 45;
            int health = 250;
            int armor = 10;
            if (!"null".equals(input[2])) {
                damage = Integer.parseInt(input[2]);
            }
            if (!"null".equals(input[3])) {
                health = Integer.parseInt(input[3]);
            }
            if (!"null".equals(input[4])) {
                armor = Integer.parseInt(input[4]);
            }
            dragons.putIfAbsent(type, new TreeMap<>());
            dragons.get(type).putIfAbsent(name, new int[3]);
            dragons.get(type).get(name)[0] = damage;
            dragons.get(type).get(name)[1] = health;
            dragons.get(type).get(name)[2] = armor;
        }
        for (Map.Entry<String, TreeMap<String, int[]>> typeInfo : dragons.entrySet()) {
            double[] average = calculateAverage(typeInfo.getValue());
            System.out.printf("%s::(%.2f/%.2f/%.2f)%n", typeInfo.getKey(), average[0], average[1], average[2]);
            for (Map.Entry<String, int[]> dragonInfo : typeInfo.getValue().entrySet()) {
                System.out.printf("-%s -> damage: %d, health: %d, armor: %d%n",
                        dragonInfo.getKey(),
                        dragonInfo.getValue()[0],
                        dragonInfo.getValue()[1],
                        dragonInfo.getValue()[2]);
            }
        }
    }

    private static double[] calculateAverage(TreeMap<String, int[]> map) {
        double totalEntries = map.size();
        int totalDamage = 0;
        int totalHealth = 0;
        int totalArmor = 0;

        for (Map.Entry<String, int[]> entry : map.entrySet()) {
            totalDamage += entry.getValue()[0];
            totalHealth += entry.getValue()[1];
            totalArmor += entry.getValue()[2];
        }

        return new double[]{
                totalDamage / totalEntries,
                totalHealth / totalEntries,
                totalArmor / totalEntries
        };
    }
}
