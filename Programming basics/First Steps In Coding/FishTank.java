import java.util.Scanner;

public class FishTank {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        int length= Integer.parseInt(scanner.nextLine());
        int width= Integer.parseInt(scanner.nextLine());
        int height= Integer.parseInt(scanner.nextLine());
        double lostSpace= Double.parseDouble(scanner.nextLine());
        double volume= (length*width*height)*0.001;
        double lostSpacePercent= lostSpace*0.01;
        double totalVolume= volume*(1-lostSpacePercent);
        System.out.printf("%.2f", totalVolume);
    }
}
