import java.util.Scanner;

public class MovieDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int time = Integer.parseInt(scanner.nextLine());
        int scenes = Integer.parseInt(scanner.nextLine());
        int timeForScene = Integer.parseInt(scanner.nextLine());

        double totalTime = time * 0.15 + scenes * timeForScene;

        if (time >= totalTime) {
            System.out.printf("You managed to finish the movie on time! You have %.0f minutes left!", Math.ceil(time - totalTime));
        } else {
            System.out.printf("Time is up! To complete the movie you need %.0f minutes.", Math.ceil(totalTime - time));
        }
    }
}
