import java.util.Scanner;

public class FilmPremiere {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String movie = scanner.nextLine();
        String packet = scanner.nextLine();
        int tickets = Integer.parseInt(scanner.nextLine());
        int price = 0;
        if (movie.equals("John Wick")) {
            switch (packet) {
                case "Drink":
                    price = 12;
                    break;
                case "Popcorn":
                    price = 15;
                    break;
                case "Menu":
                    price = 19;
                    break;
            }
        } else if (movie.equals("Star Wars")) {
            switch (packet) {
                case "Drink":
                    price = 18;
                    break;
                case "Popcorn":
                    price = 25;
                    break;
                case "Menu":
                    price = 30;
                    break;
            }
        } else if (movie.equals("Jumanji")) {
            switch (packet) {
                case "Drink":
                    price = 9;
                    break;
                case "Popcorn":
                    price = 11;
                    break;
                case "Menu":
                    price = 14;
                    break;
            }
        }
        double totalPrice = price * tickets;
        if (movie.equals("Star Wars") && tickets > 3) {
            totalPrice *= 0.7;
        }
        if (movie.equals("Jumanji") && tickets == 2) {
            totalPrice *= 0.85;
        }
        System.out.printf("Your bill is %.2f leva.", totalPrice);
    }
}
