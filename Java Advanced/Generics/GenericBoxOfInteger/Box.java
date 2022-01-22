package Generics.GenericBoxOfInteger;

import java.util.ArrayList;
import java.util.List;

public class Box<T> {
    private List<T> box;

    public Box() {
        this.box = new ArrayList<>();
    }

    public void add(T element) {
        this.box.add(element);
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
