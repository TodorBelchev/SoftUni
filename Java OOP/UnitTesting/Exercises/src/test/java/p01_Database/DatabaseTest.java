package p01_Database;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.naming.OperationNotSupportedException;

import static org.junit.Assert.*;

public class DatabaseTest {

    Database database;

    @Before
    public void setup() throws OperationNotSupportedException {
        this.database = new Database(1, 2, 3, 4);
    }

    @Test
    public void add() throws OperationNotSupportedException {
        this.database.add(5);
        Assert.assertEquals(this.database.getElements()[4], Integer.valueOf(5));
    }

    @Test(expected = OperationNotSupportedException.class)
    public void addShouldThrowIfElementIsNull() throws OperationNotSupportedException {
        this.database.add(null);
    }

    @Test
    public void remove() throws OperationNotSupportedException {
        this.database.remove();
        Assert.assertEquals(this.database.getElements().length, 3);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void removeShouldThrowIfDatabaseIsEmpty() throws OperationNotSupportedException {
        this.database.remove();
        this.database.remove();
        this.database.remove();
        this.database.remove();
        this.database.remove();
    }

    @Test(expected = OperationNotSupportedException.class)
    public void setElementsShouldThrowIfElementsAreMoreThanSixteen() throws OperationNotSupportedException {
        this.database = new Database(new Integer[17]);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void setElementsShouldThrowIfElementsAreLessThanOne() throws OperationNotSupportedException {
        this.database = new Database();
    }
}