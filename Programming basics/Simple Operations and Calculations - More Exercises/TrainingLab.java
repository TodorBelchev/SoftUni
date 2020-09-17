import java.util.Scanner;

public class TrainingLab {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double width = Double.parseDouble(scanner.nextLine());
        double height = Double.parseDouble(scanner.nextLine());
        double bureau = Math.floor((height - 1) / 0.70);
        double rows = Math.floor(width / 1.2);
        double freePlaces = bureau * rows - 3;
        System.out.printf("%.0f", freePlaces);
    }
}
