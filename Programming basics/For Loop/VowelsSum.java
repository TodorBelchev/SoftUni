import java.util.Scanner;

public class VowelsSum {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        String input = scanner.nextLine();

        int sum=0;
        for (int j = 0; j <input.length() ; j++) {
            if(input.charAt(j) == 'a'){
                sum+=1;
            }else if(input.charAt(j) == 'e'){
                sum+=2;
            }else if(input.charAt(j) == 'i'){
                sum+=3;
            }else if(input.charAt(j) == 'o'){
                sum+=4;
            }else if(input.charAt(j) == 'u'){
                sum+=5;
            }
        }
        System.out.println(sum);
    }
}
