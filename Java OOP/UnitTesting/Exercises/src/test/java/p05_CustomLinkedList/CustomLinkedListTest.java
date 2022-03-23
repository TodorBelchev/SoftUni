package p05_CustomLinkedList;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CustomLinkedListTest {

    CustomLinkedList<String> list;

    @Before
    public void setup() {
        this.list = new CustomLinkedList<>();
        this.list.add("Pesho");
        this.list.add("Gosho");
    }

    @Test
    public void get() {
        String s = this.list.get(0);
        Assert.assertEquals("Pesho", s);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getShouldThrowIfIndexIsLessThanZero() {
        this.list.get(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void getShouldThrowIfIndexIsBiggerThanListSize() {
        this.list.get(44);
    }

    @Test
    public void set() {
        this.list.set(1, "Stamat");
        String s = this.list.get(1);
        Assert.assertEquals("Stamat", s);
    }

    @Test(expected = IllegalArgumentException.class)
    public void setShouldThrowIfIndexIsLessThanZero() {
        this.list.set(-1, "Stamat");
    }

    @Test(expected = IllegalArgumentException.class)
    public void setShouldThrowIfIndexIsBiggerThanListSize() {
        this.list.set(44, "Stamat");
    }

    @Test
    public void add() {
        this.list.add("Stamat");
        Assert.assertEquals("Stamat", this.list.get(2));
    }

    @Test
    public void removeAt() {
        String s = this.list.removeAt(1);
        Assert.assertEquals("Gosho", s);
        String s2 = this.list.removeAt(0);
        Assert.assertEquals("Pesho", s2);
    }

    @Test(expected = IllegalArgumentException.class)
    public void removeAtShouldThrowIfIndexIsLessThanZero() {
        this.list.removeAt(-1);
    }

    @Test(expected = IllegalArgumentException.class)
    public void removeAtShouldThrowIfIndexIsBiggerThanListSize() {
        this.list.removeAt(44);
    }

    @Test
    public void remove() {
        int s = this.list.remove("Pesho");
        Assert.assertEquals(0, s);
    }

    @Test
    public void removeShouldReturnMinusOneIfNotFound() {
        int s = this.list.remove("Peshoo0o0o0o");
        Assert.assertEquals(-1, s);
    }

    @Test
    public void indexOf() {
        int s = this.list.indexOf("Pesho");
        Assert.assertEquals(0, s);
    }

    @Test
    public void indexOfShouldReturnMinusOneIfNotFound() {
        int s = this.list.indexOf("Peshoo0o0o0o");
        Assert.assertEquals(-1, s);
    }

    @Test
    public void contains() {
        boolean found = this.list.contains("Pesho");
        Assert.assertTrue(found);
    }

    @Test
    public void containsFalseIfNotFound() {
        boolean found = this.list.contains("Peshoo0o0o0o");
        Assert.assertFalse(found);
    }
}