import java.util.Scanner;

public class TransportPrice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int distance = Integer.parseInt(scanner.nextLine());
        String dayTime = scanner.nextLine();
        double price = 0;
        double priceTaxi = 0;
        double priceBus = distance * 0.09;
        double priceTrain = distance * 0.06;
        double min = Double.MAX_VALUE;
        if (dayTime.equals("day")) {
            if (distance < 20) {
                price = 0.7 + distance * 0.79;
                min = price;
            } else if (distance < 100) {
                priceTaxi = 0.7 + distance * 0.79;
                if (priceTaxi < min) {
                    min = priceTaxi;
                }
                if (priceBus < min) {
                    min = priceBus;
                }
            } else {
                priceTaxi = 0.7 + distance * 0.79;
                if (priceTaxi < min) {
                    min = priceTaxi;
                }
                if (priceBus < min) {
                    min = priceBus;
                }
                if (priceTrain < min) {
                    min = priceTrain;
                }
            }
        } else if (dayTime.equals("night")) {
            if (distance < 20) {
                price = 0.7 + distance * 0.9;
                min = price;
            } else if (distance < 100) {
                priceTaxi = 0.7 + distance * 0.9;
                if (priceTaxi < min) {
                    min = priceTaxi;
                }
                if (priceBus < min) {
                    min = priceBus;
                }
            } else {
                priceTaxi = 0.7 + distance * 0.9;
                if (priceTaxi < min) {
                    min = priceTaxi;
                }
                if (priceBus < min) {
                    min = priceBus;
                }
                if (priceTrain < min) {
                    min = priceTrain;
                }
            }
        }
        System.out.printf("%.2f", min);
    }
}
