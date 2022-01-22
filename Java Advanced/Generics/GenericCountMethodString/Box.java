package Generics.GenericCountMethodString;

import java.util.ArrayList;
import java.util.List;

public class Box<T extends Comparable> {
    private List<T> box;

    public Box() {
        this.box = new ArrayList<>();
    }

    public void add(T element) {
        this.box.add(element);
    }

    public void swap(int firstIndex, int secondIndex) {
        T temp = this.box.get(firstIndex);
        this.box.set(firstIndex, this.box.get(secondIndex));
        this.box.set(secondIndex, temp);
    }

    public int compare(T element) {
        int count = 0;
        for (T el: this.box) {
            if (el.compareTo(element) > 0) {
                count++;
            }
        }
        return count;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (T element : this.box) {
            sb.append(String.format("%s: %s%n", element.getClass().getName(), element.toString()));
        }
        return sb.toString();
    }
}
