package aquarium;

import java.util.ArrayList;
import java.util.List;

public class Aquarium {
    private String name;
    private int capacity;
    private int size;
    private List<Fish> fishInPool;

    public Aquarium(String name, int capacity, int size) {
        this.name = name;
        this.capacity = capacity;
        this.size = size;
        this.fishInPool = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getSize() {
        return size;
    }

    public int getFishInPool() {
        return this.fishInPool.size();
    }

    public void add(Fish fish) {
        if (this.fishInPool.size() < this.capacity && !this.fishInPool.contains(fish)) {
            this.fishInPool.add(fish);
        }
    }

    public boolean remove(String name) {
        int index = -1;

        for (int i = 0; i < this.fishInPool.size(); i++) {
            if (this.fishInPool.get(i).getName().equals(name)) {
                index = i;
            }
        }
        if (index != -1) {
            this.fishInPool.remove(index);
        }
        return index != -1;
    }

    public Fish findFish(String name) {
        Fish fishName = null;

        for (Fish fish : fishInPool) {
            if (fish.getName().equals(name)) {
                fishName = fish;
            }
        }

        return fishName;
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append("Aquarium: ").append(this.name).append(" ^ Size: ").append(this.size).append(System.lineSeparator());
        for (int i = 0; i < this.fishInPool.size(); i++) {
            sb.append(this.fishInPool.get(i)).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
