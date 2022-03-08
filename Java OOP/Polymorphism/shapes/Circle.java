package polymorphism.shapes;

public class Circle extends Shape {
    private Double radius;

    public Circle(Double radius) {
        this.radius = radius;
    }

    public final Double getRadius() {
        return radius;
    }

    @Override
    Double calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }

    @Override
    Double calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
