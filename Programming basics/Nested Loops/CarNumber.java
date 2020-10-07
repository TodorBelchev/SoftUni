import java.util.Scanner;

public class CarNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstNum = Integer.parseInt(scanner.nextLine());
        int lastNum = Integer.parseInt(scanner.nextLine());
        for (int i = firstNum; i <= lastNum; i++) {
            for (int j = firstNum; j <= lastNum; j++) {
                for (int k = firstNum; k <= lastNum; k++) {
                    for (int l = firstNum; l <= lastNum; l++) {
                        if (((i % 2 == 0 && l % 2 != 0) || (i % 2 != 0 && l % 2 == 0)) && (i > l) && ((j + k) % 2 == 0)) {
                            System.out.printf("%d%d%d%d ", i, j, k, l);
                        }
                    }
                }
            }
        }
    }
}
