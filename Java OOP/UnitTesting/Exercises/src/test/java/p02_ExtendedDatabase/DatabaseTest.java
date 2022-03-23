package p02_ExtendedDatabase;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.naming.OperationNotSupportedException;

import static org.junit.Assert.*;

public class DatabaseTest {

    Database database;
    Person p1 = new Person(1, "Pesho");
    Person p2 = new Person(2, "Gosho");
    Person p3 = new Person(3, "Stamat");

    @Before
    public void setup() throws OperationNotSupportedException {
        this.database = new Database(p1, p2);
    }

    @Test
    public void add() throws OperationNotSupportedException {
        this.database.add(p3);
        Assert.assertEquals(this.database.getElements().length, 3);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void addShouldThrowIfPersonIsNull() throws OperationNotSupportedException {
        this.database.add(null);
    }

    @Test
    public void remove() throws OperationNotSupportedException {
        this.database.remove();
        Assert.assertEquals(this.database.getElements().length, 1);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void removeShouldThrowIfDatabaseIsEmpty() throws OperationNotSupportedException {
        this.database.remove();
        this.database.remove();
        this.database.remove();
    }

    @Test(expected = OperationNotSupportedException.class)
    public void setElementsShouldThrowIfElementsAreMoreThanSixteen() throws OperationNotSupportedException {
        this.database = new Database(p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3, p1, p2, p3);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void setElementsShouldThrowIfElementsAreLessThanOne() throws OperationNotSupportedException {
        this.database = new Database();
    }

    @Test
    public void findByUsername() throws OperationNotSupportedException {
        Person person = this.database.findByUsername("Pesho");
        Assert.assertEquals(person, p1);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void findByUsernameShouldThrowIfUsernameIsNull() throws OperationNotSupportedException {
        this.database.findByUsername(null);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void findByUsernameShouldThrowIfNoUserIsFound() throws OperationNotSupportedException {
        this.database.findByUsername("Tisho");
    }

    @Test
    public void findById() throws OperationNotSupportedException {
        Person person = this.database.findById(1);
        Assert.assertEquals(person, p1);
    }

    @Test(expected = OperationNotSupportedException.class)
    public void findByIdShouldThrowIfNoUserIsFound() throws OperationNotSupportedException {
        this.database.findById(199);
    }
}