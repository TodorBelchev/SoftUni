package polymorphism.wild_farm;

public class Zebra extends Mammal {
    public Zebra(String animalName, String animalType, Double animalWeight, String animalLivingRegion) {
        super(animalName, animalType, animalWeight, animalLivingRegion);
    }

    @Override
    void makeSound() {
        System.out.println("Zs");
    }

    @Override
    void eat(Food food) {
        if (food instanceof Meat) {
            throw new IllegalArgumentException("Zebras are not eating that type of food!");
        }
        super.setFoodEaten(super.getFoodEaten() + food.getQuantity());
    }
}
