package IteratorsAndComparators.Froggy;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Frog implements Iterator<Integer> {
    private List<Integer> list;
    private int index;

    public Frog(List<Integer> list) {
        this.list = list;
        this.index = 0;
    }

    @Override
    public boolean hasNext() {
        return this.index < this.list.size() - 1;
    }

    @Override
    public Integer next() {
        return this.list.get(this.index);
    }
}
