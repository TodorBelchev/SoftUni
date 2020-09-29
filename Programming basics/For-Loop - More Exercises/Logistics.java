import java.util.Scanner;

public class Logistics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int transportCount = Integer.parseInt(scanner.nextLine());
        int busWeight = 0;
        int truckWeight = 0;
        int trainWeight = 0;
        for (int i = 1; i <= transportCount; i++) {
            int currentWeight = Integer.parseInt(scanner.nextLine());
            if (currentWeight <= 3) {
                busWeight += currentWeight;
            } else if (currentWeight <= 11) {
                truckWeight += currentWeight;
            } else {
                trainWeight += currentWeight;
            }
        }
        double totalWeight = busWeight + truckWeight + trainWeight;
        double total = (busWeight * 200 + truckWeight * 175 + trainWeight * 120) / totalWeight;
        System.out.printf("%.2f%n", total);
        System.out.printf("%.2f%%%n", (busWeight * 1.0 / totalWeight) * 100);
        System.out.printf("%.2f%%%n", (truckWeight * 1.0 / totalWeight) * 100);
        System.out.printf("%.2f%%", (trainWeight * 1.0 / totalWeight) * 100);
    }
}
