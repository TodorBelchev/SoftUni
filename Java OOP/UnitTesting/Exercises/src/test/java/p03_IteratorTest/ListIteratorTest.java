package p03_IteratorTest;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.naming.OperationNotSupportedException;

import static org.junit.Assert.*;

public class ListIteratorTest {

    ListIterator listIterator;

    @Before
    public void setup() throws OperationNotSupportedException {
        this.listIterator = new ListIterator("Pesho", "Gosho");
    }

    @Test(expected = OperationNotSupportedException.class)
    public void constructorShouldThrowIfElementsAreNull() throws OperationNotSupportedException {
        this.listIterator = new ListIterator(null);
    }

    @Test
    public void moveShouldReturnTrueIfHasNext() {
        boolean move = this.listIterator.move();
        Assert.assertTrue(move);
        boolean move2 = this.listIterator.move();
        Assert.assertFalse(move2);
    }

    @Test
    public void print() {
        String print = this.listIterator.print();
        Assert.assertEquals("Pesho", print);
    }

    @Test(expected = IllegalStateException.class)
    public void printShouldThrowIfElementsIsEmpty() throws OperationNotSupportedException {
        this.listIterator = new ListIterator(new String[0]);
        this.listIterator.print();
    }
}