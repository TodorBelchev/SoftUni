package abstraction.hotel_reservation;

public enum Season {
    AUTUMN(1),
    SPRING(2),
    WINTER(3),
    SUMMER(4);

    private int seasonFactor;

    Season(int season) {
        this.seasonFactor = season;
    }

    public int getSeasonFactor() {
        return this.seasonFactor;
    }
}
