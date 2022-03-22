package rpg;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AxeTest {

    Axe axe;
    Dummy dummy;

    @Before
    public void setup() {
        this.axe = new Axe(10, 1);
        this.dummy = new Dummy(10, 10);
    }

    @Test
    public void getAttackPoints() {
        Assert.assertEquals(this.axe.getAttackPoints(), 10);
    }

    @Test
    public void getDurabilityPoints() {
        Assert.assertEquals(this.axe.getDurabilityPoints(), 1);
    }

    @Test
    public void attack() {
        this.axe.attack(dummy);
        Assert.assertEquals(this.axe.getDurabilityPoints(), 0);
    }

    @Test(expected = IllegalStateException.class)
    public void attackShouldThrowWithZeroDurability() {
        this.axe.attack(dummy);
        this.axe.attack(dummy);
    }
}