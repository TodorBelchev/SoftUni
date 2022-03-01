package inheritance.random_array_list;

import java.util.ArrayList;
import java.util.Random;

public class RandomArrayList extends ArrayList {
    private Random rnd;

    public RandomArrayList() {
        this.rnd = new Random();
    }

    public Object getRandomElement() {
        int index = this.rnd.nextInt(super.size());
        return super.remove(index);
    }
}
