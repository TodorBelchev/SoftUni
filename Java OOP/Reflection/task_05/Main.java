package reflection.task_05;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Method[] methods = Tracker.class.getDeclaredMethods();

        printMethodsByAuthor(Tracker.class);
    }

    private static void printMethodsByAuthor(Class<?> cl) {
        getAuthorsOfMethods(cl).entrySet().forEach(entry -> {
            System.out.print(entry.getKey() + ": ");

            System.out.println(String.join(", ", entry.getValue()));
        });
    }

    private static Map<String, List<String>> getAuthorsOfMethods(Class<?> cl) {
        Map<String, List<String>> authorsOfMethods = new LinkedHashMap<>();

        Method[] methods = cl.getDeclaredMethods();

        for (Method method : methods) {
            String authorName = method.getDeclaredAnnotation(Author.class).name();
            String methodName = method.getName() + "()";

            if (!authorsOfMethods.containsKey(authorName)) {
                List<String> methodsList = new ArrayList<>();
                authorsOfMethods.put(authorName, methodsList);
            }
            authorsOfMethods.get(authorName).add(methodName);
        }

        return authorsOfMethods;
    }
}
