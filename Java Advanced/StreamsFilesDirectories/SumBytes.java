package StreamsFilesDirectories;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class SumBytes {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Exercises-Resources\\input.txt";

        try {
            BufferedReader bf = new BufferedReader(new FileReader(pathSrc));
            String line = bf.readLine();
            int sum = 0;
            while (line != null) {
                for (int i = 0; i < line.length(); i++) {
                    sum += line.charAt(i);
                }
                line = bf.readLine();
            }
            System.out.println(sum);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
