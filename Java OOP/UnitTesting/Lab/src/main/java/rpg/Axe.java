package rpg;

public class Axe {

    private int attackPoints;
    private int durabilityPoints;

    public Axe(int attack, int durability) {
        this.attackPoints = attack;
        this.durabilityPoints = durability;
    }

    public int getAttackPoints() {
        return this.attackPoints;
    }

    public int getDurabilityPoints() {
        return this.durabilityPoints;
    }

    public void attack(Dummy target) {
        if (this.durabilityPoints <= 0) {
            throw new IllegalStateException("rpg_tests.Axe is broken.");
        }

        target.takeAttack(this.attackPoints);
        this.durabilityPoints -= 1;
    }
}
