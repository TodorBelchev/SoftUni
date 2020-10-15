import java.util.Scanner;

public class WorldSnookerChampionship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String stage = scanner.nextLine();
        String typeTicket = scanner.nextLine();
        int ticketsCount = Integer.parseInt(scanner.nextLine());
        String trophyPicture = scanner.nextLine();

        double price = 0;
        boolean pictureIsFree = false;

        if ("Standard".equals(typeTicket)) {
            switch (stage) {
                case "Quarter final":
                    price = 55.5;
                    break;
                case "Semi final":
                    price = 75.88;
                    break;
                case "Final":
                    price = 110.1;
                    break;
            }
        } else if ("Premium".equals(typeTicket)) {
            switch (stage) {
                case "Quarter final":
                    price = 105.2;
                    break;
                case "Semi final":
                    price = 125.22;
                    break;
                case "Final":
                    price = 160.66;
                    break;
            }
        } else if ("VIP".equals(typeTicket)) {
            switch (stage) {
                case "Quarter final":
                    price = 118.9;
                    break;
                case "Semi final":
                    price = 300.4;
                    break;
                case "Final":
                    price = 400;
                    break;
            }
        }

        double total = price * ticketsCount;

        if (total > 4000) {
            total *= 0.75;
            pictureIsFree = true;
        } else if (total > 2500) {
            total *= 0.9;
        }

        if (!pictureIsFree && "Y".equals(trophyPicture)) {
            total += ticketsCount * 40;
        }
        
        System.out.printf("%.2f", total);
    }
}
