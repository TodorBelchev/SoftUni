package Classes.BankAccount;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<Integer, BankAccount> bankAccounts = new LinkedHashMap<>();

        String[] input = scanner.nextLine().split("\\s+");

        while (!input[0].equals("End")) {
            String command = input[0];
            if (command.equals("Create")) {
                BankAccount current = new BankAccount();
                bankAccounts.put(current.getId(), current);
                System.out.printf("Account ID%d created%n", current.getId());
            } else if (command.equals("Deposit")) {
                int id = Integer.parseInt(input[1]);
                double amount = Double.parseDouble(input[2]);
                if (bankAccounts.containsKey(id)) {
                    bankAccounts.get(id).deposit(amount);
                    System.out.printf("Deposited %.0f to ID%d%n", amount, id);
                } else {
                    System.out.println("Account does not exist");
                }
            } else if (command.equals("SetInterest")) {
                double interest = Double.parseDouble(input[1]);
                BankAccount.setInterestRate(interest);
            } else if (command.equals("GetInterest")) {
                int id = Integer.parseInt(input[1]);
                int years = Integer.parseInt(input[2]);
                if (bankAccounts.containsKey(id)) {
                    double interest = bankAccounts.get(id).getInterest(years);
                    System.out.printf("%.2f%n", interest);
                } else {
                    System.out.println("Account does not exist");
                }
            }


            input = scanner.nextLine().split("\\s+");
        }
    }
}
