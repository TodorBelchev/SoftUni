package christmas;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Bag {
    private String color;
    private int capacity;
    private List<Present> data;

    public Bag(String color, int capacity) {
        this.color = color;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public String getColor() {
        return color;
    }

    public int getCapacity() {
        return capacity;
    }

    public int count() {
        return this.data.size();
    }

    public void add(Present present) {
        if (this.capacity > this.data.size()) {
            this.data.add(present);
        }
    }

    public boolean remove(String name) {
        int index = -1;
        for (int i = 0; i < this.data.size(); i++) {
            Present curr = this.data.get(i);
            if (curr.getName().equals(name)) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            this.data.remove(index);
        }

        return index != -1;
    }

    public Present heaviestPresent() {
        List<Present> sorted = this.data.stream()
                .sorted((p1, p2) -> Double.compare(p2.getWeight(), p1.getWeight()))
                .collect(Collectors.toList());
        return sorted.get(0);
    }

    public Present getPresent(String name) {
        Present result = null;

        for (int i = 0; i < this.data.size(); i++) {
            Present curr = this.data.get(i);
            if (curr.getName().equals(name)) {
                result = curr;
                break;
            }
        }

        return result;
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("%s bag contains:%n", this.color));

        for (Present present : this.data) {
            sb.append(present).append(System.lineSeparator());
        }

        return sb.toString().trim();
    }
}
