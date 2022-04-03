package shopAndGoods;


import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.naming.OperationNotSupportedException;
import java.util.Map;

public class ShopTest {
    private Shop shop;

    @Before
    public void setShop() {
        this.shop = new Shop();
    }

    @Test
    public void getShelves() {
        Map<String, Goods> shelves = this.shop.getShelves();
        Assert.assertEquals(12, shelves.size());
    }

    @Test(expected = UnsupportedOperationException.class)
    public void getShelvesShouldReturnUnmodifiableMap() {
        Map<String, Goods> shelves = this.shop.getShelves();
        shelves.put("Shelves13", null);
    }

    @Test
    public void addGoods() throws OperationNotSupportedException {
        String addMsg = this.shop.addGoods("Shelves1", new Goods("manja", "123"));
        Assert.assertEquals("Goods: 123 is placed successfully!", addMsg);
    }

    @Test(expected = IllegalArgumentException.class)
    public void addGoodsShouldThrowWithInvalidShelveName() throws OperationNotSupportedException {
        this.shop.addGoods("alabala", new Goods("manja", "123"));
    }

    @Test(expected = IllegalArgumentException.class)
    public void addGoodsShouldThrowIfShelveIsTaken() throws OperationNotSupportedException {
        this.shop.addGoods("Shelves1", new Goods("manja", "123"));
        this.shop.addGoods("Shelves1", new Goods("manja", "123"));
    }

    @Test(expected = OperationNotSupportedException.class)
    public void addGoodsShouldThrowIfGoodIsPresent() throws OperationNotSupportedException {
        Goods good = new Goods("manja", "123");
        this.shop.addGoods("Shelves1", good);
        this.shop.addGoods("Shelves2", good);
    }

    @Test(expected = IllegalArgumentException.class)
    public void removeGoodsShouldThrowWithInvalidShelve() {
        this.shop.removeGoods("alabala", new Goods("manja", "123"));
    }

    @Test(expected = IllegalArgumentException.class)
    public void removeGoodsShouldThrowWithInvalidGoods() {
        this.shop.removeGoods("Shelves1", new Goods("manja", "123"));
    }

    @Test
    public void removeGoods() throws OperationNotSupportedException {
        Goods good = new Goods("manja", "123");
        this.shop.addGoods("Shelves1", good);
        String removeMsg = this.shop.removeGoods("Shelves1", good);
        Goods emptySlot = shop.getShelves().get("Shelves1");
        Assert.assertNull(emptySlot);
        Assert.assertEquals("Goods: 123 is removed successfully!", removeMsg);
    }
}