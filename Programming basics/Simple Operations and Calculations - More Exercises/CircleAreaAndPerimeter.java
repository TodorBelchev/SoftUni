import java.util.Scanner;

public class CircleAreaAndPerimeter {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double radius = Double.parseDouble(scanner.nextLine());
        double area = radius*radius*Math.PI;
        double perimeter = radius*Math.PI*2;
        System.out.printf("%.2f%n", area);
        System.out.printf("%.2f", perimeter);
    }
}
