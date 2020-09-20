import java.util.Scanner;

public class WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double record= Double.parseDouble(scanner.nextLine());
        double distance= Double.parseDouble(scanner.nextLine());
        double timeForOneMeter= Double.parseDouble(scanner.nextLine());
        double totalTime=timeForOneMeter*distance;
        double delayTimes= Math.floor(distance/15);
        double delay=delayTimes*12.5;
        double totalTimeWithDelay=totalTime+delay;
        if(totalTimeWithDelay<record){
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", totalTimeWithDelay);
        }else{
            System.out.printf("No, he failed! He was %.2f seconds slower.", totalTimeWithDelay-record);
        }
    }
}
