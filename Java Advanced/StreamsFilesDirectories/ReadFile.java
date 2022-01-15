package StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.IOException;

public class ReadFile {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        try {
            FileInputStream fileInput = new FileInputStream(pathSrc);
            int oneByte = fileInput.read();
            while (oneByte != -1) {
                System.out.printf("%s ", Integer.toBinaryString(oneByte));
                oneByte = fileInput.read();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
