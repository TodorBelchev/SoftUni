import java.util.Scanner;

public class UniquePINCodes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstNumMax = Integer.parseInt(scanner.nextLine());
        int secondNumMax = Integer.parseInt(scanner.nextLine());
        int thirdNumMax = Integer.parseInt(scanner.nextLine());

        for (int i = 2; i <= firstNumMax; i += 2) {
            for (int j = 2; j <= secondNumMax; j++) {
                for (int k = 2; k <= thirdNumMax; k += 2) {
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        System.out.println(i + " " + j + " " + k);
                    }
                }
            }
        }
    }
}