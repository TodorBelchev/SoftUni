import java.util.Scanner;

public class Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tabsCount = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < tabsCount; i++) {
            String tabName = scanner.nextLine();
            if (tabName.equals("Facebook")) {
                salary -= 150;
                if (salary <= 0) {
                    System.out.printf("You have lost your salary.");
                    break;
                }
            } else if (tabName.equals("Instagram")) {
                salary -= 100;
                if (salary <= 0) {
                    System.out.printf("You have lost your salary.");
                    break;
                }
            } else if (tabName.equals("Reddit")) {
                salary -= 50;
                if (salary <= 0) {
                    System.out.printf("You have lost your salary.");
                    break;
                }
            }
        }
        if (salary > 0) {
            System.out.println(salary);
        }
    }
}
