package rpg;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class HeroTest {

    Hero hero;
    Dummy dummy;

    @Before
    public void setup() {
        this.hero = new Hero("Pesho");
        this.dummy = new Dummy(10, 10);
    }

    @Test
    public void getName() {
        Assert.assertEquals(this.hero.getName(), "Pesho");
    }

    @Test
    public void getExperience() {
        Assert.assertEquals(this.hero.getExperience(), 0);
        this.hero.attack(dummy);
        Assert.assertEquals(this.hero.getExperience(), 10);
    }

    @Test
    public void getWeapon() {
        Axe axe = this.hero.getWeapon();
        Assert.assertEquals(axe.getAttackPoints(), 10);
    }

}