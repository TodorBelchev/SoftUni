package SetsAndMaps;

import java.util.LinkedHashMap;
import java.util.Scanner;

public class FixEmails {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = "";
        LinkedHashMap<String, String> emailBook = new LinkedHashMap<>();

        while (true) {
            command = scanner.nextLine();
            if (command.equals("stop")) {
                break;
            }

            String email = scanner.nextLine();
            if (!email.endsWith("us") && !email.endsWith("uk") && !email.endsWith("com")) {
                emailBook.put(command, email);
            }
        }

        emailBook.forEach((k, v) -> {
            System.out.println(k + " -> " + v);
        });
    }
}
