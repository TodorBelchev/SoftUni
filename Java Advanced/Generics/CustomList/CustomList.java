package Generics.CustomList;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CustomList<T extends Comparable> {
    private List<T> list;

    public CustomList() {
        this.list = new ArrayList<>();
    }

    public void add(T element) {
        this.list.add(element);
    }

    public T remove(int index) {
        return this.list.remove(index);
    }

    public boolean contains(T element) {
        return this.list.contains(element);
    }

    public void swap(int firstIndex, int secondIndex) {
        T temp = this.list.get(firstIndex);
        this.list.set(firstIndex, this.list.get(secondIndex));
        this.list.set(secondIndex, temp);
    }

    public int countGreaterThan(T element) {
        int count = 0;
        for (T el: this.list) {
            if (el.compareTo(element) > 0) {
                count++;
            }
        }
        return count;
    }

    public T getMax() {
        return this.list.stream().max((f1, f2) -> f1.compareTo(f2)).get();
    }

    public T getMin() {
        return this.list.stream().min((f1, f2) -> f1.compareTo(f2)).get();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        this.list.forEach(x -> sb.append(x).append("\n"));
        sb.deleteCharAt(sb.length() - 1);
        return sb.toString();
    }
}
