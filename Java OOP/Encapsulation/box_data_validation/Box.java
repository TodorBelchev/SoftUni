package encapsulation.box_data_validation;

public class Box {
    private double length;
    private double width;
    private double height;

    public Box(double length, double width, double height) {
        setLength(length);
        setWidth(width);
        setHeight(height);
    }

    private void setLength(double length) {
        ensureValue(length, "Length");
        this.length = length;
    }

    private void setWidth(double width) {
        ensureValue(width, "Width");
        this.width = width;
    }

    private void setHeight(double height) {
        ensureValue(height, "Height");
        this.height = height;
    }

    private void ensureValue(Double value, String param) {
        if (value <= 0) {
            throw new IllegalArgumentException(param + " cannot be zero or negative.");
        }
    }

    public double calculateSurfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

    public double calculateLateralSurfaceArea() {
        return 2 * (this.length * this.height + this.width * this.height);
    }

    public double calculateVolume() {
        return this.length * this.width * this.height;
    }

}
