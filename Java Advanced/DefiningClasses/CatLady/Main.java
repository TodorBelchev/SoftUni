package Classes.CatLady;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\s+");
        Map<String, Cat> cats = new HashMap<>();

        while (!input[0].equals("End")) {
            String type = input[0];
            String name = input[1];
            double param = Double.parseDouble(input[2]);
            Cat cat = null;

            if (type.equals("Siamese")) {
                cat = new Siamese(name, param);
            } else if (type.equals("Cymric")) {
                cat = new Cymric(name, param);
            } else {
                cat = new StreetExtraordinaire(name, param);
            }

            cats.putIfAbsent(name, cat);

            input = scanner.nextLine().split("\\s+");
        }

        String catName = scanner.nextLine();
        System.out.println(cats.get(catName));
    }
}
