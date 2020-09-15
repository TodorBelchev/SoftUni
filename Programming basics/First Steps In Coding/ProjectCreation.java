import java.util.Scanner;

public class ProjectCreation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int projectsCount = Integer.parseInt(scanner.nextLine());
        int timeNeeded = projectsCount * 3;
        System.out.printf("The architect %s will need %d hours to complete %d project/s.", name, timeNeeded, projectsCount);
    }
}
