import java.util.Scanner;

public class FootballLeague {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int capacity = Integer.parseInt(scanner.nextLine());
        int totalFans = Integer.parseInt(scanner.nextLine());
        int aCount = 0;
        int bCount = 0;
        int vCount = 0;
        int gCount = 0;
        for (int i = 1; i <= totalFans; i++) {
            String sector = scanner.nextLine();
            if (sector.equals("A")) {
                aCount++;
            } else if (sector.equals("B")) {
                bCount++;
            } else if (sector.equals("V")) {
                vCount++;
            } else if (sector.equals("G")) {
                gCount++;
            }
        }
        System.out.printf("%.2f%%%n", (aCount * 1.0 / totalFans) * 100);
        System.out.printf("%.2f%%%n", (bCount * 1.0 / totalFans) * 100);
        System.out.printf("%.2f%%%n", (vCount * 1.0 / totalFans) * 100);
        System.out.printf("%.2f%%%n", (gCount * 1.0 / totalFans) * 100);
        System.out.printf("%.2f%%", (totalFans * 1.0 / capacity) * 100);
    }
}
