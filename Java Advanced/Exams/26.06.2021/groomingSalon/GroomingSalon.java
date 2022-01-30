package groomingSalon;

import java.util.ArrayList;
import java.util.List;

public class GroomingSalon {
    private int capacity;
    private List<Pet> data;

    public GroomingSalon(int capacity) {
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public void add(Pet pet) {
        if (this.data.size() < capacity) {
            this.data.add(pet);
        }
    }

    public boolean remove(String name) {
        int index = -1;
        for (int i = 0; i < this.data.size(); i++) {
            Pet curr = this.data.get(i);
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

    public Pet getPet(String name, String owner) {
        Pet pet = null;
        for (int i = 0; i < this.data.size(); i++) {
            Pet curr = this.data.get(i);
            if (curr.getName().equals(name) && curr.getOwner().equals(owner)) {
                pet = curr;
                break;
            }
        }
        return pet;
    }

    public int getCount() {
        return this.data.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        sb.append("The grooming salon has the following clients:").append(System.lineSeparator());
        for (int i = 0; i < this.data.size(); i++) {
            Pet curr = this.data.get(i);
            sb.append(String.format("%s %s", curr.getName(), curr.getOwner())).append(System.lineSeparator());
        }
        return sb.toString().trim();
    }
}
