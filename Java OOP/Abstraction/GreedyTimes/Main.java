package abstraction.greedy_times;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long capacity = Long.parseLong(scanner.nextLine());
        String[] items = scanner.nextLine().split("\\s+");

        Bag bag = new Bag(capacity);

        for (int i = 0; i < items.length; i += 2) {
            String item = items[i];
            Long value = Long.parseLong(items[i + 1]);

            if (bag.getTotalCash() + bag.getTotalGold() + bag.getTotalGems() + value > bag.getCapacity()) {
                continue;
            }

            if (item.equals("Gold")) {
                bag.addGold(value);
            } else if ((item.toLowerCase().endsWith("gem") && item.length() > 3) &&
                    (bag.getTotalGold() >= bag.getTotalGems() + value)) {
                bag.addGem(item, value);
            } else if (item.length() == 3 &&
                    (bag.getTotalGems() >= bag.getTotalCash() + value)) {
                bag.addCash(item, value);
            }
        }

        System.out.println(bag);
    }
}
