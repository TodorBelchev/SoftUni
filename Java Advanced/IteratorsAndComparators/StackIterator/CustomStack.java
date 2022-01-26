package IteratorsAndComparators.StackIterator;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;

public class CustomStack implements Iterable<Integer> {
    private Deque<Integer> stack;

    public CustomStack() {
        this.stack = new ArrayDeque<>();
    }

    public void push(int value) {
        this.stack.push(value);
    }

    public int pop() {
        return this.stack.pop();
    }

    @Override
    public Iterator<Integer> iterator() {
        return new CustomIterator(this.stack);
    }
}
