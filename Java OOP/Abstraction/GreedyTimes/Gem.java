package abstraction.greedy_times;

public class Gem {
    private String name;
    private long amount;

    public Gem(String name, long amount) {
        this.name = name;
        this.amount = amount;
    }

    public long getAmount() {
        return this.amount;
    }

    public String getName() {
        return name;
    }

    public void addAmount(long amount) {
        this.amount += amount;
    }

    @Override
    public String toString() {
        return String.format("##%s - %d", this.name, this.amount);
    }
}
