package gifts;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Collection;
import java.util.List;

public class GiftFactoryTests {
    private GiftFactory giftFactory;

    @Before
    public void setup() {
        this.giftFactory = new GiftFactory();
    }

    @Test
    public void getCount() {
        Assert.assertEquals(0, this.giftFactory.getCount());
        addGifts();
        Assert.assertEquals(3, this.giftFactory.getCount());
    }

    @Test(expected = IllegalArgumentException.class)
    public void createGiftShouldThrowWithDuplicates() {
        List<Gift> gifts = addGifts();
        this.giftFactory.createGift(gifts.get(1));
    }

    @Test
    public void removeGift() {
        addGifts();
        this.giftFactory.removeGift("Car");
    }

    @Test(expected = NullPointerException.class)
    public void removeGiftShouldThrowWithInvalidName() {
        this.giftFactory.removeGift("");
    }

    @Test(expected = NullPointerException.class)
    public void removeGiftShouldThrowWithInvalidNameNull() {
        this.giftFactory.removeGift(null);
    }

    @Test
    public void getPresentWithLeastMagic() {
        List<Gift> gifts = addGifts();
        Gift presentWithLeastMagic = this.giftFactory.getPresentWithLeastMagic();
        Assert.assertEquals(gifts.get(1), presentWithLeastMagic);
    }

    @Test
    public void getPresentWithLeastMagicShouldReturnNUll() {
        Gift presentWithLeastMagic = this.giftFactory.getPresentWithLeastMagic();
        Assert.assertNull(presentWithLeastMagic);
    }

    @Test
    public void getPresent() {
        List<Gift> gifts = addGifts();
        Gift present = this.giftFactory.getPresent("Car");
        Assert.assertEquals(gifts.get(0), present);
    }

    @Test
    public void getPresentShouldReturnNull() {
        addGifts();
        Gift present = this.giftFactory.getPresent("Missing name");
        Assert.assertNull(present);
    }

    @Test
    public void getPresents() {
        List<Gift> gifts = addGifts();
        Collection<Gift> presents = this.giftFactory.getPresents();
        Assert.assertEquals(gifts.size(), presents.size());
    }

    @Test(expected = UnsupportedOperationException.class)
    public void getPresentsShouldThrow() {
        List<Gift> gifts = addGifts();
        Collection<Gift> presents = this.giftFactory.getPresents();
        presents.clear();
    }

    private List<Gift> addGifts() {
        Gift gift1 = new Gift("Car", 100);
        Gift gift2 = new Gift("Doll", 1);
        Gift gift3 = new Gift("Lego", 999);

        this.giftFactory.createGift(gift1);
        this.giftFactory.createGift(gift2);
        this.giftFactory.createGift(gift3);

        return List.of(gift1, gift2, gift3);
    }
}
