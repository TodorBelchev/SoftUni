package IteratorsAndComparators.LinkedListTraversal;

import java.awt.dnd.InvalidDnDOperationException;
import java.util.Iterator;
import java.util.function.Consumer;

public class LinkedList implements Iterable<Integer> {
    private Node head;
    private Node tail;
    private int size;

    public LinkedList() {
        this.head = new Node(0);
        this.tail = new Node(0);
    }

    public void addFirst(int element) {
        Node newHead = new Node(element);
        if (isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }
        size++;
    }

    public void addLast(int element) {
        Node newTail = new Node(element);
        if (isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        size++;

    }

    public int removeFirst() {
        if (isEmpty()) {
            throw new InvalidDnDOperationException("Remove called for collection with size 0");
        }

        int firstElement = this.head.value;

        this.head = this.head.next;

        if (this.head != null) {
            this.head.prev = null;
            this.tail = null;
        }

        this.size--;

        return firstElement;
    }

    public int removeLast() {
        if (isEmpty()) {
            throw new InvalidDnDOperationException("Remove called for collection with size 0");
        }

        int lastElement = this.tail.value;
        this.tail = this.tail.prev;


        if (this.tail != null) {
            this.tail.next = null;
        }

        this.size--;

        return lastElement;
    }


    public void forEach(Consumer<? super Integer> consumer) {

        Node current = this.head;

        while (current != null) {
            consumer.accept(current.value);
            current = current.next;
        }
    }

    public int[] toArray() {
        int[] result = new int[this.size];

        Node current = this.head;
        int index = 0;

        while (current != null) {
            result[index] = current.value;
            index++;
            current = current.next;
        }

        return result;
    }


    public void addAfter(int searchElement, int element) {
        if (isEmpty()) {
            throw new InvalidDnDOperationException("Add After method on empty list");
        }

        Node tempNode = getNode(searchElement);

        if (tempNode == null) {
            throw new InvalidDnDOperationException("Element not found");
        }

        Node newNode = new Node(element);

        newNode.prev = tempNode;
        newNode.next = tempNode.next;
        if (newNode.next != null) {
            tempNode.next.prev = newNode;
        }

        tempNode.next = newNode;
        this.size++;
    }

    public void removeAfter(int searchElement) {
        if (isEmpty()) {
            throw new InvalidDnDOperationException("Remove After method on empty list");
        }

        Node tempNode = getNode(searchElement);

        if (tempNode == null) {
            throw new InvalidDnDOperationException("Element not found");
        }

        if (tempNode.next == null) {
            throw new InvalidDnDOperationException("No element after " + searchElement);
        }
        if (tempNode.next.next != null) {
            tempNode.next.next.prev = tempNode;
        }

        tempNode.next = tempNode.next.next;
        this.size--;
    }

    public void remove(int element) {
        if (isEmpty()) {
            throw new InvalidDnDOperationException("Remove After method on empty list");
        }

        Node tempNode = getNode(element);

        if (tempNode == null) {
            return;
        }

        if (tempNode.prev == null) {
            this.head = tempNode.next;
            this.head.prev = null;
            this.size--;
            return;
        }


        if (tempNode.next == null) {
            this.tail = tempNode.prev;
            this.size--;
            return;
        }


        tempNode.prev.next = tempNode.next;
        tempNode.next.prev = tempNode.prev;
        tempNode = null;


        this.size--;
    }

    private Node getNode(int searchElement) {
        Node tempNode = this.head;

        while (tempNode != null) {
            if (tempNode.value == searchElement) {
                break;
            }

            tempNode = tempNode.next;
        }
        return tempNode;
    }

    public int getSize() {
        int counter = 0;
        Iterator<Integer> iterator = this.iterator();
        while (iterator.hasNext()) {
            counter++;
            iterator.next();
        }
        return counter;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {

            Node node = head;

            @Override
            public boolean hasNext() {
                try {
                    return node != null;
                } catch (NullPointerException e) {
                    return false;
                }
            }

            @Override
            public Integer next() {
                int value = node.value;
                node = node.next;
                return value;
            }
        };
    }
}
