package p04_BubbleSortTest;

import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

public class BubbleTest {

    @Test
    public void sort() {
        int[] toSort = new int[]{3, 2, 1};
        Bubble.sort(toSort);
        Assert.assertArrayEquals(toSort, new int[]{1, 2, 3});
    }
}