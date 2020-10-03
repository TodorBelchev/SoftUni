import java.util.Scanner;

public class StreamOfLetters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        int cCount = 0;
        int oCount = 0;
        int nCount = 0;
        String output = "";
        String print = "";
        while (!command.equals("End")) {
            char x = command.charAt(0);
            if ((((x >= 'a' || x <= 'z') || (x >= 'A' || x <= 'Z')) && Character.isAlphabetic(x))) {
                if ((x == 'c' || x == 'o' || x == 'n') && (cCount == 0 || oCount == 0 || nCount == 0)) {
                    switch (x) {
                        case 'c':
                            if (cCount == 1) {
                                output += x;
                                break;
                            } else {
                                cCount++;
                            }
                            break;
                        case 'o':
                            if (oCount == 1) {
                                output += x;
                                break;
                            } else {
                                oCount++;
                            }
                            break;
                        case 'n':
                            if (nCount == 1) {
                                output += x;
                                break;
                            } else {
                                nCount++;
                            }
                            break;
                    }
                } else {
                    output += x;
                }
                if ((x == 'c' || x == 'o' || x == 'n') && (cCount == 1 && oCount == 1 && nCount == 1)) {
                    output += " ";
                    print += output;
                    cCount = 0;
                    oCount = 0;
                    nCount = 0;
                    output = "";
                }
            }
            command = scanner.nextLine();
        }
        System.out.println(print);
    }
}