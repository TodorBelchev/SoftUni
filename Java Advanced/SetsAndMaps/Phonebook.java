package SetsAndMaps;

import java.util.HashMap;
import java.util.Scanner;

public class Phonebook {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        HashMap<String, String> phonebook = new HashMap<>();

        while (!input.equals("search")) {
            String[] contact = input.split("-");
            phonebook.put(contact[0], contact[1]);

            input = scanner.nextLine();
        }

        String searchedContact = scanner.nextLine();

        while (!searchedContact.equals("stop")) {

            if (phonebook.containsKey(searchedContact)) {
                String phone = phonebook.get(searchedContact);
                System.out.printf("%s -> %s%n", searchedContact, phone);
            } else {
                System.out.printf("Contact %s does not exist.%n", searchedContact);
            }
            searchedContact = scanner.nextLine();
        }
    }
}
