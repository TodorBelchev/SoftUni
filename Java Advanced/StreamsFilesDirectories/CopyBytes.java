package StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

public class CopyBytes {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        try {
            FileInputStream fileInput = new FileInputStream(pathSrc);
            PrintWriter pr = new PrintWriter(new FileOutputStream("output.txt"));
            int currByte = fileInput.read();
            while (currByte != -1) {
                if (currByte == 10 || currByte == 32) {
                    pr.write(currByte);
                } else {
                    String digits = String.valueOf(currByte);
                    for (int i = 0; i < digits.length(); i++) {
                        pr.write(digits.charAt(i));
                    }
                }
                currByte = fileInput.read();
            }
            pr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
