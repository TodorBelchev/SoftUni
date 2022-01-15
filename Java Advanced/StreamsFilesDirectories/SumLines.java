package StreamsFilesDirectories;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SumLines {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\input.txt";

        try {
            BufferedReader bf = new BufferedReader(new FileReader(pathSrc));
            String line = bf.readLine();
            while (line != null) {
                int sum = 0;
                for (int i = 0; i < line.length(); i++) {
                    sum += line.charAt(i);
                }
                System.out.println(sum);
                line = bf.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
