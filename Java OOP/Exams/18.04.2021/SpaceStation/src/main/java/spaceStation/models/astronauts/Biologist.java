package spaceStation.models.astronauts;

public class Biologist extends BaseAstronaut {
    private static final double OXYGEN = 70;
    private static final int OXYGEN_PER_BREATH = 5;

    public Biologist(String name) {
        super(name, OXYGEN);
    }

    @Override
    public void breath() {
        this.setOxygen(Math.max(0, super.getOxygen() - OXYGEN_PER_BREATH));
    }
}
