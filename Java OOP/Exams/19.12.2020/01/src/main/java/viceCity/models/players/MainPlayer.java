package viceCity.models.players;

public class MainPlayer extends BasePlayer {

    private static final int LIFE_POINTS = 100;
    private static final String NAME = "Tommy Vercetti";

    public MainPlayer() {
        super(NAME, LIFE_POINTS);
    }
}
