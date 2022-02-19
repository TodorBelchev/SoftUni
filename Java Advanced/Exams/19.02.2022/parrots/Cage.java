package parrots;

import java.util.ArrayList;
import java.util.List;

public class Cage {
    private String name;
    private int capacity;
    private List<Parrot> data;

    public Cage(String name, int capacity) {
        this.name = name;
        this.capacity = capacity;
        this.data = new ArrayList<>();
    }

    public String getName() {
        return this.name;
    }

    public int getCapacity() {
        return this.capacity;
    }

    public void add(Parrot parrot) {
        if (this.capacity > this.data.size()) {
            this.data.add(parrot);
        }
    }

    public boolean remove(String name) {
        int index = -1;
        for (int i = 0; i < this.data.size(); i++) {
            Parrot curr = this.data.get(i);
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

    public Parrot sellParrot(String name) {
        Parrot result = null;
        for (Parrot parrot : this.data) {
            if (parrot.getName().equals(name)) {
                parrot.setAvailable(false);
                result = parrot;
                break;
            }
        }

        return result;
    }

    public List<Parrot> sellParrotBySpecies(String species) {
        List<Parrot> result = new ArrayList<>();

        for (Parrot parrot : this.data) {
            if (parrot.getSpecies().equals(species)) {
                parrot.setAvailable(false);
                result.add(parrot);
            }
        }

        return result;
    }

    public int count() {
        return this.data.size();
    }

    public String report() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Parrots available at %s:%n", this.name));

        for (Parrot parrot : this.data) {
            if (parrot.isAvailable()) {
                sb.append(parrot).append(System.lineSeparator());
            }
        }

        return sb.toString();
    }
}
