package StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ExtractIntegers {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        try {
            FileInputStream fileInput = new FileInputStream(pathSrc);
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            Scanner scanner = new Scanner(fileInput);
            while (scanner.hasNext()) {
                if (scanner.hasNextInt()) {
                    pr.println(scanner.nextInt());
                }
                scanner.next();
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
