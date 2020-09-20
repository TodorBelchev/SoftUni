import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int actors = Integer.parseInt(scanner.nextLine());
        double priceOfClothes = Double.parseDouble(scanner.nextLine());
        double decorCost = budget * 0.1;
        double clothesCost= priceOfClothes*actors;
        if(actors>150){
            clothesCost=clothesCost*0.9;
        }
        double totalCost=decorCost+clothesCost;
        if(budget>=totalCost){
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", budget-totalCost);
        }else{
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.", totalCost-budget);
        }
    }
}
