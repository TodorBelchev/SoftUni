package abstraction.hotel_reservation;

public class PriceCalculator {
    public static double calculatePrice(double pricePerDay, int days, Season season, Discount discount) {
        int multiplier = season.getSeasonFactor();
        double discountMultiplier = discount.getDiscount() / 100.00;
        double price = days * pricePerDay * multiplier;
        return price - price * discountMultiplier;
    }
}
