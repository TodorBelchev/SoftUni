package Generics.JarOfT;

public class Main {
    public static void main(String[] args) {
        Jar<String> stringJar = new Jar<>();
        stringJar.add("a");
        stringJar.add("b");
        System.out.println(stringJar.remove());
    }
}
