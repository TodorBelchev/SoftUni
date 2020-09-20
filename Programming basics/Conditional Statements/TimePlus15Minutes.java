import java.util.Scanner;
import java.util.ServiceConfigurationError;

public class TimePlus15Minutes {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        int hour= Integer.parseInt(scanner.nextLine());
        int minutes= Integer.parseInt(scanner.nextLine());
        int timeInMinutes= hour*60+minutes;
        int timeAfter15Minutes=timeInMinutes+15;
        int hourAfter=timeAfter15Minutes/60;
        int minuteAfter=timeAfter15Minutes%60;
        if(hourAfter>23){
            hourAfter=0;
        }
        System.out.printf("%d:%02d", hourAfter,minuteAfter);
    }
}
