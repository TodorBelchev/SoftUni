package StreamsFilesDirectories;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

public class AllCapitals {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\input.txt";

        try {
            BufferedReader bf = new BufferedReader(new FileReader(pathSrc));
            PrintWriter pr = new PrintWriter("output.txt");
            String line = bf.readLine();
            while (line != null) {
                pr.println(line.toUpperCase());
                line = bf.readLine();
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
