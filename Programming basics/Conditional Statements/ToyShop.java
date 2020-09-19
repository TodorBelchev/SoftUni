import java.util.Scanner;

public class ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double moneyNeeded = Double.parseDouble(scanner.nextLine());
        int puzzleCount = Integer.parseInt(scanner.nextLine());
        int dollCount = Integer.parseInt(scanner.nextLine());
        int bearCount = Integer.parseInt(scanner.nextLine());
        int minionCount = Integer.parseInt(scanner.nextLine());
        int truckCount = Integer.parseInt(scanner.nextLine());
        double puzzlePrice = puzzleCount * 2.6;
        double dollPrice = dollCount * 3;
        double bearPrice = bearCount * 4.1;
        double minionPrice = minionCount * 8.2;
        double truckPrice = truckCount * 2;
        int totalCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
        double totalPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;
        if (totalCount >= 50){
            totalPrice = totalPrice * 0.75;
        }
        double moneyAfterRent= totalPrice*0.9;
        if(moneyAfterRent>=moneyNeeded){
            System.out.printf("Yes! %.2f lv left.", moneyAfterRent-moneyNeeded);
        }else{
            System.out.printf("Not enough money! %.2f lv needed.", moneyNeeded-moneyAfterRent);
        }
    }
}
