package encapsulation.animal_farm;

public class Chicken {
    private String name;
    private int age;

    public Chicken(String name, int age) {
        setName(name);
        setAge(age);
    }

    private void setName(String name) {
        if (name.trim().length() <= 0) {
            throw new IllegalArgumentException("Name cannot be empty.");
        }
        this.name = name;
    }

    private void setAge(int age) {
        if (age < 0 || age > 15) {
            throw new IllegalArgumentException("Age should be between 0 and 15.");
        }
        this.age = age;
    }

    private double calculateProductPerDay() {
        if (this.age < 6) {
            return 2.0;
        } else if (this.age < 12) {
            return 1.0;
        } else {
            return 0.75;
        }
    }

    public double productPerDay() {
        return calculateProductPerDay();
    }

    @Override
    public String toString() {
        return String.format("%s (age %d) can produce %.2f eggs per day.", this.name, this.age, productPerDay());
    }
}
