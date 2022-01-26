package IteratorsAndComparators.ListyIterator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ListyIterator {
    private List<String> list;
    private int index = 0;

    public ListyIterator(String... strings) {
        this.setList(strings);
    }

    public void setList(String[] strings) {
        if (strings.length == 0) {
            this.list = new ArrayList<>();
        } else {
            this.list = Arrays.asList(strings);
        }
    }

    public boolean move() {
        if (index == this.list.size() - 1) {
            return false;
        } else {
            this.index++;
            return true;
        }
    }

    public boolean hasNext() {
        return this.index < this.list.size() - 1;
    }

    public void print() {
        if (this.list.size() == 0) {
            throw new IllegalStateException("Invalid Operation!");
        } else {
            System.out.println(this.list.get(this.index));
        }
    }
}
