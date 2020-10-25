import java.util.Scanner;

public class DailyWage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int rows = Integer.parseInt(scanner.nextLine());
        int positions = Integer.parseInt(scanner.nextLine());
        int strawberry = 0;
        int blueberry = 0;

        for (int i = 1; i <= rows; i++) {

            if (i % 2 != 0) {
                strawberry++;
            } else {

                for (int j = 1; j <= positions; j++) {

                    if (j % 3 != 0) {
                        blueberry++;
                    }
                }
            }
        }

        double total = strawberry * 3.5 * positions + blueberry * 5;
        double sales = total * 0.8;
        System.out.printf("Total: %.2f lv.", sales);
    }
}
