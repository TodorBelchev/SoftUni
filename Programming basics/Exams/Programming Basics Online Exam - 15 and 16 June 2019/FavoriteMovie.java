import java.util.Scanner;

public class FavoriteMovie {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String movie = scanner.nextLine();
        String bestMovie = "";
        int bestSum = 0;
        int counter = 0;

        while (!movie.equals("STOP")) {
            int sum = 0;
            counter++;

            for (int i = 0; i < movie.length(); i++) {
                sum += movie.charAt(i);

                if (Character.isLowerCase(movie.charAt(i))) {
                    sum -= movie.length() * 2;
                } else if (Character.isUpperCase(movie.charAt(i))) {
                    sum -= movie.length();
                }

                if (sum > bestSum) {
                    bestSum = sum;
                    bestMovie = movie;
                }

            }

            if (counter == 7) {
                System.out.println("The limit is reached.");
                break;
            }

            movie = scanner.nextLine();
        }

        System.out.printf("The best movie for you is %s with %d ASCII sum.", bestMovie, bestSum);
    }
}
