package rpg;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class DummyTest {

    Dummy dummy;

    @Before
    public void setup() {
        this.dummy = new Dummy(10, 10);
    }

    @Test
    public void getHealth() {
        Assert.assertEquals(this.dummy.getHealth(), 10);
    }

    @Test
    public void takeAttack() {
        this.dummy.takeAttack(5);
        Assert.assertEquals(this.dummy.getHealth(), 5);
    }

    @Test(expected = IllegalStateException.class)
    public void takeAttackShouldThrowIfDummyIsDead() {
        this.dummy.takeAttack(10);
        this.dummy.takeAttack(10);
    }

    @Test
    public void giveExperience() {
        this.dummy.takeAttack(10);
        int exp = this.dummy.giveExperience();
        Assert.assertEquals(exp, 10);
    }

    @Test(expected = IllegalStateException.class)
    public void giveExperienceShouldThrowIfDummyIsNotDead() {
        this.dummy.giveExperience();
    }

    @Test
    public void isDead() {
        Assert.assertFalse(this.dummy.isDead());
    }
}