import java.util.Scanner;
import java.util.ServiceConfigurationError;

public class MetricConverter {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double number= Double.parseDouble(scanner.nextLine());
        String inputMetric= scanner.nextLine();
        String outputMetric= scanner.nextLine();
        if(inputMetric.equals("m")){
            if(outputMetric.equals("cm")){
                number=number*100;
                System.out.printf("%.3f", number);
            }else if(outputMetric.equals("mm")){
                number=number*1000;
                System.out.printf("%.3f", number);
            }
        }else if(inputMetric.equals("cm")){
            if(outputMetric.equals("m")){
                number=number/100;
                System.out.printf("%.3f", number);
            }else if(outputMetric.equals("mm")){
                number=number*10;
                System.out.printf("%.3f", number);
            }
        }else if(inputMetric.equals("mm")){
            if(outputMetric.equals("m")){
                number=number/1000;
                System.out.printf("%.3f", number);
            }else if(outputMetric.equals("cm")){
                number=number/10;
                System.out.printf("%.3f", number);
            }
        }
    }
}
