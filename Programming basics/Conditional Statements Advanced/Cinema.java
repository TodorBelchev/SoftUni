import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();
        int rows = Integer.parseInt(scanner.nextLine());
        int columns = Integer.parseInt(scanner.nextLine());

        double total = 0;
        if (type.equals("Premiere")) {
            total = rows * columns * 12;
        } else if (type.equals("Normal")) {
            total = rows * columns * 7.5;
        } else if (type.equals("Discount")) {
            total = rows * columns * 5;
        }
        System.out.printf("%.2f leva", total);
    }
}
