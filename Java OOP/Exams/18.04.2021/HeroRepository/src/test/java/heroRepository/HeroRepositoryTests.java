package heroRepository;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.naming.OperationNotSupportedException;
import java.util.Collection;

public class HeroRepositoryTests {

    private HeroRepository heroRepository;

    @Before
    public void setup() {
        heroRepository = new HeroRepository();
    }

    @Test
    public void getCount() {
        Assert.assertEquals(0, heroRepository.getCount());
    }

    @Test
    public void create() {
        addHeroes();
        Assert.assertEquals(3, heroRepository.getCount());
    }

    @Test(expected = NullPointerException.class)
    public void createShouldThrowWithInvalidHero() {
        heroRepository.create(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void createShouldThrowWithDuplicateHero() {
        Hero hero = new Hero("Stamat", 1);
        heroRepository.create(hero);
        heroRepository.create(hero);
    }

    @Test
    public void remove() {
        addHeroes();
        boolean isRemoved = heroRepository.remove("Pesho");
        Assert.assertEquals(2, heroRepository.getCount());
        Assert.assertTrue(isRemoved);
        boolean isNotRemoved = heroRepository.remove("Alabala");
        Assert.assertFalse(isNotRemoved);
    }

    @Test(expected = NullPointerException.class)
    public void removeShouldThrowWithNull() {
        heroRepository.remove(null);
    }

    @Test
    public void getHeroWithHighestLevel() {
        addHeroes();
        Hero heroWithHighestLevel = heroRepository.getHeroWithHighestLevel();
        Assert.assertEquals(99, heroWithHighestLevel.getLevel());
        Assert.assertEquals("Pesho", heroWithHighestLevel.getName());
        Assert.assertNull(heroRepository.getHero("asd"));
    }

    @Test(expected = UnsupportedOperationException.class)
    public void getHeroes() {
        Collection<Hero> heroes = heroRepository.getHeroes();
        heroes.clear();
    }

    @Test
    public void getHero() {
        addHeroes();
        Hero hero = heroRepository.getHero("Pesho");
        Assert.assertEquals(99, hero.getLevel());
        Assert.assertEquals("Pesho", hero.getName());
        Assert.assertNull(heroRepository.getHero("Stamat"));
    }

    private void addHeroes() {
        Hero hero1 = new Hero("Pesho", 99);
        Hero hero2 = new Hero("Gosho", 89);
        Hero hero3 = new Hero("Tosho", 79);

        heroRepository.create(hero1);
        heroRepository.create(hero2);
        heroRepository.create(hero3);
    }
}
