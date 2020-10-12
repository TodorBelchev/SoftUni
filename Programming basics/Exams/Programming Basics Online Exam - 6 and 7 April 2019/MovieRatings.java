import java.util.Scanner;

public class MovieRatings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int moviesCount = Integer.parseInt(scanner.nextLine());

        double minRating = 999999999;
        double maxRating = -999999999;
        double averageRating = 0;
        String minMovieName = "";
        String maxMovieName = "";

        for (int i = 0; i < moviesCount; i++) {
            String movieName = scanner.nextLine();
            double rating = Double.parseDouble(scanner.nextLine());

            if (rating < minRating) {
                minRating = rating;
                minMovieName = movieName;
            }

            if (rating > maxRating) {
                maxRating = rating;
                maxMovieName = movieName;
            }

            averageRating += rating;
        }
        averageRating /= moviesCount;
        System.out.printf("%s is with highest rating: %.1f%n", maxMovieName, maxRating);
        System.out.printf("%s is with lowest rating: %.1f%n", minMovieName, minRating);
        System.out.printf("Average rating: %.1f", averageRating);
    }
}
