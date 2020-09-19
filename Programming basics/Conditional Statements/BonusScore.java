import java.util.Scanner;

public class BonusScore {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        int startingPoints=Integer.parseInt(scanner.nextLine());
        double bonusScore=0;
        if(startingPoints<=100){
            bonusScore=5;
        }else if(startingPoints>100 && startingPoints<=1000){
            bonusScore=startingPoints*0.2;
        }else if(startingPoints>1000){
            bonusScore=startingPoints*0.1;
        }
        if(startingPoints%2==0){
            bonusScore+=1;
        }else if(startingPoints%10==5){
            bonusScore+=2;
        }
        System.out.printf("%.1f%n", bonusScore);
        System.out.printf("%.1f", startingPoints+bonusScore);
    }
}
