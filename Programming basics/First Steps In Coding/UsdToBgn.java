import java.util.Scanner;

public class UsdToBgn {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double dollars = Double.parseDouble(scanner.nextLine());
        double BGN = dollars * 1.79549;
        System.out.printf("%.2f", BGN);
    }
}
