package abstraction.jedy_galaxy;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] dimensions = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        String command = scanner.nextLine();

        Field field = new Field(dimensions[0], dimensions[1]);
        int[] jediCoordinates = Arrays.stream(command.split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] evilCoordinates = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        long power = 0;

        while (!command.equals("Let the Force be with you")) {
            field.moveEvil(evilCoordinates[0], evilCoordinates[1]);
            power = field.collectJediPower(jediCoordinates[0], jediCoordinates[1]);

            command = scanner.nextLine();
        }

        System.out.println(power);
    }
}
