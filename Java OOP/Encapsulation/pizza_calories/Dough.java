package encapsulation.pizza_calories;

import java.util.LinkedHashMap;
import java.util.Map;

public class Dough {
    private String flourType;
    private String bakingTechnique;
    private double weight;

    private static Map<String, Double> flourTypes;
    private static Map<String, Double> bakingTechniques;

    static {
        flourTypes = new LinkedHashMap<>();
        bakingTechniques = new LinkedHashMap<>();

        flourTypes.put("WHITE", 1.5);
        flourTypes.put("WHOLEGRAIN", 1.0);

        bakingTechniques.put("CRISPY", 0.9);
        bakingTechniques.put("CHEWY", 1.1);
        bakingTechniques.put("HOMEMADE", 1.0);
    }

    public Dough(String flourType, String bakingTechnique, double weight) {
        this.setFlourType(flourType);
        this.setBakingTechnique(bakingTechnique);
        this.setWeight(weight);
    }

    public String getFlourType() {
        return flourType;
    }

    public String getBakingTechnique() {
        return bakingTechnique;
    }

    public double getWeight() {
        return weight;
    }

    private void setFlourType(String flourType) {
        if (!flourTypes.containsKey(flourType.toUpperCase())) {
            throw new IllegalArgumentException("Invalid type of dough.");
        }

        this.flourType = flourType;
    }

    private void setBakingTechnique(String bakingTechnique) {
        if (!bakingTechniques.containsKey(bakingTechnique.toUpperCase())) {
            throw new IllegalArgumentException("Invalid type of dough.");
        }

        this.bakingTechnique = bakingTechnique;
    }

    private void setWeight(double weight) {
        if (weight < 1 || weight > 200) {
            throw new IllegalArgumentException("Dough weight should be in the range [1..200].");
        }

        this.weight = weight;
    }

    public double calculateCalories() {
        return (2 * weight) * flourTypes.get(this.flourType.toUpperCase()) *
                bakingTechniques.get(this.bakingTechnique.toUpperCase());
    }
}
