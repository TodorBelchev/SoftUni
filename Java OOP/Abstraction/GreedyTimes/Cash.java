package abstraction.greedy_times;

public class Cash {
    private String name;
    private long amount;

    public Cash(String name, long amount) {
        this.name = name;
        this.amount = amount;
    }

    public String getName() {
        return name;
    }

    public long getAmount() {
        return amount;
    }

    public void addCash(long amount) {
        this.amount += amount;
    }

    @Override
    public String toString() {
        return String.format("##%s - %d", this.name, this.amount);
    }
}
