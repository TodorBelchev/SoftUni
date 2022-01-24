package IteratorsAndComparators.ComparableBook;

import java.util.Arrays;
import java.util.List;

public class Book implements Comparable<Book>{
    private String title;
    private int year;
    private List<String> authors;

    public Book(String title, int year, String... authors) {
        this.title = title;
        this.year = year;
        this.authors = Arrays.asList(authors);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public List<String> getAuthors() {
        return authors;
    }

    public void setAuthors(List<String> authors) {
        this.authors = authors;
    }

    @Override
    public int compareTo(Book o) {
        int bookTitleResult = this.title.compareTo(o.title);
        if (bookTitleResult == 0) {
            return Integer.compare(this.year, o.year);
        } else {
            return bookTitleResult;
        }
    }

    @Override
    public String toString() {
        return String.format("%s (%s)", this.getTitle(), this.getYear());
    }
}
