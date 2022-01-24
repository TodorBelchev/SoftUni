package IteratorsAndComparators.Library;

import java.util.Iterator;
import java.util.function.Consumer;

public class Library<Book> implements Iterable<Book> {
    private Book[] books;

    public Library(Book... books) {
        this.books = books;
    }

    @Override
    public void forEach(Consumer action) {
        for (int i = 0; i < this.books.length; i++) {
            action.accept(books[i]);
        }
    }

    @Override
    public Iterator<Book> iterator() {
        return new LibIterator();
    }

    private class LibIterator implements Iterator<Book> {
        private int count;


        @Override
        public boolean hasNext() {
            return count < books.length;
        }

        @Override
        public Book next() {
            Book curr = books[count];
            count++;
            return curr;
        }
    }
}
