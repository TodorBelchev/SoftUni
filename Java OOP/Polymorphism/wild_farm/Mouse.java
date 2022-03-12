package polymorphism.wild_farm;

public class Mouse extends Mammal {
    public Mouse(String animalName, String animalType, Double animalWeight, String animalLivingRegion) {
        super(animalName, animalType, animalWeight, animalLivingRegion);
    }

    @Override
    void makeSound() {
        System.out.println("SQUEEEAAAK!");
    }

    @Override
    void eat(Food food) {
        if (food instanceof Meat) {
            throw new IllegalArgumentException("Mice are not eating that type of food!");
        }
        super.setFoodEaten(super.getFoodEaten() + food.getQuantity());
    }
}
