package inheritance.random_array_list;

public class Main {
    public static void main(String[] args) {
        RandomArrayList randomArrayList = new RandomArrayList();
        randomArrayList.add(1);
        randomArrayList.add(2);
        randomArrayList.add(3);
        randomArrayList.add(4);

        System.out.println(randomArrayList.getRandomElement());
    }
}
