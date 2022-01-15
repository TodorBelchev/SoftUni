package StreamsFilesDirectories;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class WriteFile {
    public static void main(String[] args) {
        String pathSrc = "C:\\Users\\Gaming Beast\\Desktop\\projects\\Java\\JavaAdvandedUpr\\04. Java-Advanced-Files-and-Streams-Lab-Resources\\input.txt";
        Set<Character> charSet = new HashSet<>(Arrays.asList(',', '.', '!', '?'));
        try {
            FileInputStream fileInput = new FileInputStream(pathSrc);
            FileOutputStream fileOutput = new FileOutputStream("output.txt");
            int currByte = fileInput.read();
            while (currByte != -1) {
                char current = (char) currByte;
                if (!charSet.contains(current)) {
                    fileOutput.write(currByte);
                }
                currByte = fileInput.read();
            }
            fileOutput.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
