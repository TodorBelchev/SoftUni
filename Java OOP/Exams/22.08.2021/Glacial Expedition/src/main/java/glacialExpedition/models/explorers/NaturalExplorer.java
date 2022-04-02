package glacialExpedition.models.explorers;

public class NaturalExplorer extends BaseExplorer {
    private static final int ENERGY = 60;
    private static final int ENERGY_PER_SEARCH = 7;

    public NaturalExplorer(String name) {
        super(name, ENERGY);
    }

    @Override
    public void search() {
        this.setEnergy(Math.max(0, this.getEnergy() - ENERGY_PER_SEARCH));
    }
}
