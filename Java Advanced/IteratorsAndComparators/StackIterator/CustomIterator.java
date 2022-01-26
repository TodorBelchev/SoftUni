package IteratorsAndComparators.StackIterator;

import java.util.Deque;
import java.util.Iterator;

public class CustomIterator implements Iterator<Integer> {
    private Deque<Integer> stack;
    public CustomIterator(Deque<Integer> stack) {
        this.stack = stack;
    }

    @Override
    public boolean hasNext() {
        return !this.stack.isEmpty();
    }

    @Override
    public Integer next() {
        return this.stack.pop();
    }
}
