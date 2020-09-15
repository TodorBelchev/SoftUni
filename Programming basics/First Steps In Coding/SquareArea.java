import java.util.Scanner;

public class SquareArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int side = Integer.parseInt(scanner.nextLine());
        int squareArea = side * side;
        System.out.println(squareArea);
    }
}
