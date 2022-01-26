package IteratorsAndComparators.Froggy;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class Lake implements Iterable<Integer> {
    private List<Integer> list;

    public Lake(List<Integer> list) {
        this.list = list;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Frog(this.list);
    }

    public void forEach() {
        List<String> curr = new ArrayList<>();
        for (int i = 0; i < this.list.size(); i += 2) {
            curr.add(this.list.get(i) + "");
        }
        for (int i = 1; i < this.list.size(); i += 2) {
            curr.add(this.list.get(i) + "");
        }
        System.out.println(String.join(", ", curr));
    }
}
