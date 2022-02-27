package encapsulation.shopping_spree;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<String, Person> people = new LinkedHashMap<>();
        Map<String, Product> products = new LinkedHashMap<>();

        String[] peopleInput = scanner.nextLine().split(";");

        try {
            for (int i = 0; i < peopleInput.length; i++) {
                String[] personData = peopleInput[i].split("=");
                Person person = new Person(personData[0], Double.parseDouble(personData[1]));
                people.put(person.getName(), person);
            }

            String[] productsInput = scanner.nextLine().split(";");

            for (int i = 0; i < productsInput.length; i++) {
                String[] productData = productsInput[i].split("=");
                Product product = new Product(productData[0], Double.parseDouble(productData[1]));
                products.put(product.getName(), product);
            }

            String input = scanner.nextLine();

            while (!input.equals("END")) {
                String[] purchaseData = input.split("\\s+");
                people.get(purchaseData[0]).buyProduct(products.get(purchaseData[1]));
                System.out.printf("%s bought %s%n", people.get(purchaseData[0]).getName(), products.get(purchaseData[1]).getName());

                input = scanner.nextLine();
            }

        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }

        for (Person person : people.values()) {
            if (person.getProducts().size() == 0) {
                System.out.printf("%s - Nothing bought", person.getName());
            } else {
                System.out.printf("%s - %s", person.getName(), person.getProducts().stream().map(Product::getName).collect(Collectors.joining(", ")));
            }
            System.out.println();
        }
    }
}
