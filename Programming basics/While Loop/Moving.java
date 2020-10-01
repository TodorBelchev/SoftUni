import java.util.Scanner;

public class Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        String input = scanner.nextLine();

        int roomVolume = width * length * height;

        while (!input.equals("Done")) {
            int currentCase = Integer.parseInt(input);
            roomVolume -= currentCase;
            if (roomVolume < 0) {
                System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(roomVolume));
                break;
            }
            input = scanner.nextLine();
        }
        if (roomVolume >= 0) {
            System.out.printf("%d Cubic meters left.", roomVolume);
        }
    }
}
