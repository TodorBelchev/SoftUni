package vetClinic;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Clinic {
    private int capacity;
    private List<Pet> data;

    public Clinic(int capacity) {
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public void add(Pet pet) {
        if (this.capacity > this.data.size()) {
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

        for (Pet curr: this.data) {
            if (curr.getName().equals(name) && curr.getOwner().equals(owner)) {
                pet = curr;
                break;
            }
        }

        return pet;
    }

    public Pet getOldestPet() {
        List<Pet> sorted = this.data.stream()
                .sorted((p1, p2) -> Integer.compare(p2.getAge(), p1.getAge()))
                .collect(Collectors.toList());

        return sorted.get(0);
    }

    public int getCount() {
        return this.data.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        sb.append("The clinic has the following patients:").append(System.lineSeparator());

        for (Pet pet: this.data) {
            sb.append(String.format("%s %s%n", pet.getName(), pet.getOwner()));
        }

        return sb.toString().trim();
    }
}
