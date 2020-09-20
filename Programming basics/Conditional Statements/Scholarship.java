import java.util.Scanner;

public class Scholarship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double income = Double.parseDouble(scanner.nextLine());
        double averageScore = Double.parseDouble(scanner.nextLine());
        double minSalary = Double.parseDouble(scanner.nextLine());
        double socialScholarship = 0;
        double scoreScholarship = 0;
        if (averageScore >= 5.50) {
            scoreScholarship = Math.floor(averageScore * 25);
        }
        if (income < minSalary && averageScore > 4.5) {
            socialScholarship = Math.floor(minSalary * 0.35);
        }
        if(socialScholarship>scoreScholarship){
            System.out.printf("You get a Social scholarship %.0f BGN", socialScholarship);
        }else if(scoreScholarship>socialScholarship){
            System.out.printf("You get a scholarship for excellent results %.0f BGN", scoreScholarship);
        }else if(socialScholarship==0 && scoreScholarship==0){
            System.out.print("You cannot get a scholarship!");
        }
    }
}

