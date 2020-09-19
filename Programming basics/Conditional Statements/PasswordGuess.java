import java.util.Scanner;

public class PasswordGuess {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        String passTry= scanner.nextLine();
        if(passTry.equals("s3cr3t!P@ssw0rd")){
            System.out.println("Welcome");
        }else{
            System.out.println("Wrong password!");
        }
    }
}
