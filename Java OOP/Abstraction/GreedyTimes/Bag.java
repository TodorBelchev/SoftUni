package abstraction.greedy_times;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Bag {
    private final Map<String, Cash> cashList;
    private final Map<String, Gem> gemList;
    private final Gold gold;
    private final long capacity;

    public Bag(long capacity) {
        this.capacity = capacity;
        this.cashList = new LinkedHashMap<>();
        this.gemList = new LinkedHashMap<>();
        this.gold = new Gold("Gold", 0);
    }

    public void addCash(String name, long amount) {
        this.cashList.putIfAbsent(name, new Cash(name, 0));
        Cash current = this.cashList.get(name);
        current.addCash(amount);
        this.cashList.put(name, current);
    }

    public void addGem(String name, long amount) {
        this.gemList.putIfAbsent(name, new Gem(name, 0));
        Gem current = this.gemList.get(name);
        current.addAmount(amount);
        this.gemList.put(name, current);
    }

    public void addGold(long amount) {
        this.gold.addGold(amount);
    }

    public long getTotalCash() {
        return this.cashList.values().stream()
                .mapToLong(Cash::getAmount)
                .sum();
    }

    public long getTotalGems() {
        return this.gemList.values().stream()
                .mapToLong(Gem::getAmount)
                .sum();
    }

    public long getTotalGold() {
        return this.gold.getAmount();
    }

    public long getCapacity() {
        return this.capacity;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        Map<String, Long> totalLoot = new HashMap<>();
        totalLoot.put("gold", this.getTotalGold());
        totalLoot.put("gems", this.getTotalGems());
        totalLoot.put("cash", this.getTotalCash());

        totalLoot.entrySet()
                .stream()
                .sorted((e1, e2) -> e2.getValue().compareTo(e1.getValue()))
                .forEach(x -> {
                    if (x.getKey().equals("gold")) {
                        sb.append(String.format("<Gold> $%d%n", this.gold.getAmount()));
                        sb.append(String.format("##Gold - %d%n", this.gold.getAmount()));
                    } else if (x.getKey().equals("gems")) {
                        sb.append(String.format("<Gem> $%d%n", getTotalGems()));
                        List<Gem> sorted = this.gemList.values()
                                .stream()
                                .sorted((g1, g2) -> {
                                    int result = g2.getName().compareTo(g1.getName());
                                    if (result == 0) {
                                        result = Long.compare(g1.getAmount(), g2.getAmount());
                                    }
                                    return result;
                                })
                                .collect(Collectors.toList());
                        for (Gem gem : sorted) {
                            sb.append(gem).append(System.lineSeparator());
                        }
                    } else {
                        List<Cash> sorted = this.cashList.values()
                                .stream()
                                .sorted((c1, c2) -> {
                                    int result = c2.getName().compareTo(c1.getName());
                                    if (result == 0) {
                                        result = Long.compare(c1.getAmount(), c2.getAmount());
                                    }
                                    return result;
                                })
                                .collect(Collectors.toList());
                        sb.append(String.format("<Cash> $%d%n", getTotalCash()));
                        for (Cash cash : sorted) {
                            sb.append(cash).append(System.lineSeparator());
                        }
                    }
                });
        return sb.toString().trim();
    }
}
