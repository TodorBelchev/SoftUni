package polymorphism.wild_farm;

public class Tiger extends Felime {
    public Tiger(String animalName, String animalType, Double animalWeight, String animalLivingRegion) {
        super(animalName, animalType, animalWeight, animalLivingRegion);
    }

    @Override
    public void makeSound() {
        System.out.println("ROAAR!!!");
    }

    @Override
    public void eat(Food food) {
        if (food instanceof Vegetable) {
            throw new IllegalArgumentException("Tigers are not eating that type of food!");
        }
        super.setFoodEaten(super.getFoodEaten() + food.getQuantity());
    }
}
