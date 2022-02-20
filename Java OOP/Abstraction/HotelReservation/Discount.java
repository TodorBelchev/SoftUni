package abstraction.hotel_reservation;

public enum Discount {
    NONE(0),
    SECONDVISIT(10),
    VIP(20);

    private int discount;

    Discount(int discount) {
        this.discount = discount;
    }

    public int getDiscount() {
        return this.discount;
    }
}
