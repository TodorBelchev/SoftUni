package abstraction.greedy_times;

public class Gold {
    private String name;
    private long amount;

    public Gold(String name, long amount) {
        this.name = name;
        this.amount = amount;
    }

    public long getAmount() {
        return this.amount;
    }

    public void addGold(long amount) {
        this.amount += amount;
    }

    @Override
    public String toString() {
        return String.format("##%s - %d", this.name, this.amount);
    }
}
