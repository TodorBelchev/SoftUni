package interfaces_and_abstraction.telephony;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] phones = scanner.nextLine().split("\\s+");
        String[] urls = scanner.nextLine().split("\\s+");
        Smartphone smartphone = new Smartphone(Arrays.asList(phones), Arrays.asList(urls));
        System.out.println(smartphone.call());
        System.out.println(smartphone.browse());
    }
}
